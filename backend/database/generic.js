const { isNil, objToArr } = require('utils')

module.exports = (tableName, columns, pool) => ({
  tableName: tableName,
  tableColumns: columns,

  create: (attrs) => {
    attrs = internals.extractAllowedColumns(attrs, columns)

    const query = `
      INSERT INTO ${tableName} (${internals.columnsToString(attrs)})
      VALUES (${internals.getWildcards(attrs)})
      RETURNING *
    `

    return pool.query(query, objToArr(attrs)).then(({ rows }) => rows[0] || null)
  },

  update: (id, attrs) => {
    attrs = internals.extractAllowedColumns(attrs, columns)
    const updateMoreThanOneCol = Object.keys(attrs).length > 1
    const query = `
      UPDATE ${tableName} SET ${updateMoreThanOneCol ? '(' : ''}${internals.columnsToString(attrs)}${updateMoreThanOneCol ? ')' : ''} = (${internals.getWildcards(attrs, 2)})
      WHERE id = $1::integer
      RETURNING *
    `

    return pool.query(query, [id, ...objToArr(attrs)]).then(({ rows }) => rows[0] || null)
  },

  delete: (id) => {
    return pool.query(`DELETE FROM ${tableName} WHERE id = $1::integer RETURNING *`, [id]).then(({ rows }) => rows[0] || null)
  },

  findAll: () => pool.query(`SELECT * FROM ${tableName}`).then(({ rows }) => rows),
  findByPk: (id) => pool.query(`SELECT * FROM ${tableName} WHERE id = $1::integer`, [id]).then(({ rows }) => rows[0] || null)
})

const internals = {
  extractAllowedColumns: (attrs, columns) => {
    const allowedAttrs = {}
    columns.forEach(col => {
      if (!isNil(attrs[col]) && col !== 'id') allowedAttrs[col] = attrs[col]
    })
    return allowedAttrs
  },

  columnsToString: (attrs) => {
    let list = ''
    const keys = Object.keys(attrs)
    keys.forEach((col, index) => {
      list = `${list}${col}${index === keys.length - 1 ? '' : ', '}`
    })
    return list
  },

  getWildcards: (attrs, initial = 1) => {
    let list = ''
    const keys = Object.keys(attrs)
    keys.forEach((col, index) => {
      list = `${list}$${index + initial}${index === keys.length - 1 ? '' : ', '}`
    })
    return list
  }
}
