const controllers = require('./controllers')

const baseUrl = '/room-reservations'

module.exports = app => {
  app.get(`${baseUrl}/:id`, controllers.showRoomReservation)
  app.get(`${baseUrl}`, controllers.listRoomReservations)
  app.post(`${baseUrl}`, controllers.createRoomReservations)
  app.put(`${baseUrl}/:id`, controllers.updateRoomReservations)
  app.delete(`${baseUrl}/:id`, controllers.deleteRoomReservations)
}
