# NPM BOILERPLATE

A modern boilerplate for npm things with wings.


[![Browserify](https://img.shields.io/badge/build-browserify-3c6991.svg?style=flat-square)](http://browserify.org/)
[![Babel](https://img.shields.io/badge/babel-stage--0-f5da55.svg?style=flat-square)](http://babeljs.io/docs/plugins/preset-stage-0/)
[![code style xo](https://img.shields.io/badge/code_style-XO-64d8c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)
[![test ava](https://img.shields.io/badge/test-🚀_ava-0e1d5c.svg?style=flat-square)](https://github.com/avajs/ava)
[![yarn](https://img.shields.io/badge/yarn-friendly-2c8ebb.svg?style=flat-square)](https://yarnpkg.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-44aa44.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-44aa44.svg?style=flat-square)](https://github.com/conventional-changelog/standard-version)


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
    "semicolon": false,
    "ignore": [
      "scripts/**/*.js",
      "docs/**/*.js",
      "coverage/**/*.js",
      "lib/**/*.js"
    ]
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
