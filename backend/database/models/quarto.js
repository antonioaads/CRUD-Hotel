const generic = require('../generic')

const Quarto = pool => {
  const columns = [
    'id', 'hotel_id', 'tipo_quarto_id', 'num_camas_solteiro', 'num_camas_casal', 'num_quarto'
  ]
  const model = generic('quarto', columns, pool)

  model.findAllFromHotel = (id) => pool.query(`
    SELECT q.*, t.max_ocupantes
      FROM quarto q
      INNER JOIN tipo_quarto t ON q.tipo_quarto_id = t.id
      WHERE hotel_id = $1
  `, [id]).then(({ rows }) => rows)

  return model
}

module.exports = Quarto
