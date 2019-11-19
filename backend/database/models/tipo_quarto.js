const generic = require('../generic')

const TipoQuarto = pool => {
  const columns = ['id', 'nom_tipo', 'max_ocupantes', 'banheiro_compartilhado']
  const model = generic('tipo_quarto', columns, pool)

  return model
}

module.exports = TipoQuarto
