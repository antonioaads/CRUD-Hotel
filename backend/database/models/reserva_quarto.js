const generic = require('../generic')

const ReservaQuarto = pool => {
  const columns = [
    'id', 'quarto_id', 'prc_pago', 'dat_inicio_estadia', 'qtd_noites'
  ]
  const model = generic('reserva_quarto', columns, pool)

  return model
}

module.exports = ReservaQuarto
