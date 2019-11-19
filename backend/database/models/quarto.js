const generic = require('../generic')

const Quarto = pool => {
  const columns = [
    'id', 'hotel_id', 'tipo_quarto_id', 'num_camas_solteiro', 'num_camas_casal', 'num_quarto'
  ]
  const model = generic('quarto', columns, pool)

  // EXAMPLE ONLY - SHALL BE REMOVED SOON
  model.findAllWithDistricts = () => pool.query(`
    SELECT a.id, a.street, a.number, d.name district
      FROM addresses a
        INNER JOIN address_districts d ON a.district_id = d.id
  `).then(({ rows }) => rows)

  return model
}

module.exports = Quarto
