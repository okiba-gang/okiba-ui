(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{6:function(t,o,n){"use strict";n.r(o);var e=n(17),r=n(18),c=n(28),i=n(15);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,o){return!o||"object"!==u(o)&&"function"!=typeof o?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):o}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,o){return(s=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}var l=function(t){function o(t){var n;return function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),n=f(this,p(o).call(this,t)),i.a.on("scroll",(function(){return n.update({y:window.scrollY})})),n}return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),o&&s(t,o)}(o,t),o}(c.a);new r.a({el:Object(e.b)("#app"),components:[{selector:"#sticky",type:l,options:{thresholdTop:200,overflow:!0}}]})}}]);