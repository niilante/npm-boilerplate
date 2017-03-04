const exec = require('child_process').exec
const fs = require('fs')
const Log = require('log')
const browserify = require('browserify')
const watchify = require('watchify')
const errorify = require('errorify')
const pkg = require('../package.json')

const log = new Log('info')
const fileMap = {
  'index.js': 'main'
}

const files = Object.keys(fileMap)
const srcFolder = `${__dirname}/../demo`
const buildFolder = `${__dirname}/../docs`

const outFiles = files.map(file => {
  return `${buildFolder}/${fileMap[file]}.js`
}).join(' ')

module.exports = watch => {
  exec(`rm -rf ${outFiles} ${buildFolder}/index.html`, err => {
    if (err) {
      throw err
    }

    exec(`cp ${srcFolder}/index.html ${buildFolder}/index.html;
          cp ${srcFolder}/favico.png ${buildFolder}/favico.png
    `, err => {
      if (err) {
        throw err
      }
    })

    files.forEach(file => {
      const inFile = `${srcFolder}/${file}`
      const outFile = `${buildFolder}/${fileMap[file]}`
      const plugin = [errorify]
      if (watch) {
        plugin.push(watchify)
      }
      const b = browserify({
        entries: [inFile],
        plugin
      })

      function bundle() {
        b.bundle().pipe(fs.createWriteStream(`${outFile}.js`))
      }

      b.on('log', message => log.info(message))
      b.on('error', message => log.error(message))
      if (watch) {
        b.on('update', bundle)
      }
      bundle()
    })
  })
}
