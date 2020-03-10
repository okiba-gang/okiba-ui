(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Okiba"] = factory();
	else
		root["Okiba"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 130);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var shared = __webpack_require__(33);
var has = __webpack_require__(5);
var uid = __webpack_require__(36);
var NATIVE_SYMBOL = __webpack_require__(51);
var USE_SYMBOL_AS_UID = __webpack_require__(74);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(92)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var getOwnPropertyDescriptor = __webpack_require__(16).f;
var createNonEnumerableProperty = __webpack_require__(8);
var redefine = __webpack_require__(13);
var setGlobal = __webpack_require__(47);
var copyConstructorProperties = __webpack_require__(67);
var isForced = __webpack_require__(73);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(64);
var anObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(32);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var definePropertyModule = __webpack_require__(7);
var createPropertyDescriptor = __webpack_require__(17);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(27);

// CONCATENATED MODULE: ./packages/event-manager/node_modules/@okiba/event-emitter/index.js








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @module EventEmitter
 * @description Emits events that can be listened and unlistened to
 * @example
 * import EventEmitter from '@okiba/event-emitter'
 * const emitter = new EventEmitter
 * emitter.on('log', console.log)
 * emitter.emit('log', 'Silence is deprecated')
 * // Logs: 'Silence is deprecated'
 *
 * emitter.off('log', console.log)
 * emitter.emit('log', 'Will not run')
 * // ...Nothing happens
 */
var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.hs = {};
  }
  /**
   * Sets an event listener for an event type
   * @param  {String} name    Event type
   * @param  {Function} handler Callback to be fired when that event occours
   */


  _createClass(EventEmitter, [{
    key: "on",
    value: function on(name, handler) {
      (this.hs[name] || (this.hs[name] = new Map())).set(handler, handler);
    }
    /**
     * Unsets an event listener for an event type
     * @param  {String} name    Event type
     * @param  {Function} handler Callback previously registered for that event type
     */

  }, {
    key: "off",
    value: function off(name, handler) {
      if (!this.hs[name]) return;
      this.hs[name].delete(handler);
    }
    /**
     * Triggers an event with optional data attached.
     * All listeners will be triggered in registration order.
     * Custom data will be passed to them as a parameter
     * @param  {String} name Event type
     * @param  {Object} [data] Custom data to be passed to the handlers
     */

  }, {
    key: "emit",
    value: function emit(name, data) {
      if (!this.hs || !this.hs[name]) return;
      this.hs[name].forEach(function (handler) {
        return handler(data);
      });
    }
    /**
     * Removes all event listeners and deletes the handlers object
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this = this;

      Object.keys(this.hs).forEach(function (name) {
        return _this.hs[name].clear();
      });
      delete this.hs;
    }
  }]);

  return EventEmitter;
}();

/* harmony default export */ var event_emitter = (EventEmitter);
// EXTERNAL MODULE: ./packages/detect/index.js
var detect = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(57);

// CONCATENATED MODULE: ./packages/event-manager/node_modules/@okiba/arrays/index.js


/**
 * @module arrays
 * @description Array utils for okiba js
 */

/**
 * Return the first element if it only contains one
 * @example
 * const els = arrayOrOne([🍏, 🍌])
 * console.log(els) // [🍏, 🍌]
 *
 * const els = arrayOrOne([🍏])
 * console.log(els) // 🍏
 *
 * @param {Array-like} arrayLike The options object.
 * @returns {any} The first element or the argument, undefined if empty array
 */
function arrayOrOne(arrayLike) {
  if (arrayLike === void 0 || arrayLike.length === 0) {
    return void 0;
  }

  if (arrayLike.length === 1) {
    return arrayLike[0];
  }

  return arrayLike;
}
/**
 * Cast an array-like object or single element to Array
 * @example
 * const elements = castArray(document.querySelectorAll('p')) // [p, p]
 * const fruits = castArray(🍒) // [🍒]
 *
 * @param {any} castable Array to cast
 * @returns {Array} The array-like converted to Array, or an Array containing the element
 */

function castArray(castable) {
  if (castable === void 0) return castable;

  if (castable instanceof Array) {
    return castable;
  }

  if (castable.callee || castable instanceof NodeList || castable instanceof DOMTokenList || castable instanceof HTMLCollection) {
    return Array.prototype.slice.call(castable);
  }

  return [castable];
}
/**
 * Removes an element from an array in-place without causing Garbage Collection
 * @example
 * const array = [🍎, 🍐, 🍌]
 * spliceOne(array, 1)
 * console.log(array) // Logs: [🍎, 🍌]
 * @param {Array} array Array you want to remove an element from
 * @param {Number} index The index of the element to remove
 */

function spliceOne(array, index) {
  for (var i = index, k = i + 1, n = array.length; k < n; i += 1, k += 1) {
    array[i] = array[k];
  }

  --array.length;
}
// CONCATENATED MODULE: ./packages/event-manager/node_modules/@okiba/dom/index.js


/**
 * @module  dom
 * @description Utilities to work with dom elements and selectors
 */

/**
 * Selects a DOM Element with a certain id
 *
 * @example
 * import {byId} from '@okiba/dom'
 * const apple = byId('apple')
 * console.log(apple) // [div.apple]
 *
 * @param  {String}  id DOM id you are looking for
 *
 * @return {Element} A DOM Element matching `id`
 */

function byId(id) {
  return document.getElementById(id);
}
/**
 * Selects a DOM Element, scoped to element
 *
 * @example
 * import {qs} from '@okiba/dom'
 * const pear = qs('.pear')
 * console.log(pear) // [div.pear]
 *
 * @param  {String}   selector            DOM Selector (tag, class, id, anything that can be passed to `querySelector` API)
 * @param  {Element}  [element=document]  DOM Element to scope the selection query, only childs of that element will be tageted
 *
 * @return {Element} A DOM Element matching `selector`
 */

function qs(selector) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return element.querySelector(selector);
}
/**
 * Selects an array of DOM Elements, scoped to element
 *
 * @example
 * import {qsa} from '@okiba/dom'
 * const fruits = qsa('.fruit')
 * console.log(fruits) // [div.fruit, div.fruit]
 *
 * @param  {String}   selector            DOM Selector (tag, class, id, anything that can be passed to `querySelector` API)
 * @param  {Element}  [element=document]  DOM Element to scope the selection query, only childs of that element will be tageted
 *
 * @return {Element[]} An array of DOM elements matching `selector`
 */

function qsa(selector) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return castArray(element.querySelectorAll(selector));
}

function evt(source, type, handler, action, options) {
  if (!type || !handler) return false;
  var elements = castArray(source);
  var types = castArray(type);
  var handlers = castArray(handler);

  for (var i = 0; i < elements.length; ++i) {
    for (var j = 0; j < types.length; ++j) {
      elements[i]["".concat(action, "EventListener")](types[j], handlers[Math.min(j, handlers.length - 1)], options);
    }
  }

  return true;
}
/**
 * Attaches an event listener to a DOM Element, or an array of.
 *
 * @example
 * import {qsa, on} from '@okiba/dom'
 * const buttons = qsa('.button')
 *
 * on(buttons, 'click', onClick)
 * on(buttons, ['mouseenter', 'mouseleve'], onMouseChange)
 *
 * // adds `onClick` to 'click' and `onMouseChange` to both 'mouseenter' and 'mouseleave'
 * on(buttons, ['click', mouseenter', 'mouseleve'], [onClick, onMouseChange])
 *
 * @param {(Element|Element[])} [window] source
 * the element which will trigger the event
 * @param {(String|String[])} type
 * the event name to bind. Or an array of
 * @param {(Function|Function[])} handler
 * the callback to be fired at the event. If an array is supplied the handlers will be bound in order,
 * if there are less handlers than event types, the last handler is bound to all remaining events.
 *
 * @return {Boolean} Success of the binding
 */


function on(source, type, handler, options) {
  return evt(source, type, handler, 'add', options);
}
/**
 * Detached an event listener from a DOM Element, or an array of.
 *
 * @example
 * import {qs, off} from '@okiba/dom'
 * const button = qs('.button')
 *
 * button.addEventListener('click', onButtonClick)
 * // or okiba's `on` on(button, 'click')
 *
 * off(button, 'click', onButtonClick)
 *
 * // removes `onMouseChange` from both 'mouseenter' and 'mouseleave'
 * off(buttons, ['mouseenter', 'mouseleve'], onMouseChange)
 *
 * // removes `onClick` from 'click' and `onMouseChange` from both 'mouseenter' and 'mouseleave'
 * off(buttons, ['click', mouseenter', 'mouseleve'], [onClick, onMouseChange])
 *
 * @param {(Element|Element[])} [window] source
 * Element which will trigger the event
 * @param {(String|String[])} type
 * Event name to unbind. Or an array of
 * @param {(Function|Function[])} handler
 * Callback bound to the event. If an array is supplied the handlers will be unbound in order,
 * if there are less handlers than event types, the last handler is unbound from all remaining events.
 *
 * @return {Boolean} Success of the unbinding
 */

function off(source, type, handler, options) {
  return evt(source, type, handler, 'remove', options);
}
/**
 *
 * Read mouse and touch position in the same way
 *
 * @example
 * import {eventCoords, on} from '@okiba/dom'
 * on(window, ['mousemove', 'touchmove'], onMove)
 *
 * function onMove(e){
 *  const coords = eventCoords(e)
 *  console.log(coords)
 * }
 *
 * @param {Event} DOM Event
 *
 * @return {Object} Event position coordinates (clientX and ClientY)
 */

function eventCoords(event) {
  var coords = event;

  if (event.type.indexOf('touch') === 0) {
    coords = event.touches[0] || event.changedTouches[0];
  }

  return {
    clientX: coords.clientX,
    clientY: coords.clientY
  };
}
/**
 * Gets top and left offsets of an element
 *
 * @example
 * import {qs, offset} from '@okiba/dom'
 * const el = qs('.something')
 * const offsets = offset(el)
 * console.log(offsets) // Logs: {top: 100, left: 100}
 *
 * @param {Element} el The element you want to get offsets of
 *
 * @return {Object} Object containing `top` and `left` offsets
 */

function offset(el) {
  var left = 0;
  var top = 0;

  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    left += el.offsetLeft - (el.tagName !== 'BODY' ? el.scrollLeft : 0);
    top += el.offsetTop - (el.tagName !== 'BODY' ? el.scrollTop : 0);
    el = el.offsetParent;
  }

  return {
    top: top,
    left: left
  };
}
/**
 * Useful to normalize parameters accepted by modules which work with dom nodes.
 * If you need to have an array of Elements and you want to accept any of: String, String array, Element, Element array
 *
 *
 * @example
 * import {qs, getElements} from '@okiba/dom'
 * const els1 = getElements(['.some', '#thing']) // => [div.some, span#it]
 *
 * const el = qs('.element')
 * const els2 = getElements(el) // => [el]
 *
 * @param {(String|String[]|Element|Element[])} target The target you want to be sure to obtain as an array of Elements
 *
 * @return {Element[]} An array of Elements
 */

function getElements(target) {
  var els;

  if (typeof target === 'string') {
    els = qsa(target);
  }

  if (target instanceof Node) {
    els = [target];
  }

  if (target instanceof NodeList) {
    els = castArray(target);
  }

  if (target instanceof Array) {
    if (target[0] instanceof Node) {
      return target;
    } else if (typeof target[0] === 'string') {
      els = target.reduce(function (acc, curr) {
        return acc.concat(qsa(curr));
      }, []);
    }
  }

  if (!els) {
    throw new Error('No target provided');
  }

  return els;
}

function getMatcher() {
  for (var _i = 0, _arr = ['matchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector', 'webkitMatchesSelector']; _i < _arr.length; _i++) {
    var k = _arr[_i];
    if (k in Element.prototype) return k;
  }
}
/**
 * Checks if the given elemens has an ancestor which matches a selector
 *
 * @example
 * import {delegate} from '@okiba/dom'
 *
 * const undelegate = delegate('a.internal-navigation', 'click', onNavigationClick, {capture: true})
 *
 * function disableNavigation() {
 *   undelegate()
 * }
 *
 * @param {Element} el Element to check
 * @param {(String|Element)} target Selector to match
 *
 * @return {Boolean} Boolean of match found
 */


var matcher;
function isChildOf(el, target) {
  var isSelector = typeof target === 'string';
  if (isSelector && !matcher) matcher = getMatcher();
  var isMatching = false; // console.log(el, el.parentNode, target, matcher)

  do {
    isMatching = isSelector ? el.matches && el[matcher](target) : el === target; // console.log(el, el.parentNode, target, matcher)

    el = el.parentNode;
  } while (!isMatching && el);

  return isMatching;
}
/**
 * Delegate an event callback,
 * it will be executed only if the event target has an ancestor which matches the given target
 *
 * @example
 * import {delegate} from '@okiba/dom'
 *
 * const undelegate = delegate('a.internal-navigation', 'click', onNavigationClick, {capture: true})
 *
 * function disableNavigation() {
 *   undelegate()
 * }
 *
 * @param {(String|Element)} target Selector or Element to match
 * @param {(String)} event Event to bind to
 * @param {(String)} callback Function to be executed at match
 * @param {(String)} options Options forwarded to `on`
 *
 * @return {Function} Function to be called to remove the delegated callback
 */

function delegate(target, event, callback, options) {
  function check(e) {
    if (isChildOf(e.target, target)) {
      callback(e);
    }
  }

  on(window, event, check, options);
  return function undelegate() {
    off(window, event, check);
  };
}
// CONCATENATED MODULE: ./packages/event-manager/lib/utils.js

function debounce(callback) {
  var latency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var timer = arguments.length > 2 ? arguments[2] : undefined;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return clearTimeout(timer, timer = setTimeout.apply(void 0, [callback, latency].concat(args)));
  };
}
// CONCATENATED MODULE: ./packages/event-manager/lib/handlers/EventHandler/index.js


function EventHandler_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EventHandler_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EventHandler_createClass(Constructor, protoProps, staticProps) { if (protoProps) EventHandler_defineProperties(Constructor.prototype, protoProps); if (staticProps) EventHandler_defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * @module EventHandler
 * @package event-manager
 * @description An handler class to manage global event (un)subscription
 */

var EventHandler_EventHandler =
/*#__PURE__*/
function () {
  /**
   * @constructor
   * @param {Object} config The handler configuration
   *  @schema
   *  {
   *    type: The native event type
   *    alias: The global event type (native type as default)
   *    target: The native event target
   *    debounce: The event callback debounce time
   *    payloadFilter: A function to manipulate event data before passing it to the event callback
   *  }
   */
  function EventHandler(config) {
    var _this = this;

    EventHandler_classCallCheck(this, EventHandler);

    _defineProperty(this, "eventCallback", function (nativePayload) {
      var _this$config = _this.config,
          type = _this$config.type,
          _this$config$alias = _this$config.alias,
          alias = _this$config$alias === void 0 ? type : _this$config$alias,
          payloadFilter = _this$config.payloadFilter,
          dispatch = _this$config.dispatch;
      var payload = typeof payloadFilter === 'function' ? payloadFilter(nativePayload) : nativePayload;
      dispatch(alias, payload);
    });

    this.config = config;
    this.onEvent = config.debounce ? debounce(this.eventCallback, config.debounce) : this.eventCallback;
  }
  /**
   * A callback that dispatches the subscribed global event when the related native event occurs
   * @param {*} nativePayload The original payload returned by native event
   */


  EventHandler_createClass(EventHandler, [{
    key: "listen",

    /**
     * The interface method (required) that switches on the global event listener
     */
    value: function listen() {
      var _this2 = this;

      var _this$config2 = this.config,
          type = _this$config2.type,
          target = _this$config2.target,
          _this$config2$passive = _this$config2.passive,
          passive = _this$config2$passive === void 0 ? true : _this$config2$passive,
          _this$config2$capture = _this$config2.capture,
          capture = _this$config2$capture === void 0 ? false : _this$config2$capture;
      var options = detect["hasPassiveEvents"] ? {
        passive: passive,
        capture: capture
      } : capture;

      if (Array.isArray(type)) {
        type.forEach(function (entry) {
          return on(target, entry, _this2.onEvent, options);
        });
      } else {
        on(target, type, this.onEvent, options);
      }
    }
    /**
     * The interface method (required) that switches off the global event listener
     */

  }, {
    key: "unlisten",
    value: function unlisten() {
      var _this3 = this;

      var _this$config3 = this.config,
          type = _this$config3.type,
          target = _this$config3.target,
          _this$config3$passive = _this$config3.passive,
          passive = _this$config3$passive === void 0 ? true : _this$config3$passive,
          _this$config3$capture = _this$config3.capture,
          capture = _this$config3$capture === void 0 ? false : _this$config3$capture;
      var options = detect["hasPassiveEvents"] ? {
        passive: passive,
        capture: capture
      } : capture;

      if (Array.isArray(type)) {
        type.forEach(function (entry) {
          return off(target, entry, _this3.onEvent, options);
        });
      } else {
        off(target, type, this.onEvent, options);
      }
    }
  }]);

  return EventHandler;
}();


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(62);

// CONCATENATED MODULE: ./packages/event-manager/lib/handlers/RAFHandler/index.js










function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function RAFHandler_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RAFHandler_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RAFHandler_createClass(Constructor, protoProps, staticProps) { if (protoProps) RAFHandler_defineProperties(Constructor.prototype, protoProps); if (staticProps) RAFHandler_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function RAFHandler_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var RAFHandler =
/*#__PURE__*/
function (_EventHandler) {
  _inherits(RAFHandler, _EventHandler);

  function RAFHandler() {
    var _getPrototypeOf2;

    var _this;

    RAFHandler_classCallCheck(this, RAFHandler);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RAFHandler)).call.apply(_getPrototypeOf2, [this].concat(args)));

    RAFHandler_defineProperty(_assertThisInitialized(_this), "nextFrame", function (timestamp) {
      !!timestamp && _this.onEvent(timestamp); // preventing dispatching global raf on subscription (because of missing timestamp)

      _this.requestId = window.requestAnimationFrame(_this.nextFrame);
    });

    return _this;
  }

  RAFHandler_createClass(RAFHandler, [{
    key: "listen",

    /**
     * @override
     */
    value: function listen() {
      this.nextFrame();
    }
    /**
     * @override
     */

  }, {
    key: "unlisten",
    value: function unlisten() {
      window.cancelAnimationFrame(this.requestId);
    }
  }]);

  return RAFHandler;
}(EventHandler_EventHandler);


// CONCATENATED MODULE: ./packages/event-manager/lib/handlers/index.js


// CONCATENATED MODULE: ./packages/event-manager/index.js
/* concated harmony reexport EventHandler */__webpack_require__.d(__webpack_exports__, "EventHandler", function() { return EventHandler_EventHandler; });
/* concated harmony reexport RAFHandler */__webpack_require__.d(__webpack_exports__, "RAFHandler", function() { return RAFHandler; });









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { event_manager_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function event_manager_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function event_manager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function event_manager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function event_manager_createClass(Constructor, protoProps, staticProps) { if (protoProps) event_manager_defineProperties(Constructor.prototype, protoProps); if (staticProps) event_manager_defineProperties(Constructor, staticProps); return Constructor; }



/**
 * The global event emitter
 * @type {EventEmitter}
 * @private
 */

var eventEmitter = new event_emitter();
/**
 * The collection of global events handlers
 * @type {Object}
 * @private
 */

var eventsHandlers = {};
/**
 * The list of enabled global events
 * @type {Array}
 * @private
 */

var listeningEvents = [];
/**
 * @module EventManager
 * @package event-manager
 * @description A singleton to manage global (centralized) events
 */

var event_manager_EventManager =
/*#__PURE__*/
function () {
  function EventManager() {
    event_manager_classCallCheck(this, EventManager);
  }

  event_manager_createClass(EventManager, null, [{
    key: "subscribe",

    /**
     * Adds a global event
     * @param {String} type The event (alias) to be added to global events
     * @param {Object} config The event handling configuration
     *  @schema
     *  {
     *    handler: EventHandler (default) or an extension of it (must implement subscribe/unsubscribe interface)
     *    type: The (native) event type to be listened
     *    target: The (native) event target
     *    debounce: The callback debounce time
     *    payloadFilter: A function to manipulate event data before passing it to the event callback
     *  }
     */
    value: function subscribe(type) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$handler = _ref.handler,
          Handler = _ref$handler === void 0 ? EventHandler_EventHandler : _ref$handler,
          config = _objectWithoutProperties(_ref, ["handler"]);

      if (eventsHandlers.hasOwnProperty(type)) {
        console.warn("[EventManager error]: a global event \"".concat(type, "\" has been already subscribed. Skipping..."));
        return;
      }

      eventsHandlers[type] = new Handler(_objectSpread({}, config, {
        alias: type,
        dispatch: eventEmitter.emit
      }));
    }
    /**
     * Removes a global event
     * @param {String} type The event (alias) to be removed from global events
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe(type) {
      if (!eventsHandlers.hasOwnProperty(type)) return;

      if (listeningEvents.includes(type)) {
        eventsHandlers[type].unlisten();
        listeningEvents = listeningEvents.filter(function (event) {
          return event !== type;
        });
      }

      delete eventsHandlers[type];
    }
    /**
     * Adds a global event listener
     * @param {String} type The event type
     * @param {Function} callback The event callback
     */

  }, {
    key: "on",
    value: function on(type, callback) {
      if (!eventsHandlers.hasOwnProperty(type)) return;

      if (!listeningEvents.includes(type)) {
        eventsHandlers[type].listen();
      }

      eventEmitter.on(type, callback);
    }
    /**
     * Removes a global event listener
     * @param {String} type The event type
     * @param {Function} callback The event callback
     */

  }, {
    key: "off",
    value: function off(type, callback) {
      if (!eventsHandlers.hasOwnProperty(type) || !listeningEvents.includes(type)) return;
      eventEmitter.off(type, callback);

      if (!eventEmitter.hs[type].length) {
        eventsHandlers[type].unlisten();
      }
    }
  }, {
    key: "subscribedEvents",

    /**
     * Global events list getter
     */
    get: function get() {
      return Object.keys(eventsHandlers);
    }
  }]);

  return EventManager;
}();
/*========================*/

/* Built-in global events */

/*========================*/


event_manager_EventManager.subscribe('resize', {
  type: 'resize',
  target: window,
  debounce: 200,
  payloadFilter: function payloadFilter() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});
event_manager_EventManager.subscribe('scroll', {
  type: 'scroll',
  target: window
});
event_manager_EventManager.subscribe('raf', {
  handler: RAFHandler
});
/*================*/

/* Public exports */

/*================*/

/* harmony default export */ var event_manager = __webpack_exports__["default"] = (event_manager_EventManager);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(59);
var requireObjectCoercible = __webpack_require__(31);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(31);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var createNonEnumerableProperty = __webpack_require__(8);
var has = __webpack_require__(5);
var setGlobal = __webpack_require__(47);
var inspectSource = __webpack_require__(66);
var InternalStateModule = __webpack_require__(18);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(3);
var fails = __webpack_require__(1);
var isArray = __webpack_require__(37);
var isObject = __webpack_require__(4);
var toObject = __webpack_require__(12);
var toLength = __webpack_require__(21);
var createProperty = __webpack_require__(53);
var arraySpeciesCreate = __webpack_require__(77);
var arrayMethodHasSpeciesSupport = __webpack_require__(41);
var wellKnownSymbol = __webpack_require__(0);
var V8_VERSION = __webpack_require__(78);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(10);
var addToUnscopables = __webpack_require__(63);
var Iterators = __webpack_require__(22);
var InternalStateModule = __webpack_require__(18);
var defineIterator = __webpack_require__(54);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var propertyIsEnumerableModule = __webpack_require__(58);
var createPropertyDescriptor = __webpack_require__(17);
var toIndexedObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(32);
var has = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(64);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(94);
var global = __webpack_require__(2);
var isObject = __webpack_require__(4);
var createNonEnumerableProperty = __webpack_require__(8);
var objectHas = __webpack_require__(5);
var sharedKey = __webpack_require__(35);
var hiddenKeys = __webpack_require__(19);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(69);
var global = __webpack_require__(2);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(49);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var DOMIterables = __webpack_require__(79);
var forEach = __webpack_require__(104);
var createNonEnumerableProperty = __webpack_require__(8);

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(27);

// EXTERNAL MODULE: ./packages/event-manager/index.js + 7 modules
var event_manager = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(57);

// CONCATENATED MODULE: ./packages/sizes-cache/node_modules/@okiba/arrays/index.js


/**
 * @module arrays
 * @description Array utils for okiba js
 */

/**
 * Return the first element if it only contains one
 * @example
 * const els = arrayOrOne([🍏, 🍌])
 * console.log(els) // [🍏, 🍌]
 *
 * const els = arrayOrOne([🍏])
 * console.log(els) // 🍏
 *
 * @param {Array-like} arrayLike The options object.
 * @returns {any} The first element or the argument, undefined if empty array
 */
function arrayOrOne(arrayLike) {
  if (arrayLike === void 0 || arrayLike.length === 0) {
    return void 0;
  }

  if (arrayLike.length === 1) {
    return arrayLike[0];
  }

  return arrayLike;
}
/**
 * Cast an array-like object or single element to Array
 * @example
 * const elements = castArray(document.querySelectorAll('p')) // [p, p]
 * const fruits = castArray(🍒) // [🍒]
 *
 * @param {any} castable Array to cast
 * @returns {Array} The array-like converted to Array, or an Array containing the element
 */

function castArray(castable) {
  if (castable === void 0) return castable;

  if (castable instanceof Array) {
    return castable;
  }

  if (castable.callee || castable instanceof NodeList || castable instanceof DOMTokenList || castable instanceof HTMLCollection) {
    return Array.prototype.slice.call(castable);
  }

  return [castable];
}
/**
 * Removes an element from an array in-place without causing Garbage Collection
 * @example
 * const array = [🍎, 🍐, 🍌]
 * spliceOne(array, 1)
 * console.log(array) // Logs: [🍎, 🍌]
 * @param {Array} array Array you want to remove an element from
 * @param {Number} index The index of the element to remove
 */

function spliceOne(array, index) {
  for (var i = index, k = i + 1, n = array.length; k < n; i += 1, k += 1) {
    array[i] = array[k];
  }

  --array.length;
}
// CONCATENATED MODULE: ./packages/sizes-cache/node_modules/@okiba/dom/index.js


/**
 * @module  dom
 * @description Utilities to work with dom elements and selectors
 */

/**
 * Selects a DOM Element with a certain id
 *
 * @example
 * import {byId} from '@okiba/dom'
 * const apple = byId('apple')
 * console.log(apple) // [div.apple]
 *
 * @param  {String}  id DOM id you are looking for
 *
 * @return {Element} A DOM Element matching `id`
 */

function byId(id) {
  return document.getElementById(id);
}
/**
 * Selects a DOM Element, scoped to element
 *
 * @example
 * import {qs} from '@okiba/dom'
 * const pear = qs('.pear')
 * console.log(pear) // [div.pear]
 *
 * @param  {String}   selector            DOM Selector (tag, class, id, anything that can be passed to `querySelector` API)
 * @param  {Element}  [element=document]  DOM Element to scope the selection query, only childs of that element will be tageted
 *
 * @return {Element} A DOM Element matching `selector`
 */

function qs(selector) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return element.querySelector(selector);
}
/**
 * Selects an array of DOM Elements, scoped to element
 *
 * @example
 * import {qsa} from '@okiba/dom'
 * const fruits = qsa('.fruit')
 * console.log(fruits) // [div.fruit, div.fruit]
 *
 * @param  {String}   selector            DOM Selector (tag, class, id, anything that can be passed to `querySelector` API)
 * @param  {Element}  [element=document]  DOM Element to scope the selection query, only childs of that element will be tageted
 *
 * @return {Element[]} An array of DOM elements matching `selector`
 */

function qsa(selector) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return castArray(element.querySelectorAll(selector));
}

function evt(source, type, handler, action, options) {
  if (!type || !handler) return false;
  var elements = castArray(source);
  var types = castArray(type);
  var handlers = castArray(handler);

  for (var i = 0; i < elements.length; ++i) {
    for (var j = 0; j < types.length; ++j) {
      elements[i]["".concat(action, "EventListener")](types[j], handlers[Math.min(j, handlers.length - 1)], options);
    }
  }

  return true;
}
/**
 * Attaches an event listener to a DOM Element, or an array of.
 *
 * @example
 * import {qsa, on} from '@okiba/dom'
 * const buttons = qsa('.button')
 *
 * on(buttons, 'click', onClick)
 * on(buttons, ['mouseenter', 'mouseleve'], onMouseChange)
 *
 * // adds `onClick` to 'click' and `onMouseChange` to both 'mouseenter' and 'mouseleave'
 * on(buttons, ['click', mouseenter', 'mouseleve'], [onClick, onMouseChange])
 *
 * @param {(Element|Element[])} [window] source
 * the element which will trigger the event
 * @param {(String|String[])} type
 * the event name to bind. Or an array of
 * @param {(Function|Function[])} handler
 * the callback to be fired at the event. If an array is supplied the handlers will be bound in order,
 * if there are less handlers than event types, the last handler is bound to all remaining events.
 *
 * @return {Boolean} Success of the binding
 */


function on(source, type, handler, options) {
  return evt(source, type, handler, 'add', options);
}
/**
 * Detached an event listener from a DOM Element, or an array of.
 *
 * @example
 * import {qs, off} from '@okiba/dom'
 * const button = qs('.button')
 *
 * button.addEventListener('click', onButtonClick)
 * // or okiba's `on` on(button, 'click')
 *
 * off(button, 'click', onButtonClick)
 *
 * // removes `onMouseChange` from both 'mouseenter' and 'mouseleave'
 * off(buttons, ['mouseenter', 'mouseleve'], onMouseChange)
 *
 * // removes `onClick` from 'click' and `onMouseChange` from both 'mouseenter' and 'mouseleave'
 * off(buttons, ['click', mouseenter', 'mouseleve'], [onClick, onMouseChange])
 *
 * @param {(Element|Element[])} [window] source
 * Element which will trigger the event
 * @param {(String|String[])} type
 * Event name to unbind. Or an array of
 * @param {(Function|Function[])} handler
 * Callback bound to the event. If an array is supplied the handlers will be unbound in order,
 * if there are less handlers than event types, the last handler is unbound from all remaining events.
 *
 * @return {Boolean} Success of the unbinding
 */

function off(source, type, handler, options) {
  return evt(source, type, handler, 'remove', options);
}
/**
 *
 * Read mouse and touch position in the same way
 *
 * @example
 * import {eventCoords, on} from '@okiba/dom'
 * on(window, ['mousemove', 'touchmove'], onMove)
 *
 * function onMove(e){
 *  const coords = eventCoords(e)
 *  console.log(coords)
 * }
 *
 * @param {Event} DOM Event
 *
 * @return {Object} Event position coordinates (clientX and ClientY)
 */

function eventCoords(event) {
  var coords = event;

  if (event.type.indexOf('touch') === 0) {
    coords = event.touches[0] || event.changedTouches[0];
  }

  return {
    clientX: coords.clientX,
    clientY: coords.clientY
  };
}
/**
 * Gets top and left offsets of an element
 *
 * @example
 * import {qs, offset} from '@okiba/dom'
 * const el = qs('.something')
 * const offsets = offset(el)
 * console.log(offsets) // Logs: {top: 100, left: 100}
 *
 * @param {Element} el The element you want to get offsets of
 *
 * @return {Object} Object containing `top` and `left` offsets
 */

function offset(el) {
  var left = 0;
  var top = 0;

  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    left += el.offsetLeft - (el.tagName !== 'BODY' ? el.scrollLeft : 0);
    top += el.offsetTop - (el.tagName !== 'BODY' ? el.scrollTop : 0);
    el = el.offsetParent;
  }

  return {
    top: top,
    left: left
  };
}
/**
 * Useful to normalize parameters accepted by modules which work with dom nodes.
 * If you need to have an array of Elements and you want to accept any of: String, String array, Element, Element array
 *
 *
 * @example
 * import {qs, getElements} from '@okiba/dom'
 * const els1 = getElements(['.some', '#thing']) // => [div.some, span#it]
 *
 * const el = qs('.element')
 * const els2 = getElements(el) // => [el]
 *
 * @param {(String|String[]|Element|Element[])} target The target you want to be sure to obtain as an array of Elements
 *
 * @return {Element[]} An array of Elements
 */

function getElements(target) {
  var els;

  if (typeof target === 'string') {
    els = qsa(target);
  }

  if (target instanceof Node) {
    els = [target];
  }

  if (target instanceof NodeList) {
    els = castArray(target);
  }

  if (target instanceof Array) {
    if (target[0] instanceof Node) {
      return target;
    } else if (typeof target[0] === 'string') {
      els = target.reduce(function (acc, curr) {
        return acc.concat(qsa(curr));
      }, []);
    }
  }

  if (!els) {
    throw new Error('No target provided');
  }

  return els;
}

function getMatcher() {
  for (var _i = 0, _arr = ['matchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector', 'webkitMatchesSelector']; _i < _arr.length; _i++) {
    var k = _arr[_i];
    if (k in Element.prototype) return k;
  }
}
/**
 * Checks if the given elemens has an ancestor which matches a selector
 *
 * @example
 * import {delegate} from '@okiba/dom'
 *
 * const undelegate = delegate('a.internal-navigation', 'click', onNavigationClick, {capture: true})
 *
 * function disableNavigation() {
 *   undelegate()
 * }
 *
 * @param {Element} el Element to check
 * @param {(String|Element)} target Selector to match
 *
 * @return {Boolean} Boolean of match found
 */


var matcher;
function isChildOf(el, target) {
  var isSelector = typeof target === 'string';
  if (isSelector && !matcher) matcher = getMatcher();
  var isMatching = false; // console.log(el, el.parentNode, target, matcher)

  do {
    isMatching = isSelector ? el.matches && el[matcher](target) : el === target; // console.log(el, el.parentNode, target, matcher)

    el = el.parentNode;
  } while (!isMatching && el);

  return isMatching;
}
/**
 * Delegate an event callback,
 * it will be executed only if the event target has an ancestor which matches the given target
 *
 * @example
 * import {delegate} from '@okiba/dom'
 *
 * const undelegate = delegate('a.internal-navigation', 'click', onNavigationClick, {capture: true})
 *
 * function disableNavigation() {
 *   undelegate()
 * }
 *
 * @param {(String|Element)} target Selector or Element to match
 * @param {(String)} event Event to bind to
 * @param {(String)} callback Function to be executed at match
 * @param {(String)} options Options forwarded to `on`
 *
 * @return {Function} Function to be called to remove the delegated callback
 */

function delegate(target, event, callback, options) {
  function check(e) {
    if (isChildOf(e.target, target)) {
      callback(e);
    }
  }

  on(window, event, check, options);
  return function undelegate() {
    off(window, event, check);
  };
}
// CONCATENATED MODULE: ./packages/sizes-cache/index.js










var _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @module SizesCache
 * @description A class to compute and cache element sizes.
 * @example
 * import { qs } from '@okiba/dom'
 * import SizesCache from '@okiba/size-cache'
 *
 * const sizes = SizesCache.get(qs('#app'))
 * console.log(sizes)
 */


/* harmony default export */ var sizes_cache = __webpack_exports__["default"] = (new (_temp =
/*#__PURE__*/
function () {
  function SizesCache() {
    var _this = this;

    _classCallCheck(this, SizesCache);

    _defineProperty(this, "onResize", function () {
      _this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      _this.body = {
        width: document.body.offsetWidth,
        height: document.body.offsetHeight,
        scrollArea: document.body.offsetHeight - window.innerHeight
      };
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _this.map.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;

          _this.compute(el);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });

    _defineProperty(this, "reset", function () {
      _this.map.clear();
    });

    this.map = new Map();
    this.onResize();
    this.listen();
  }
  /**
   * Element's sizes getter
   * @param {Element} el 
   */


  _createClass(SizesCache, [{
    key: "get",
    value: function get(el) {
      if (!this.map.has(el)) {
        this.map.set(el, {});
        this.compute(el);
      }

      return this.map.get(el);
    }
    /**
     * Computes element's sizes
     * @param {Element} el 
     */

  }, {
    key: "compute",
    value: function compute(el) {
      var sizes = this.map.get(el);

      var _offset = offset(el),
          top = _offset.top,
          left = _offset.left;

      var width = el.offsetWidth;
      var height = el.offsetHeight;
      sizes.top = top;
      sizes.left = left;
      sizes.width = width;
      sizes.height = height;
      sizes.right = left + width;
      sizes.bottom = top + height;
    }
    /**
     * Updates elements' sizes on resize
     */

  }, {
    key: "listen",

    /**
     * Adds resize event listener to EventManager
     */
    value: function listen() {
      event_manager["default"].on('resize', this.onResize);
    }
    /**
     * Removes resize event listener from EventManager
     */

  }, {
    key: "unlisten",
    value: function unlisten() {
      event_manager["default"].off('resize', this.onResize);
    }
    /**
     * Resets component's data
     */

  }]);

  return SizesCache;
}(), _temp)());

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(56);
var redefine = __webpack_require__(13);
var toString = __webpack_require__(118);

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(119).charAt;
var InternalStateModule = __webpack_require__(18);
var defineIterator = __webpack_require__(54);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var DOMIterables = __webpack_require__(79);
var ArrayIteratorMethods = __webpack_require__(15);
var createNonEnumerableProperty = __webpack_require__(8);
var wellKnownSymbol = __webpack_require__(0);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPassiveEvents", function() { return hasPassiveEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTouch", function() { return hasTouch; });
/**
 * @module  detect
 * @description Utilities to check some browser features
 */
var _hasPassiveEvents;

var testHasPassiveEvents = {};
Object.defineProperties(testHasPassiveEvents, {
  check: {
    get: function get() {
      if (_hasPassiveEvents !== void 0) {
        return _hasPassiveEvents;
      }

      function noop() {}

      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          _hasPassiveEvents = true;
        }
      });
      window.addEventListener('_', noop, options);
      window.removeEventListener('_', noop, options);
      return _hasPassiveEvents;
    }
  }
});
var testIsTouch = {};
Object.defineProperties(testIsTouch, {
  check: {
    get: function get() {
      return 'ontouchstart' in window;
    }
  }
});
/**
 * Check if browser supports passive events
 *
 * @example
 * import {hasPassiveEvents} from '@okiba/detect'
 *
 * console.log(hasPassiveEvents) // true
 *
 * @return {Boolean} true if browser supports passive events
 */

var hasPassiveEvents = testHasPassiveEvents.check;
/**
 * Check if browser has touch support
 *
 * @example
 * import {hasTouch} from '@okiba/detect'
 *
 * console.log(hasTouch) // true
 *
 * @return {Boolean} true if browser has touch support
 */

var hasTouch = testIsTouch.check;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(3);
var global = __webpack_require__(2);
var getBuiltIn = __webpack_require__(20);
var IS_PURE = __webpack_require__(34);
var DESCRIPTORS = __webpack_require__(6);
var NATIVE_SYMBOL = __webpack_require__(51);
var USE_SYMBOL_AS_UID = __webpack_require__(74);
var fails = __webpack_require__(1);
var has = __webpack_require__(5);
var isArray = __webpack_require__(37);
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(11);
var toObject = __webpack_require__(12);
var toIndexedObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(32);
var createPropertyDescriptor = __webpack_require__(17);
var nativeObjectCreate = __webpack_require__(38);
var objectKeys = __webpack_require__(44);
var getOwnPropertyNamesModule = __webpack_require__(48);
var getOwnPropertyNamesExternal = __webpack_require__(97);
var getOwnPropertySymbolsModule = __webpack_require__(60);
var getOwnPropertyDescriptorModule = __webpack_require__(16);
var definePropertyModule = __webpack_require__(7);
var propertyIsEnumerableModule = __webpack_require__(58);
var createNonEnumerableProperty = __webpack_require__(8);
var redefine = __webpack_require__(13);
var shared = __webpack_require__(33);
var sharedKey = __webpack_require__(35);
var hiddenKeys = __webpack_require__(19);
var uid = __webpack_require__(36);
var wellKnownSymbol = __webpack_require__(0);
var wrappedWellKnownSymbolModule = __webpack_require__(75);
var defineWellKnownSymbol = __webpack_require__(76);
var setToStringTag = __webpack_require__(39);
var InternalStateModule = __webpack_require__(18);
var $forEach = __webpack_require__(40).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

if (!USE_SYMBOL_AS_UID) {
  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(34);
var store = __webpack_require__(93);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.4.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33);
var uid = __webpack_require__(36);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(30);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var defineProperties = __webpack_require__(95);
var enumBugKeys = __webpack_require__(50);
var hiddenKeys = __webpack_require__(19);
var html = __webpack_require__(96);
var documentCreateElement = __webpack_require__(65);
var sharedKey = __webpack_require__(35);
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(7).f;
var has = __webpack_require__(5);
var wellKnownSymbol = __webpack_require__(0);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(52);
var IndexedObject = __webpack_require__(59);
var toObject = __webpack_require__(12);
var toLength = __webpack_require__(21);
var arraySpeciesCreate = __webpack_require__(77);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(0);
var V8_VERSION = __webpack_require__(78);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(3);
var toObject = __webpack_require__(12);
var nativeKeys = __webpack_require__(44);
var fails = __webpack_require__(1);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(70);
var enumBugKeys = __webpack_require__(50);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(6);
var global = __webpack_require__(2);
var has = __webpack_require__(5);
var isObject = __webpack_require__(4);
var defineProperty = __webpack_require__(7).f;
var copyConstructorProperties = __webpack_require__(67);

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(76);

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var createNonEnumerableProperty = __webpack_require__(8);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(70);
var enumBugKeys = __webpack_require__(50);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(98);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(32);
var definePropertyModule = __webpack_require__(7);
var createPropertyDescriptor = __webpack_require__(17);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(3);
var createIteratorConstructor = __webpack_require__(106);
var getPrototypeOf = __webpack_require__(55);
var setPrototypeOf = __webpack_require__(82);
var setToStringTag = __webpack_require__(39);
var createNonEnumerableProperty = __webpack_require__(8);
var redefine = __webpack_require__(13);
var wellKnownSymbol = __webpack_require__(0);
var IS_PURE = __webpack_require__(34);
var Iterators = __webpack_require__(22);
var IteratorsCore = __webpack_require__(80);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toObject = __webpack_require__(12);
var sharedKey = __webpack_require__(35);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(81);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(0);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(3);
var isObject = __webpack_require__(4);
var isArray = __webpack_require__(37);
var toAbsoluteIndex = __webpack_require__(72);
var toLength = __webpack_require__(21);
var toIndexedObject = __webpack_require__(10);
var createProperty = __webpack_require__(53);
var arrayMethodHasSpeciesSupport = __webpack_require__(41);
var wellKnownSymbol = __webpack_require__(0);

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var classof = __webpack_require__(30);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(108);
var collectionStrong = __webpack_require__(115);

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(3);
var fails = __webpack_require__(1);
var toObject = __webpack_require__(12);
var nativeGetPrototypeOf = __webpack_require__(55);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(81);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(0);
var create = __webpack_require__(38);
var createNonEnumerableProperty = __webpack_require__(8);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  createNonEnumerableProperty(ArrayPrototype, UNSCOPABLES, create(null));
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var fails = __webpack_require__(1);
var createElement = __webpack_require__(65);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var isObject = __webpack_require__(4);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33);

var functionToString = Function.toString;

module.exports = shared('inspectSource', function (it) {
  return functionToString.call(it);
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var ownKeys = __webpack_require__(68);
var getOwnPropertyDescriptorModule = __webpack_require__(16);
var definePropertyModule = __webpack_require__(7);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(20);
var getOwnPropertyNamesModule = __webpack_require__(48);
var getOwnPropertySymbolsModule = __webpack_require__(60);
var anObject = __webpack_require__(11);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);

module.exports = global;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIndexedObject = __webpack_require__(10);
var indexOf = __webpack_require__(71).indexOf;
var hiddenKeys = __webpack_require__(19);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(10);
var toLength = __webpack_require__(21);
var toAbsoluteIndex = __webpack_require__(72);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(49);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(51);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol() == 'symbol';


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(0);

exports.f = wellKnownSymbol;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(69);
var has = __webpack_require__(5);
var wrappedWellKnownSymbolModule = __webpack_require__(75);
var defineProperty = __webpack_require__(7).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var isArray = __webpack_require__(37);
var wellKnownSymbol = __webpack_require__(0);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var userAgent = __webpack_require__(99);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(55);
var createNonEnumerableProperty = __webpack_require__(8);
var has = __webpack_require__(5);
var wellKnownSymbol = __webpack_require__(0);
var IS_PURE = __webpack_require__(34);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var aPossiblePrototype = __webpack_require__(107);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(19);
var isObject = __webpack_require__(4);
var has = __webpack_require__(5);
var defineProperty = __webpack_require__(7).f;
var uid = __webpack_require__(36);
var FREEZING = __webpack_require__(109);

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var isArrayIteratorMethod = __webpack_require__(110);
var toLength = __webpack_require__(21);
var bind = __webpack_require__(52);
var getIteratorMethod = __webpack_require__(111);
var callWithSafeIterationClosing = __webpack_require__(112);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(56);
var classofRaw = __webpack_require__(30);
var wellKnownSymbol = __webpack_require__(0);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(3);
var $filter = __webpack_require__(40).filter;
var fails = __webpack_require__(1);
var arrayMethodHasSpeciesSupport = __webpack_require__(41);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = HAS_SPECIES_SUPPORT && !fails(function () {
  [].filter.call({ length: -1, 0: 1 }, function (it) { throw it; });
});

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(3);
var fails = __webpack_require__(1);
var toIndexedObject = __webpack_require__(10);
var nativeGetOwnPropertyDescriptor = __webpack_require__(16).f;
var DESCRIPTORS = __webpack_require__(6);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(6);
var ownKeys = __webpack_require__(68);
var toIndexedObject = __webpack_require__(10);
var getOwnPropertyDescriptorModule = __webpack_require__(16);
var createProperty = __webpack_require__(53);

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(3);
var $map = __webpack_require__(40).map;
var fails = __webpack_require__(1);
var arrayMethodHasSpeciesSupport = __webpack_require__(41);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = HAS_SPECIES_SUPPORT && !fails(function () {
  [].map.call({ length: -1, 0: 1 }, function (it) { throw it; });
});

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(3);
var $includes = __webpack_require__(71).includes;
var addToUnscopables = __webpack_require__(63);

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 92 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var setGlobal = __webpack_require__(47);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var inspectSource = __webpack_require__(66);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var definePropertyModule = __webpack_require__(7);
var anObject = __webpack_require__(11);
var objectKeys = __webpack_require__(44);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(20);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(10);
var nativeGetOwnPropertyNames = __webpack_require__(48).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(20);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(3);
var notARegExp = __webpack_require__(101);
var requireObjectCoercible = __webpack_require__(31);
var correctIsRegExpLogic = __webpack_require__(103);

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(102);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var classof = __webpack_require__(30);
var wellKnownSymbol = __webpack_require__(0);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(0);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(40).forEach;
var sloppyArrayMethod = __webpack_require__(105);

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(1);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(80).IteratorPrototype;
var create = __webpack_require__(38);
var createPropertyDescriptor = __webpack_require__(17);
var setToStringTag = __webpack_require__(39);
var Iterators = __webpack_require__(22);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(3);
var global = __webpack_require__(2);
var isForced = __webpack_require__(73);
var redefine = __webpack_require__(13);
var InternalMetadataModule = __webpack_require__(83);
var iterate = __webpack_require__(84);
var anInstance = __webpack_require__(86);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(1);
var checkCorrectnessOfIteration = __webpack_require__(113);
var setToStringTag = __webpack_require__(39);
var inheritIfRequired = __webpack_require__(114);

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(0);
var Iterators = __webpack_require__(22);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(85);
var Iterators = __webpack_require__(22);
var wellKnownSymbol = __webpack_require__(0);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(0);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var setPrototypeOf = __webpack_require__(82);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(7).f;
var create = __webpack_require__(38);
var redefineAll = __webpack_require__(116);
var bind = __webpack_require__(52);
var anInstance = __webpack_require__(86);
var iterate = __webpack_require__(84);
var defineIterator = __webpack_require__(54);
var setSpecies = __webpack_require__(117);
var DESCRIPTORS = __webpack_require__(6);
var fastKey = __webpack_require__(83).fastKey;
var InternalStateModule = __webpack_require__(18);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(13);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(20);
var definePropertyModule = __webpack_require__(7);
var wellKnownSymbol = __webpack_require__(0);
var DESCRIPTORS = __webpack_require__(6);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(56);
var classof = __webpack_require__(85);

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(49);
var requireObjectCoercible = __webpack_require__(31);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(3);
var $find = __webpack_require__(40).find;
var addToUnscopables = __webpack_require__(63);

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),
/* 128 */,
/* 129 */,
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(91);

// EXTERNAL MODULE: ./packages/detect/index.js
var detect = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(57);

// CONCATENATED MODULE: ./packages/pointer/node_modules/@okiba/arrays/index.js


/**
 * @module arrays
 * @description Array utils for okiba js
 */

/**
 * Return the first element if it only contains one
 * @example
 * const els = arrayOrOne([🍏, 🍌])
 * console.log(els) // [🍏, 🍌]
 *
 * const els = arrayOrOne([🍏])
 * console.log(els) // 🍏
 *
 * @param {Array-like} arrayLike The options object.
 * @returns {any} The first element or the argument, undefined if empty array
 */
function arrayOrOne(arrayLike) {
  if (arrayLike === void 0 || arrayLike.length === 0) {
    return void 0;
  }

  if (arrayLike.length === 1) {
    return arrayLike[0];
  }

  return arrayLike;
}
/**
 * Cast an array-like object or single element to Array
 * @example
 * const elements = castArray(document.querySelectorAll('p')) // [p, p]
 * const fruits = castArray(🍒) // [🍒]
 *
 * @param {any} castable Array to cast
 * @returns {Array} The array-like converted to Array, or an Array containing the element
 */

function castArray(castable) {
  if (castable === void 0) return castable;

  if (castable instanceof Array) {
    return castable;
  }

  if (castable.callee || castable instanceof NodeList || castable instanceof DOMTokenList || castable instanceof HTMLCollection) {
    return Array.prototype.slice.call(castable);
  }

  return [castable];
}
/**
 * Removes an element from an array in-place without causing Garbage Collection
 * @example
 * const array = [🍎, 🍐, 🍌]
 * spliceOne(array, 1)
 * console.log(array) // Logs: [🍎, 🍌]
 * @param {Array} array Array you want to remove an element from
 * @param {Number} index The index of the element to remove
 */

function spliceOne(array, index) {
  for (var i = index, k = i + 1, n = array.length; k < n; i += 1, k += 1) {
    array[i] = array[k];
  }

  --array.length;
}
// CONCATENATED MODULE: ./packages/pointer/node_modules/@okiba/dom/index.js


/**
 * @module  dom
 * @description Utilities to work with dom elements and selectors
 */

/**
 * Selects a DOM Element with a certain id
 *
 * @example
 * import {byId} from '@okiba/dom'
 * const apple = byId('apple')
 * console.log(apple) // [div.apple]
 *
 * @param  {String}  id DOM id you are looking for
 *
 * @return {Element} A DOM Element matching `id`
 */

function byId(id) {
  return document.getElementById(id);
}
/**
 * Selects a DOM Element, scoped to element
 *
 * @example
 * import {qs} from '@okiba/dom'
 * const pear = qs('.pear')
 * console.log(pear) // [div.pear]
 *
 * @param  {String}   selector            DOM Selector (tag, class, id, anything that can be passed to `querySelector` API)
 * @param  {Element}  [element=document]  DOM Element to scope the selection query, only childs of that element will be tageted
 *
 * @return {Element} A DOM Element matching `selector`
 */

function qs(selector) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return element.querySelector(selector);
}
/**
 * Selects an array of DOM Elements, scoped to element
 *
 * @example
 * import {qsa} from '@okiba/dom'
 * const fruits = qsa('.fruit')
 * console.log(fruits) // [div.fruit, div.fruit]
 *
 * @param  {String}   selector            DOM Selector (tag, class, id, anything that can be passed to `querySelector` API)
 * @param  {Element}  [element=document]  DOM Element to scope the selection query, only childs of that element will be tageted
 *
 * @return {Element[]} An array of DOM elements matching `selector`
 */

function qsa(selector) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return castArray(element.querySelectorAll(selector));
}

function evt(source, type, handler, action, options) {
  if (!type || !handler) return false;
  var elements = castArray(source);
  var types = castArray(type);
  var handlers = castArray(handler);

  for (var i = 0; i < elements.length; ++i) {
    for (var j = 0; j < types.length; ++j) {
      elements[i]["".concat(action, "EventListener")](types[j], handlers[Math.min(j, handlers.length - 1)], options);
    }
  }

  return true;
}
/**
 * Attaches an event listener to a DOM Element, or an array of.
 *
 * @example
 * import {qsa, on} from '@okiba/dom'
 * const buttons = qsa('.button')
 *
 * on(buttons, 'click', onClick)
 * on(buttons, ['mouseenter', 'mouseleve'], onMouseChange)
 *
 * // adds `onClick` to 'click' and `onMouseChange` to both 'mouseenter' and 'mouseleave'
 * on(buttons, ['click', mouseenter', 'mouseleve'], [onClick, onMouseChange])
 *
 * @param {(Element|Element[])} [window] source
 * the element which will trigger the event
 * @param {(String|String[])} type
 * the event name to bind. Or an array of
 * @param {(Function|Function[])} handler
 * the callback to be fired at the event. If an array is supplied the handlers will be bound in order,
 * if there are less handlers than event types, the last handler is bound to all remaining events.
 *
 * @return {Boolean} Success of the binding
 */


function on(source, type, handler, options) {
  return evt(source, type, handler, 'add', options);
}
/**
 * Detached an event listener from a DOM Element, or an array of.
 *
 * @example
 * import {qs, off} from '@okiba/dom'
 * const button = qs('.button')
 *
 * button.addEventListener('click', onButtonClick)
 * // or okiba's `on` on(button, 'click')
 *
 * off(button, 'click', onButtonClick)
 *
 * // removes `onMouseChange` from both 'mouseenter' and 'mouseleave'
 * off(buttons, ['mouseenter', 'mouseleve'], onMouseChange)
 *
 * // removes `onClick` from 'click' and `onMouseChange` from both 'mouseenter' and 'mouseleave'
 * off(buttons, ['click', mouseenter', 'mouseleve'], [onClick, onMouseChange])
 *
 * @param {(Element|Element[])} [window] source
 * Element which will trigger the event
 * @param {(String|String[])} type
 * Event name to unbind. Or an array of
 * @param {(Function|Function[])} handler
 * Callback bound to the event. If an array is supplied the handlers will be unbound in order,
 * if there are less handlers than event types, the last handler is unbound from all remaining events.
 *
 * @return {Boolean} Success of the unbinding
 */

function off(source, type, handler, options) {
  return evt(source, type, handler, 'remove', options);
}
/**
 *
 * Read mouse and touch position in the same way
 *
 * @example
 * import {eventCoords, on} from '@okiba/dom'
 * on(window, ['mousemove', 'touchmove'], onMove)
 *
 * function onMove(e){
 *  const coords = eventCoords(e)
 *  console.log(coords)
 * }
 *
 * @param {Event} DOM Event
 *
 * @return {Object} Event position coordinates (clientX and ClientY)
 */

function eventCoords(event) {
  var coords = event;

  if (event.type.indexOf('touch') === 0) {
    coords = event.touches[0] || event.changedTouches[0];
  }

  return {
    clientX: coords.clientX,
    clientY: coords.clientY
  };
}
/**
 * Gets top and left offsets of an element
 *
 * @example
 * import {qs, offset} from '@okiba/dom'
 * const el = qs('.something')
 * const offsets = offset(el)
 * console.log(offsets) // Logs: {top: 100, left: 100}
 *
 * @param {Element} el The element you want to get offsets of
 *
 * @return {Object} Object containing `top` and `left` offsets
 */

function offset(el) {
  var left = 0;
  var top = 0;

  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    left += el.offsetLeft - (el.tagName !== 'BODY' ? el.scrollLeft : 0);
    top += el.offsetTop - (el.tagName !== 'BODY' ? el.scrollTop : 0);
    el = el.offsetParent;
  }

  return {
    top: top,
    left: left
  };
}
/**
 * Useful to normalize parameters accepted by modules which work with dom nodes.
 * If you need to have an array of Elements and you want to accept any of: String, String array, Element, Element array
 *
 *
 * @example
 * import {qs, getElements} from '@okiba/dom'
 * const els1 = getElements(['.some', '#thing']) // => [div.some, span#it]
 *
 * const el = qs('.element')
 * const els2 = getElements(el) // => [el]
 *
 * @param {(String|String[]|Element|Element[])} target The target you want to be sure to obtain as an array of Elements
 *
 * @return {Element[]} An array of Elements
 */

function getElements(target) {
  var els;

  if (typeof target === 'string') {
    els = qsa(target);
  }

  if (target instanceof Node) {
    els = [target];
  }

  if (target instanceof NodeList) {
    els = castArray(target);
  }

  if (target instanceof Array) {
    if (target[0] instanceof Node) {
      return target;
    } else if (typeof target[0] === 'string') {
      els = target.reduce(function (acc, curr) {
        return acc.concat(qsa(curr));
      }, []);
    }
  }

  if (!els) {
    throw new Error('No target provided');
  }

  return els;
}

function getMatcher() {
  for (var _i = 0, _arr = ['matchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector', 'webkitMatchesSelector']; _i < _arr.length; _i++) {
    var k = _arr[_i];
    if (k in Element.prototype) return k;
  }
}
/**
 * Checks if the given elemens has an ancestor which matches a selector
 *
 * @example
 * import {delegate} from '@okiba/dom'
 *
 * const undelegate = delegate('a.internal-navigation', 'click', onNavigationClick, {capture: true})
 *
 * function disableNavigation() {
 *   undelegate()
 * }
 *
 * @param {Element} el Element to check
 * @param {(String|Element)} target Selector to match
 *
 * @return {Boolean} Boolean of match found
 */


var matcher;
function isChildOf(el, target) {
  var isSelector = typeof target === 'string';
  if (isSelector && !matcher) matcher = getMatcher();
  var isMatching = false; // console.log(el, el.parentNode, target, matcher)

  do {
    isMatching = isSelector ? el.matches && el[matcher](target) : el === target; // console.log(el, el.parentNode, target, matcher)

    el = el.parentNode;
  } while (!isMatching && el);

  return isMatching;
}
/**
 * Delegate an event callback,
 * it will be executed only if the event target has an ancestor which matches the given target
 *
 * @example
 * import {delegate} from '@okiba/dom'
 *
 * const undelegate = delegate('a.internal-navigation', 'click', onNavigationClick, {capture: true})
 *
 * function disableNavigation() {
 *   undelegate()
 * }
 *
 * @param {(String|Element)} target Selector or Element to match
 * @param {(String)} event Event to bind to
 * @param {(String)} callback Function to be executed at match
 * @param {(String)} options Options forwarded to `on`
 *
 * @return {Function} Function to be called to remove the delegated callback
 */

function delegate(target, event, callback, options) {
  function check(e) {
    if (isChildOf(e.target, target)) {
      callback(e);
    }
  }

  on(window, event, check, options);
  return function undelegate() {
    off(window, event, check);
  };
}
// EXTERNAL MODULE: ./packages/event-manager/index.js + 7 modules
var event_manager = __webpack_require__(9);

// CONCATENATED MODULE: ./packages/pointer/lib/Pointer/index.js




/**
 * Global pointer coords
 * @private
 */

var _coords = {};
/*=======================*/

/* Pointer global events */

/*=======================*/

event_manager["default"].subscribe('pointerinview', {
  type: detect["hasTouch"] ? ['touchstart', 'touchend'] : ['mouseenter', 'mouseleave'],
  target: document,
  payloadFilter: function payloadFilter(_ref) {
    var type = _ref.type;
    return ['touchstart', 'mouseenter'].includes(type);
  }
});
event_manager["default"].subscribe('pointerover', {
  type: detect["hasTouch"] ? 'touchmove' : 'mouseover',
  target: document.body
});
event_manager["default"].subscribe('pointermove', {
  type: detect["hasTouch"] ? 'touchmove' : 'mousemove',
  target: window
});
event_manager["default"].on('pointermove', function (e) {
  var _eventCoords = eventCoords(e),
      x = _eventCoords.clientX,
      y = _eventCoords.clientY;

  _coords = {
    x: x,
    y: y
  };
});
/*================*/

/* Public exports */

/*================*/

/* harmony default export */ var Pointer = ({
  get coords() {
    return _coords;
  }

});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(23);

// CONCATENATED MODULE: ./packages/pointer/node_modules/@okiba/component/index.js





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @module Component
 * @description  Manages a DOM component, binds UI and recursively binds child components.
 * Can be extended or instantiated
 * @example
 * // ./components/Slider.js
 *
 * import Component from '@okiba/component'
 * import SliderControls from '@components/SliderControls'
 *
 * const ui = {
 *   slides: '.slide',
 * }
 *
 * const components = {
 *   controls: {
 *     selector: '.slider-controls', type: SliderControls, options: {big: true}
 *   }
 * }
 *
 * class Slider extends Component {
 *   constructor({el, options}) {
 *     super({el, ui, components, options})
 *
 *     this.ui.slides.forEach(
 *       slide => slide.style.opacity = 0
 *     )
 *
 *     this.components.controls.forEach(
 *       controls => controls.onNext(this.next.bind(this))
 *     )
 *   }
 * }
 *
 * @example
 * // ./main.js
 *
 * import {qs} from '@okiba/dom'
 * import Component from '@okiba/component'
 * import Slider from './components/Slider'
 *
 * const app = new Component({
 *   el: qs('#app'),
 *   components: {
 *     selector: '.slider', type: Slider
 *   }
 * })
 */



function bindUi(ui, el) {
  return Object.keys(ui).reduce(function (hash, key) {
    var _ui$key = ui[key],
        _ui$key$optional = _ui$key.optional,
        optional = _ui$key$optional === void 0 ? false : _ui$key$optional,
        _ui$key$asArray = _ui$key.asArray,
        asArray = _ui$key$asArray === void 0 ? false : _ui$key$asArray;
    var els = qsa(ui[key].selector || ui[key], el);

    if (els.length) {
      hash[key] = asArray ? els : arrayOrOne(els);
    } else if (!optional) {
      throw new Error("[!!] [Component] Cant't find UI element for selector: ".concat(ui[key]));
    }

    return hash;
  }, {});
}

function bindComponents(components, el) {
  return Object.keys(components).reduce(function (hash, key) {
    var _components$key = components[key],
        type = _components$key.type,
        selector = _components$key.selector,
        options = _components$key.options,
        _components$key$ghost = _components$key.ghost,
        ghost = _components$key$ghost === void 0 ? false : _components$key$ghost,
        _components$key$optio = _components$key.optional,
        optional = _components$key$optio === void 0 ? false : _components$key$optio,
        _components$key$asArr = _components$key.asArray,
        asArray = _components$key$asArr === void 0 ? false : _components$key$asArr;

    if (typeof selector !== 'string' && !ghost || !type) {
      throw new Error("[!!] [Component] Invalid component configuration for key: ".concat(key));
    }

    var els = ghost ? [el] : qsa(selector, el);

    if (els.length) {
      els = asArray ? els : arrayOrOne(els);
      hash[key] = Array.isArray(els) ? els.map(function (n) {
        return new type({
          el: n,
          options: options
        });
      }) : new type({
        el: els,
        options: options
      });
    } else if (!optional) {
      throw new Error("[!!] [Component] Cant't find node with selector ".concat(selector, " for sub-component: ").concat(key));
    }

    return hash;
  }, {});
}
/**
 * Accepts an __hash__ whose properties can be:
 * @param {Object} args Arguments to create a component
 * @param   {Element}   {el}       DOM Element to be bound
 * @param   {Object}    [{ui}]
 * UI hash where keys are name and values are selectors
 * ```javascript
 * { buttonNext: '#buttonNext' }
 * ```
 * Becomes:
 * ```javascript
 * this.ui.buttonNext
 * ```
 *
 * @param   {Object}    [{components}]
 * Components hash for childs to bind, keys are names and values are component initialization props:
 * ```javascript
 * {
 *   slider: {
 *     // Matched using [qs]('https://github/okiba-gang/okiba/packages/dom'), scoped to the current component element
 *     selector: '.domSelector',
 *     // Component class, extending Okiba Component
 *     type: Slider,
 *     // Options hash
 *     options: {fullScreen: true}
 *   }
 *  viewProgress: {
 *     // Bind ViewProgress component on parent Component dom node
 *     ghost: true,
 *     // Component class, extending Okiba Component
 *     type: ViewProgress
 *   }
 * }
 * ```
 *
 * Becomes:
 * ```javascript
 * this.components.slider
 * ```
 * @param   {Object}    [{options}]         Custom options passed to the component
 */


var Component =
/*#__PURE__*/
function () {
  function Component(args) {
    _classCallCheck(this, Component);

    this.el = args.el;

    if (args.options) {
      this.options = args.options;
    }

    if (args.ui) {
      this.ui = bindUi(args.ui, args.el);
    }

    if (args.components) {
      this.components = bindComponents(args.components, args.el);
    }
  }
  /**
   * @function onDestroy
   * @description Virtual method, needs to be overridden
   * It's the place to call cleanup functions as it will
   * be called when your component is destroyed
   */

  /**
   * Should not be overridden, will call `onDestroy`
   * and forward destruction to all child components
   */


  _createClass(Component, [{
    key: "destroy",
    value: function destroy() {
      var _this = this;

      if (this.onDestroy) {
        this.onDestroy();
      }

      if (this.components) {
        Object.keys(this.components).forEach(function (key) {
          return (_this.components[key].length ? _this.components[key] : [_this.components[key]]).forEach(function (c) {
            return c.destroy();
          });
        });
      }

      this.components = null;
    }
  }]);

  return Component;
}();

/* harmony default export */ var component = (Component);
// EXTERNAL MODULE: ./packages/sizes-cache/index.js + 2 modules
var sizes_cache = __webpack_require__(24);

// CONCATENATED MODULE: ./packages/pointer/node_modules/@okiba/math/index.js
/**
 * @module math
 * @description Collection of math functions
 */

/**
 * Linear interpolation between a two values
 * @param  {Number} min      Minimum possible value
 * @param  {Number} max      Maximum possible value
 * @param  {Number} fraction Current position
 * @return {Number}          The interpolated value
 *
 * @example
 * import {lerp} from '@okiba/math'
 * const xPosition = lerp(0, 100, 0.5)
 * console.log(xPosition) // 50
 */
function lerp(min, max, fraction) {
  return (max - min) * fraction + min;
}
/**
 * Maps a value between two ranges
 * @param  {Number} n       Value to map
 * @param  {Number} min1    Source range minimum
 * @param  {Number} max1    Source range maximum
 * @param  {Number} min2    Target range minimum
 * @param  {Number} max2    Target range maximum
 * @return {Number}         Mapped value
 *
 * @example
 * import {map} from '@okiba/math'
 *
 * const x = map(0.5, 0, 1, 0, 1000)
 * console.log(x) // 500
 *
 * const y = map(0, -1, 1, -1000, 1000)
 * console.log(y) // 0
 */

function map(n, min1, max1, min2, max2) {
  return (n - min1) * (max2 - min2) / (max1 - min1) + min2;
}
/**
 * Limit a value between a min and a max (inclusive)
 * @param  {Number} n   Value to cap
 * @param  {Number} min Minimum possible value
 * @param  {Number} max Maximum possible value
 * @return {Number}     Capped value
 *
 * @example
 * import {cap} from '@okiba/math'
 * let progress = 1.1
 * progress = cap(0, 1, progress)
 * console.log(progress) // 1
 */

function cap(n, min, max) {
  return Math.min(Math.max(n, min), max);
}
/**
 * Distance between two numbers
 * @param  {Number} x1 First number
 * @param  {Number} x2 Second number
 * @return {Number}    Distance between the values
 *
 * @example
 * import {distance} from '@okiba/math'
 * const x1 = -100, x2 = 100
 * const d = distance(x1, x2)
 * console.log(d) // 200
 */

function distance(x1, x2) {
  return Math.abs(x1 - x2);
}
var roundMap = {};
/**
 * Round a number with given precision, with memoized powers
 * @param  {Number} n Number to round
 * @param  {Number} [p=3] Precision of digits to leave
 * @return {Number} Rounded number
 *
 * @example
 * import {round} from '@okiba/math'
 * const rounded = distance(1.111111, 3)
 * console.log(rounded) // 1.111
 */

function round(n) {
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

  if (!roundMap[p]) {
    roundMap[p] = Math.pow(10, p);
  }

  return Math.round(n * roundMap[p]) / roundMap[p];
}
// CONCATENATED MODULE: ./packages/pointer/lib/Cursor/index.js











function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Cursor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Cursor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Cursor_createClass(Constructor, protoProps, staticProps) { if (protoProps) Cursor_defineProperties(Constructor.prototype, protoProps); if (staticProps) Cursor_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @module Cursor
 * @description Custom cursor base class
 * @example
 */








var Cursor_Cursor =
/*#__PURE__*/
function (_Component) {
  _inherits(Cursor, _Component);

  /**
   * Default triggers selectors
   */

  /**
   * @constructor
   * @param {Object} props
   */
  function Cursor(props) {
    var _this;

    Cursor_classCallCheck(this, Cursor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cursor).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onPointerInView", function (inView) {
      var action = inView ? 'show' : 'hide';

      _this[action]();
    });

    _defineProperty(_assertThisInitialized(_this), "onPointerMove", function () {
      _this.coords.current = Pointer.coords;

      if (!_this.enabled) {
        _this.move();

        _this.enabled = true;
        event_manager["default"].on('raf', _this.onRAF);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPointerOver", function (_ref) {
      var target = _ref.target;
      var _this$options = _this.options,
          _this$options$trigger = _this$options.triggers,
          triggers = _this$options$trigger === void 0 ? Cursor.defaultTriggers : _this$options$trigger,
          trackTouch = _this$options.trackTouch;
      var matchedSelector = /* Cannot get final name for export "matches" in "./packages/pointer/node_modules/@okiba/dom/index.js" (known exports: byId qs qsa on off eventCoords offset getElements isChildOf delegate, known reexports: ) */ undefined(target, triggers);

      if (!matchedSelector && detect["hasTouch"] && trackTouch) {
        matchedSelector = triggers.find(function (selector) {
          return target.closest(selector);
        });
      }

      _this.hover(target, matchedSelector);
    });

    _defineProperty(_assertThisInitialized(_this), "onRAF", function () {
      var inertia = _this.options.inertia;
      var last = _this.coords.last;
      var withInertia = !!last && typeof inertia === 'number' && inertia > 0 && inertia < 1;

      _this.move(withInertia ? inertia : false);
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      return _this.setup();
    });

    _this.coords = {
      current: {}
    };
    _this.sizes = sizes_cache["default"].get(_this.el);

    if (_this.options.autoInit !== false) {
      _this.setup();

      _this.listen();
    }

    return _this;
  }
  /**
   * Sets cursor base styles (can be extended/overwritten)
   */


  Cursor_createClass(Cursor, [{
    key: "setup",
    value: function setup() {
      this.el.style.position = 'fixed';
      this.el.style.top = "-".concat(this.sizes.height / 2, "px");
      this.el.style.left = "-".concat(this.sizes.width / 2, "px");
    }
    /**
     * Reveals cursor (can be extended)
     */

  }, {
    key: "show",
    value: function show() {
      this.el.classList.remove('hidden');
    }
    /**
     * Unveils cursor (can be extended)
     */

  }, {
    key: "hide",
    value: function hide() {
      this.el.classList.add('hidden');
    }
    /**
     * Animates cursor to pointer position (can be overwritten)
     * @param
     */

  }, {
    key: "move",
    value: function move() {
      var inertia = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$coords = this.coords,
          last = _this$coords.last,
          current = _this$coords.current;
      var x = inertia ? lerp(last.x, current.x, inertia) : current.x;
      var y = inertia ? lerp(last.y, current.y, inertia) : current.y;
      this.coords.last = {
        x: x,
        y: y
      };
      this.el.style.transform = "translate3d(".concat(x, "px, ").concat(y, "px, 0)");
    }
    /**
     * Handles hover event
     * @param {Object} target The event target
     * @param {Object} matchedSelector The trigger selector
     */

  }, {
    key: "hover",
    value: function hover(target, matchedSelector) {}
    /**
     * Restores the cursor default state (should be implemented)
     */

  }, {
    key: "reset",
    value: function reset() {}
    /**
     * Handles pointer entering/leaving viewport callback
     */

  }, {
    key: "listen",

    /**
     * Initializes listeners (can be extended)
     */
    value: function listen() {
      var trackTouch = this.options.trackTouch;

      if (!detect["hasTouch"] || trackTouch) {
        event_manager["default"].on('resize', this.onResize);
        event_manager["default"].on('pointerinview', this.onPointerInView);
        event_manager["default"].on('pointermove', this.onPointerMove);
        event_manager["default"].on('pointerover', this.onPointerOver);
      }
    }
    /**
     * Kills listeners (can be extended)
     */

  }, {
    key: "onDestroy",
    value: function onDestroy() {
      var trackTouch = this.options.trackTouch;

      if (!detect["hasTouch"] || trackTouch) {
        event_manager["default"].off('resize', this.onResize);
        event_manager["default"].off('pointerinview', this.onPointerInView);
        event_manager["default"].off('pointermove', this.onPointerMove);
        event_manager["default"].off('pointerover', this.onPointerOver);
        this.disable();
      }
    }
  }]);

  return Cursor;
}(component);

_defineProperty(Cursor_Cursor, "defaultTriggers", ['a', 'button', '[data-cursor]']);

/* harmony default export */ var lib_Cursor = (Cursor_Cursor);
// CONCATENATED MODULE: ./packages/pointer/index.js
/* concated harmony reexport Cursor */__webpack_require__.d(__webpack_exports__, "Cursor", function() { return lib_Cursor; });


/* harmony default export */ var pointer = __webpack_exports__["default"] = (Pointer);


/***/ })
/******/ ]);
});