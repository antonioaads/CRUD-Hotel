const controllers = require('./controllers')

module.exports = app => {
  app.get('/rooms/:id', controllers.showRoom)
  app.get('/rooms', controllers.listRooms)
  app.post('/rooms', controllers.createRooms)
  app.put('/rooms/:id', controllers.updateRooms)
  app.delete('/rooms/:id', controllers.deleteRooms)
}
