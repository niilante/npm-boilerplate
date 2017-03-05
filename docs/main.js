(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";var _src=require("../src"),foo=new _src.Foo({baz:"NPM"}),d=global.document,el=d.createElement("h3");el.innerHTML=(0,_src.hello)(foo.baz()),d.body.appendChild(el);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../src":4}],2:[function(require,module,exports){
"use strict";function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),Foo=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,e),this.props=r}return _createClass(e,[{key:"bar",value:function(){return"bar"}},{key:"baz",value:function(){return this.props.baz}}]),e}();exports.Foo=Foo,exports.default={Foo:Foo};

},{}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var hello=function(){return"Hello "+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"World")};exports.hello=hello,exports.default={hello:hello};

},{}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Foo=exports.hello=void 0;var _helloWorld=require("./hello-world"),_foo=require("./foo");exports.hello=_helloWorld.hello,exports.Foo=_foo.Foo,exports.default={hello:_helloWorld.hello,Foo:_foo.Foo};

},{"./foo":2,"./hello-world":3}]},{},[1]);
