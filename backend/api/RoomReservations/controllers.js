const { ReservaQuarto, Quarto } = require('database')
const Moment = require('moment')

module.exports = {
  showRoomReservation: async (req, res) => {
    const roomReserv = await ReservaQuarto.findByPk(req.params.id)

    if (roomReserv) {
      roomReserv.quarto = await Quarto.findByPk(roomReserv.quarto_id)
      delete roomReserv.quarto_id
      res.send(roomReserv)
    } else res.status(404).send({ message: 'Entity not found' })
  },

  listRoomReservations: async (req, res) => {
    const list = await ReservaQuarto.findAll()
    res.send(list)
  },

  createRoomReservations: async (req, res) => {
    try {
      const reservations = await ReservaQuarto.findAllFromRoom(req.body.quarto_id)

      let vacant = true
      for (const reservation of reservations) {
        if (
          Moment(reservation.dat_inicio_estadia).isSameOrBefore(Moment(req.body.checkout)) &&
          Moment(reservation.dat_inicio_estadia).add(reservation.qtd_noites, 'days').isSameOrAfter(Moment(req.body.checkin))
        ) {
          vacant = false
          break
        }
      }

      if (!vacant) {
        res.status(400).send({ message: 'Room already reserved' })
        return
      }

      req.body.dat_inicio_estadia = req.body.checkin
      req.body.qtd_noites = Moment(req.body.checkout).diff(req.body.checkin, 'days')

      const roomReserv = await ReservaQuarto.create(req.body)

      if (!roomReserv) throw new Error()

      res.send(roomReserv)
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not create' })
    }
  },

  updateRoomReservations: async (req, res) => {
    try {
      const roomReserv = await ReservaQuarto.update(req.params.id, req.body)

      if (roomReserv) res.send(roomReserv)
      else res.status(404).send({ message: 'Entity not found' })
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not update' })
    }
  },

  deleteRoomReservations: async (req, res) => {
    try {
      const roomReserv = await ReservaQuarto.delete(req.params.id)

      if (roomReserv) res.send(roomReserv)
      else res.status(404).send({ message: 'Entity not found' })
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not delete' })
    }
  }
}
