const controllers = require('./controllers')

const baseUrl = '/hotels'

module.exports = app => {
  app.get(`${baseUrl}/rooms`, controllers.listOwnedRooms)
  app.get(`${baseUrl}/:id`, controllers.showHotel)
  app.get(`${baseUrl}`, controllers.listHotels)
  app.post(`${baseUrl}`, controllers.createHotels)
  app.put(`${baseUrl}/:id`, controllers.updateHotels)
  app.delete(`${baseUrl}/:id`, controllers.deleteHotels)
}
