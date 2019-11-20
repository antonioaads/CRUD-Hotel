const { Quarto } = require('database')

module.exports = {
  showRoom: async (req, res) => {
    const room = await Quarto.findByPk(req.params.id)

    res.send(room)
  },

  listRooms: async (req, res) => {
    const list = await Quarto.findAll()
    res.send(list)
  },

  createRooms: async (req, res) => {
    try {
      const room = await Quarto.create(req.body)

      if (!room) throw new Error()

      res.send(room)
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not create' })
    }
  },

  updateRooms: async (req, res) => {
    try {
      const room = await Quarto.update(req.params.id, req.body)

      if (room) res.send(room)
      else res.status(404).send({ message: 'Entity not found' })
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not update' })
    }
  },

  deleteRooms: async (req, res) => {
    try {
      const room = await Quarto.delete(req.params.id)

      if (room) res.send(room)
      else res.status(404).send({ message: 'Entity not found' })
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not delete' })
    }
  }
}
