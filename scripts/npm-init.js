const fs = require('fs')
const path = require('path')
const config = require('../package.config.json')
const pkg = require('../package.json')

fs.writeFileSync(path.join(__dirname, '/../package.json'),  JSON.stringify(Object.assign(pkg, config), null, 2))
