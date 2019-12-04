const { Hotel, Quarto, ReservaQuarto, PrecoPorTemporada } = require('database')
const { isNil } = require('utils')
const Moment = require('moment')

module.exports = {
  showHotel: async (req, res) => {
    const hotel = await Hotel.findByPk(req.params.id)

    if (hotel) res.send(hotel)
    else res.status(404).send({ message: 'Entity not found' })
  },

  listHotels: async (req, res) => {
    const list = await Hotel.findAll()
    res.send(list)
  },

  listOwnedRooms: async (req, res) => {
    if (isNil(req.query.checkin) || isNil(req.query.checkout) || (!Moment(req.query.checkin).isValid() || !Moment(req.query.checkout).isValid())) {
      res.send([])
      return
    }

    const roomList = await Quarto.findAllFromHotel(req.query.idhotel)
    const vacantRooms = []

    for (const room of roomList) {
      const reservations = await ReservaQuarto.findAllFromRoom(room.id)

      let vacant = true
      for (const reservation of reservations) {
        if (
          Moment(reservation.dat_inicio_estadia).isSameOrBefore(Moment(req.query.checkout)) &&
          Moment(reservation.dat_inicio_estadia).add(reservation.qtd_noites, 'days').isSameOrAfter(Moment(req.query.checkin))
        ) {
          vacant = false
          break
        }
      }

      vacant.hotel = await Hotel.findByPk(vacant.hotel_id)
      console.log(vacant, vacant.hotel)
      delete vacant.hotel_id
      if (vacant) vacantRooms.push(room)
    }

    for (const i in vacantRooms) {
      vacantRooms[i].preco = await PrecoPorTemporada.findLowestPrice(vacantRooms[i].id, req.query.checkin, req.query.checkout)
        .then(r => (r[0] || { preco: 50 }).preco)
      vacantRooms[i].preco *= Moment(req.query.checkout).diff(req.query.checkin, 'days')
    }

    res.send(vacantRooms)
  },

  createHotels: async (req, res) => {
    try {
      const hotel = await Hotel.create(req.body)

      if (!hotel) throw new Error()

      res.send(hotel)
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not create' })
    }
  },

  updateHotels: async (req, res) => {
    try {
      const hotel = await Hotel.update(req.params.id, req.body)

      if (hotel) res.send(hotel)
      else res.status(404).send({ message: 'Entity not found' })
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not update' })
    }
  },

  deleteHotels: async (req, res) => {
    try {
      const hotel = await Hotel.delete(req.params.id)

      if (hotel) res.send(hotel)
      else res.status(404).send({ message: 'Entity not found' })
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not delete' })
    }
  }
}
