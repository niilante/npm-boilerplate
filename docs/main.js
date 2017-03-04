(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _src = require('../src');

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var d = global.document;
var h1 = d.createElement('h1');
h1.innerHTML = (0, _src2.default)('world');
d.body.appendChild(h1);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../src":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * hello world function. Returns Hello + `name`
 * @param  {string} [name='World'] the `name` to use (defaults to `'World'`)
 * @returns {string} returns 'Hello' + `name`
 */
var hello = function hello() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'World';
  return 'Hello ' + name;
};

exports.default = hello;

},{}]},{},[1]);
