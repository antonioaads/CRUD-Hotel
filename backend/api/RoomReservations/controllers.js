const { ReservaQuarto } = require('database')

module.exports = {
  showRoomReservation: async (req, res) => {
    const roomReserv = await ReservaQuarto.findByPk(req.params.id)

    res.send(roomReserv)
  },

  listRoomReservations: async (req, res) => {
    const list = await ReservaQuarto.findAll()
    res.send(list)
  },

  createRoomReservations: async (req, res) => {
    try {
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
