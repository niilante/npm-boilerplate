const exec = require('child_process').exec
const Log = require('log')
const pkg = require('../package.json')

const log = new Log('info')

log.info(`starting server on http://localhost:${pkg.devPort}`)
module.exports = () => {
  exec(`cd docs && http-server -p ${pkg.devPort}`, err => {
    if (err) {
      throw err
    }
  })
}
