# NPM BOILERPLATE

A modern boilerplate for npm things with wings.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/pixelass/npm-boilerplate/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/pixelass/npm-boilerplate.svg?style=flat-square)](https://github.com/pixelass/npm-boilerplate/issues)
[![Coveralls](https://img.shields.io/coveralls/pixelass/npm-boilerplate.svg?style=flat-square)](https://coveralls.io/github/pixelass/npm-boilerplate)
[![bitHound](https://img.shields.io/bithound/code/github/pixelass/npm-boilerplate.svg?style=flat-square)](https://www.bithound.io/github/pixelass/npm-boilerplate)
[![bitHound](https://img.shields.io/bithound/devDependencies/github/pixelass/npm-boilerplate.svg?style=flat-square)](https://www.bithound.io/github/pixelass/npm-boilerplate)

[![Browserify](https://img.shields.io/badge/build-browserify-3c6991.svg?style=flat-square)](http://browserify.org/)
[![Babel](https://img.shields.io/badge/babel-stage--0-f5da55.svg?style=flat-square)](http://babeljs.io/docs/plugins/preset-stage-0/)
[![code style xo](https://img.shields.io/badge/code_style-XO-64d8c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-44aa44.svg?style=flat-square)](https://github.com/conventional-changelog/standard-version)
[![test ava](https://img.shields.io/badge/test-🚀_AVA-0e1d5c.svg?style=flat-square)](https://github.com/avajs/ava)

[![yarn](https://img.shields.io/badge/yarn-friendly-2c8ebb.svg?style=flat-square)](https://yarnpkg.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-44aa44.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![CSS modules](https://img.shields.io/badge/css--modules-ready-aa4444.svg?style=flat-square)](https://github.com/css-modules/css-modulesify)
[![CSS next](https://img.shields.io/badge/css--next-ready-aa4444.svg?style=flat-square)](http://cssnext.io/)

## Links
* [Documentation](https://pixelass.github.io/npm-boilerplate/api/) (Example)
* [Demo](https://pixelass.github.io/npm-boilerplate/) (Example)

## Getting started

Clone this repository and use it as a starting point.

```shell
git clone git@github.com:pixelass/npm-boilerplate.git my-npm-module
cd my-npm-module
## use yarn
yarn
## or npm
## npm i
```

## Reset git

```shell
cd my-npm-module
rm -rf .git
git init
```

## Run package config

Use the `package.config.json` file to enter your own package data.
Then simple run the init script to update the original `package.json` of this project

```shell
node scripts/npm-init
```

after that you can remove the config files

```shell
rm -rf package.config.json scripts/npm-init.js
```

## Developing

To start a dev server and start developing try the following commands

* `start`: starts the dev server and builds the required files
* `test`: runs test and lints files
* `run dev`: starts the dev server and watches the required files
* `run babel`: generates lib from source
* `run build`: builds all files from source
* `run watch`: builds and watches all files from source
* `run lint`: lints javascript files
* `run release`: release new version using "standard-version"

### Examples

**Starts a simple http-server**

```
npm start
```

**Starts a simple http-server and watches files**

```
npm run dev
```

## What's included?

### Transforms

* [Babel](http://babeljs.io/)
  * [stage 0](http://babeljs.io/docs/plugins/preset-stage-0/)
  * [es2015](http://babeljs.io/docs/plugins/preset-es2015/)
* [Browserify](http://browserify.org/)

You can change the rules inside the `package.json` file.

* `babel`: `{<SETTINGS>}`
* `browserify`: `{<SETTINGS>}`

**defaults**

```json
{
  "babel": {
    "presets": [
      "es2015",
      "stage-0"
    ]
  },
  "browserify": {
    "transform": [
      "babelify"
    ]
  }
}
```


### Coding style

* CSS: [stylelint](https://stylelint.io/)
* JS: [xo](https://github.com/sindresorhus/xo)

You can change the rules inside the `package.json` file.

* `xo`: `{<SETTINGS>}`
* `stylelint`: `{<SETTINGS>}`

**defaults**

```json
{
  "xo": {
    "space": true,
    "semicolon": false
  },
  "stylelint": {
    "extends": "stylelint-config-standard",
    "rules": {
      "indentation": 2,
      "number-leading-zero": null
    }
  }
}
```

### Code quality

* [bithound](https://bithound.io/)

You can change the rules inside the `.bithound` file. 

**defaults**

```json
{
  "ignore": [
    "**/node_modules/**",
    "**/**.min.**",
    "**/dist/**",
    "**/docs/**",
    "/index.js"
  ],
  "test": [
    "**/spec/**"
  ],
  "critics": {
    "lint": {
      "engine": "none"
    },
    "wc": {
      "limit": 5000
    }
  }
}
```

### Testing

* [Ava](https://github.com/avajs/ava/)
* [Coveralls](https://coveralls.io)
* [tap-nyan (for some fun)](https://github.com/calvinmetcalf/tap-nyan)

You can change the rules inside the `package.json` file.

* `ava`: `{<SETTINGS>}`

**defaults**

```json
{
  "ava": {
    "files": [
      "src/**/spec/*.js"
    ],
    "source": [
      "src/**/*.js"
    ],
    "presets": [
      "@ava/stage-4",
      "@ava/transform-test-files"
    ],
    "failFast": true,
    "tap": true,
    "require": [
      "babel-register"
    ],
    "babel": "inherit"
  }
}
```

### Documentation

* [jsdoc](http://usejsdoc.org/)
* [hopsdoc](https://www.npmjs.com/package/hopsdoc)

You can change the rules inside the `jsdoc.json` file.

**defaults**

```json
{
  "tags": {
    "allowUnknownTags": true,
    "dictionaries": ["jsdoc"]
  },
  "plugins": [
    "plugins/markdown"
  ],
  "templates": {
    "cleverLinks": true,
    "monospaceLinks": true
  },
  "source": {
    "include": ["src", "README.md"],
    "includePattern": "\\.js$",
    "excludePattern": "(node_modules/|docs|coverage|lib)"
  },
  "opts": {
    "encoding": "utf8",
    "destination": "./docs/api",
    "private": false,
    "recurse": true,
    "template": "node_modules/hopsdoc"
  }
}
```

Hopsdoc is a fully responsive theme that allows custom themes.
You can simply remove it and load a different theme.

```shell
yarn remove hopsdoc
```

### CSS (optional)

* [css-modulesify](https://github.com/css-modules/css-modulesify) (disabled)
* [cssnext](http://cssnext.io/) (disabled)

To enable [css-modules](https://github.com/css-modules/css-modules)
simply install the dependency and follow the comments inside `scripts/run-build.js`

```shell
yarn add css-modulesify -D
```

To enable [cssnext](http://cssnext.io/)
simply install the dependency and follow the comments inside `scripts/run-build.js`

```shell
yarn add postcss-cssnext -D
```

