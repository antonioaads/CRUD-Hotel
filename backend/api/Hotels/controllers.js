const { Hotel } = require('database')

module.exports = {
  showHotel: async (req, res) => {
    const hotel = await Hotel.findByPk(req.params.id)

    res.send(hotel)
  },

  listHotels: async (req, res) => {
    const list = await Hotel.findAll()
    res.send(list)
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
