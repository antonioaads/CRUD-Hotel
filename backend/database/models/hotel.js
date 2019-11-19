const generic = require('../generic')

const Hotel = pool => {
  const columns = ['id', 'nome']
  const model = generic('hotel', columns, pool)

  return model
}

module.exports = Hotel
