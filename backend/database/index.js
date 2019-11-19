const { Pool } = require('pg')
const { readdirSync } = require('fs')

const pool = new Pool()

const db = {}
const files = readdirSync('database/models')

files.forEach(fileName => {
  fileName = fileName.replace(/\.js/g, '')

  let formattedName = ''
  fileName.split('_').forEach(word => {
    formattedName = `${formattedName}${word[0].toUpperCase()}${word.slice(1)}`
  })

  db[formattedName] = require(`./models/${fileName}`)(pool)
})

db.Transaction = async callback => {
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    try {
      await callback(client)
      await client.query('COMMIT')
    } catch (e) {
      await client.query('ROLLBACK')
      throw e
    }
  } finally {
    client.release()
  }
}

module.exports = db
