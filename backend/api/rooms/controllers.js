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
      const result = await Quarto.create(req.body.room)
      res.send(result)
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not create' })
    }
  },

  updateRooms: async (req, res) => {
    try {
      const room = await Quarto.update(req.params.id, req.body)
      res.send(room)
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not update' })
    }
  },

  deleteRooms: async (req, res) => {
    try {
      const room = await Quarto.delete(req.params.id)
      res.send(room)
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not delete' })
    }
  }
}
