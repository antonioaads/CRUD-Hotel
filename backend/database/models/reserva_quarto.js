const generic = require('../generic')

const ReservaQuarto = pool => {
  const columns = [
    'id', 'quarto_id', 'prc_pago', 'dat_inicio_estadia', 'qtd_noites'
  ]
  const model = generic('reserva_quarto', columns, pool)

  model.findAllFromRoom = (id) => pool.query(`
    SELECT *
      FROM reserva_quarto
      WHERE quarto_id = $1
`, [id]).then(({ rows }) => rows)

  return model
}

module.exports = ReservaQuarto
