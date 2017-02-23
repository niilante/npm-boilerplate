const exec = require('child_process').exec
const pkg = require('../package.json')

exec(`cd docs && http-server -p ${pkg.devPort}`, (err) => {
  if (err) {
    throw err
  }
})
