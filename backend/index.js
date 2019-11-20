require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(cors())

require('./database')
require('./api')(app)

app.listen(process.env.PORT, () => {
  console.log(`back-hotel running on port ${process.env.PORT}`)
})
