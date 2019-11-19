const generic = require('../generic')

const PrecoPorTemporada = pool => {
  const columns = [
    'id', 'tipo_quarto_id', 'preco', 'dat_inicio_temporada', 'dat_fim_temporada'
  ]
  const model = generic('preco_por_temporada', columns, pool)

  return model
}

module.exports = PrecoPorTemporada
