const generic = require('../generic')

const PrecoPorTemporada = pool => {
  const columns = [
    'id', 'tipo_quarto_id', 'preco', 'dat_inicio_temporada', 'dat_fim_temporada'
  ]
  const model = generic('preco_por_temporada', columns, pool)

  model.findLowestPrice = (id, checkin, checkout) => pool.query(`
    SELECT preco
      FROM preco_por_temporada
      WHERE 
        tipo_quarto_id = $1
      AND
        dat_inicio_temporada <= $3::date
      AND
        dat_fim_temporada >= $2::date
  `, [id, checkin, checkout]).then(({ rows }) => rows)

  return model
}

module.exports = PrecoPorTemporada
