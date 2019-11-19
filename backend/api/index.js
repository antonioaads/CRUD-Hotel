const { readdirSync } = require('fs')

module.exports = app => {
  let directories = readdirSync('api')
  directories = directories.filter(item => !item.match(/.*\..*/))

  directories.forEach(dir => {
    require(`./${dir}/routes`)(app)
  })
}
