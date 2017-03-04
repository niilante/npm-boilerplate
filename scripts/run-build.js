/*
 * if you want to use css-modules or cssnext
 * please follow the comments in this file.
 *
 * css-modules
 * (1): import css-modulesify (requires `yarn add css-modulesify`)
 * (2): remove `main.css` from copy batch (comment or delete)
 * (3): laod css-modulsify into browserify
 *
 * cssnext
 * (4): import cssnext (requires `yarn add postcss-cssnext`)
 * (5): run cssnext in the "after" batch
 */

const exec = require('child_process').exec
const fs = require('fs')
const Log = require('log')
const browserify = require('browserify')
const watchify = require('watchify')
const errorify = require('errorify')
// (1) Uncomment the following line if you want to use css-modules
// const cssModulesify = require('css-modulesify')
// (4) Uncomment the following line if you want to use cssnext
// const cssNext = require('postcss-cssnext')
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
    const demoFiles = [
      'index.html',
      // (2) Comment the line if you want to use css-modules
      'main.css',
      'favico.png',
    ]
    const command = demoFiles.map(file => `cp ${srcFolder}/${file} ${buildFolder}/${file}`).join(';')
    exec(command, err => {
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

      // (3) Uncomment the following block if you want to use css-modules
      // b.plugin(cssModulesify, {
      //   // (5) Uncomment the following line if you want to use cssnext
      //   // after: [cssNext()],
      //   output: `${outFile}.css`,
      //   generateScopedName: cssModulesify.generateScopedName,
      //   global: true
      // })

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
