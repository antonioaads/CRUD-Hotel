const controllers = require('./controllers')

const baseUrl = '/rooms'

module.exports = app => {
  app.get(`${baseUrl}/:id`, controllers.showRoom)
  app.get(`${baseUrl}`, controllers.listRooms)
  app.post(`${baseUrl}`, controllers.createRooms)
  app.put(`${baseUrl}/:id`, controllers.updateRooms)
  app.delete(`${baseUrl}/:id`, controllers.deleteRooms)
}
