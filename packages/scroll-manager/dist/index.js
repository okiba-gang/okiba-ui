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
/******/ 	return __webpack_require__(__webpack_require__.s = 131);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var getOwnPropertyDescriptor = __webpack_require__(21).f;
var createNonEnumerableProperty = __webpack_require__(9);
var redefine = __webpack_require__(14);
var setGlobal = __webpack_require__(62);
var copyConstructorProperties = __webpack_require__(80);
var isForced = __webpack_require__(85);

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

var global = __webpack_require__(3);
var shared = __webpack_require__(43);
var has = __webpack_require__(5);
var uid = __webpack_require__(46);
var NATIVE_SYMBOL = __webpack_require__(66);
var USE_SYMBOL_AS_UID = __webpack_require__(86);

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
/* 3 */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(107)))

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

var isObject = __webpack_require__(4);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(77);
var anObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(42);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var definePropertyModule = __webpack_require__(8);
var createPropertyDescriptor = __webpack_require__(29);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AbstractHandler", function() { return /* reexport */ AbstractHandler_AbstractHandler; });
__webpack_require__.d(__webpack_exports__, "EventHandler", function() { return /* reexport */ EventHandler_EventHandler; });
__webpack_require__.d(__webpack_exports__, "RAFHandler", function() { return /* reexport */ RAFHandler; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@okiba/event-emitter/index.js
var event_emitter = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/@okiba/functions/index.js


/**
 * @module functions
 * @description A collection of contextless utility functions
 */

/**
 * Callback debounce helper.
 * Returns a debounced version of provided callback
 *
 * @param {Function} callback The callback to be debounced
 * @param {Number} latency The debounce delay time
 * @param {Number} timer The timer id
 *
 * @example
 * import {debounce} from '@okiba/functions'
 *
 * const onResize = () => console.log('window resized')
 * window.addEventListener('resize', debounce(onResize, 300))
 *
 * @return {Function} The debounced version of original callback
 */
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
// CONCATENATED MODULE: ./packages/event-manager/lib/handlers/AbstractHandler/index.js









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @module AbstractHandler
 * @package event-manager
 * @description A base class that defines a global event handler interface
 */


var AbstractHandler_AbstractHandler = /*#__PURE__*/function () {
  /**
   * @constructor
   * @param {Object} config The handler configuration
   *  @schema
   *  {
   *    type: The native event type
   *    alias: The global event type (native event type as default)
   *    target: The native event target
   *    debounce: The event callback debounce time
   *    payloadFilter: A function to manipulate event data before passing it to the event callback
   *    forceListening: Defines if global listeners have to be enabled regardless of registered callbacks
   *  }
   */
  function AbstractHandler(_ref) {
    var _this = this;

    var type = _ref.type,
        _ref$alias = _ref.alias,
        _alias = _ref$alias === void 0 ? type : _ref$alias,
        config = _objectWithoutProperties(_ref, ["type", "alias"]);

    _classCallCheck(this, AbstractHandler);

    _defineProperty(this, "eventCallback", function (nativePayload) {
      var _this$config = _this.config,
          alias = _this$config.alias,
          payloadFilter = _this$config.payloadFilter,
          dispatch = _this$config.dispatch;
      var payload = typeof payloadFilter === 'function' ? payloadFilter(nativePayload) : nativePayload;
      dispatch(alias, payload);
    });

    this.config = _objectSpread({
      type: type,
      alias: _alias
    }, config);
    this.onEvent = config.debounce ? debounce(this.eventCallback, config.debounce) : this.eventCallback;

    if (this.config.forceListening) {
      this.listen();
    }
  }
  /**
   * A callback that dispatches the subscribed global event when the related native event occurs
   * @param {Event} nativePayload The original payload returned by native event
   */


  _createClass(AbstractHandler, [{
    key: "listen",

    /**
     * The listen interface method (must be extended)
     */
    value: function listen() {
      if (this.listening) return;
      this.listening = true;
    }
    /**
     * The unlisten interface method (must be extended)
     */

  }, {
    key: "unlisten",
    value: function unlisten() {
      if (!this.listening || this.config.forceListening) return;
      this.listening = false;
    }
  }]);

  return AbstractHandler;
}();


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.get.js
var es_reflect_get = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(27);

// EXTERNAL MODULE: ./packages/detect/index.js
var detect = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/@okiba/dom/index.js + 2 modules
var dom = __webpack_require__(18);

// CONCATENATED MODULE: ./packages/event-manager/lib/handlers/EventHandler/index.js















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function EventHandler_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EventHandler_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EventHandler_createClass(Constructor, protoProps, staticProps) { if (protoProps) EventHandler_defineProperties(Constructor.prototype, protoProps); if (staticProps) EventHandler_defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @module EventHandler
 * @extends AbstractHandler
 * @package event-manager
 * @description An handler class aimed to centralize a native browser event listener
 */




var EventHandler_EventHandler = /*#__PURE__*/function (_AbstractHandler) {
  _inherits(EventHandler, _AbstractHandler);

  var _super = _createSuper(EventHandler);

  function EventHandler() {
    EventHandler_classCallCheck(this, EventHandler);

    return _super.apply(this, arguments);
  }

  EventHandler_createClass(EventHandler, [{
    key: "listen",

    /**
     * @override
     */
    value: function listen() {
      var _this = this;

      _get(_getPrototypeOf(EventHandler.prototype), "listen", this).call(this);

      var _this$config = this.config,
          type = _this$config.type,
          target = _this$config.target,
          _this$config$passive = _this$config.passive,
          passive = _this$config$passive === void 0 ? true : _this$config$passive,
          _this$config$capture = _this$config.capture,
          capture = _this$config$capture === void 0 ? false : _this$config$capture;
      var options = detect["hasPassiveEvents"] ? {
        passive: passive,
        capture: capture
      } : capture;

      if (Array.isArray(type)) {
        type.forEach(function (entry) {
          return Object(dom["b" /* on */])(target, entry, _this.onEvent, options);
        });
      } else {
        Object(dom["b" /* on */])(target, type, this.onEvent, options);
      }
    }
    /**
     * @override
     */

  }, {
    key: "unlisten",
    value: function unlisten() {
      var _this2 = this;

      _get(_getPrototypeOf(EventHandler.prototype), "unlisten", this).call(this);

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
          return Object(dom["a" /* off */])(target, entry, _this2.onEvent, options);
        });
      } else {
        Object(dom["a" /* off */])(target, type, this.onEvent, options);
      }
    }
  }]);

  return EventHandler;
}(AbstractHandler_AbstractHandler);


// CONCATENATED MODULE: ./packages/event-manager/lib/handlers/RAFHandler/index.js














function RAFHandler_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RAFHandler_typeof = function _typeof(obj) { return typeof obj; }; } else { RAFHandler_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RAFHandler_typeof(obj); }

function RAFHandler_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RAFHandler_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RAFHandler_createClass(Constructor, protoProps, staticProps) { if (protoProps) RAFHandler_defineProperties(Constructor.prototype, protoProps); if (staticProps) RAFHandler_defineProperties(Constructor, staticProps); return Constructor; }

function RAFHandler_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { RAFHandler_get = Reflect.get; } else { RAFHandler_get = function _get(target, property, receiver) { var base = RAFHandler_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return RAFHandler_get(target, property, receiver || target); }

function RAFHandler_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = RAFHandler_getPrototypeOf(object); if (object === null) break; } return object; }

function RAFHandler_createSuper(Derived) { return function () { var Super = RAFHandler_getPrototypeOf(Derived), result; if (RAFHandler_isNativeReflectConstruct()) { var NewTarget = RAFHandler_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return RAFHandler_possibleConstructorReturn(this, result); }; }

function RAFHandler_possibleConstructorReturn(self, call) { if (call && (RAFHandler_typeof(call) === "object" || typeof call === "function")) { return call; } return RAFHandler_assertThisInitialized(self); }

function RAFHandler_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function RAFHandler_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function RAFHandler_getPrototypeOf(o) { RAFHandler_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RAFHandler_getPrototypeOf(o); }

function RAFHandler_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) RAFHandler_setPrototypeOf(subClass, superClass); }

function RAFHandler_setPrototypeOf(o, p) { RAFHandler_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RAFHandler_setPrototypeOf(o, p); }

function RAFHandler_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @module RAFHandler
 * @extends AbstractHandler
 * @package event-manager
 * @description An handler class aimed to centralize a requestAnimationFrame
 */


var RAFHandler = /*#__PURE__*/function (_AbstractHandler) {
  RAFHandler_inherits(RAFHandler, _AbstractHandler);

  var _super = RAFHandler_createSuper(RAFHandler);

  function RAFHandler() {
    var _this;

    RAFHandler_classCallCheck(this, RAFHandler);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    RAFHandler_defineProperty(RAFHandler_assertThisInitialized(_this), "nextFrame", function (timestamp) {
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
      RAFHandler_get(RAFHandler_getPrototypeOf(RAFHandler.prototype), "listen", this).call(this);

      this.nextFrame();
    }
    /**
     * @override
     */

  }, {
    key: "unlisten",
    value: function unlisten() {
      RAFHandler_get(RAFHandler_getPrototypeOf(RAFHandler.prototype), "unlisten", this).call(this);

      window.cancelAnimationFrame(this.requestId);
    }
  }]);

  return RAFHandler;
}(AbstractHandler_AbstractHandler);


// CONCATENATED MODULE: ./packages/event-manager/lib/handlers/index.js



// CONCATENATED MODULE: ./packages/event-manager/lib/EventManager/index.js









function EventManager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EventManager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EventManager_createClass(Constructor, protoProps, staticProps) { if (protoProps) EventManager_defineProperties(Constructor.prototype, protoProps); if (staticProps) EventManager_defineProperties(Constructor, staticProps); return Constructor; }

function EventManager_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function EventManager_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { EventManager_ownKeys(Object(source), true).forEach(function (key) { EventManager_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { EventManager_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function EventManager_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function EventManager_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = EventManager_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function EventManager_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @module EventManager
 * @package event-manager
 * @description A singleton to manage centralized event listeners
 */


/**
 * The global event emitter
 * @type {EventEmitter}
 * @private
 */

var emitter = new event_emitter["a" /* default */]();
/**
 * The collection of global events handlers
 * @type {Object}
 * @private
 */

var handlers = {};
/**
 * Handles global event subscription
 * @private
 * @param {Object} config The event handling configuration
 *  @schema
 *  {
 *    handler: EventHandler (default) or an extension of it (must implement subscribe/unsubscribe interface)
 *    type: The (native) event type to be listened
 *    alias: The global event type (native event type as default)
 *    target: The (native) event target
 *    debounce: The callback debounce time
 *    payloadFilter: A function to manipulate event data before passing it to the event callback
 *  }
 * @param {Boolean} quiet If true, suppresses logs
 */

function _subscribe(_ref, quiet) {
  var _ref$handler = _ref.handler,
      Handler = _ref$handler === void 0 ? EventHandler_EventHandler : _ref$handler,
      type = _ref.type,
      _ref$alias = _ref.alias,
      alias = _ref$alias === void 0 ? type : _ref$alias,
      config = EventManager_objectWithoutProperties(_ref, ["handler", "type", "alias"]);

  if (handlers.hasOwnProperty(alias)) {
    !quiet && console.warn("[EventManager error]: a global event \"".concat(alias, "\" has been already subscribed. Skipping..."));
    return;
  }

  handlers[alias] = new Handler(EventManager_objectSpread({}, config, {
    type: type,
    alias: alias,
    dispatch: function dispatch(alias, payload) {
      return emitter.emit(alias, payload);
    }
  }));
}
/**
 * Removes a global event
 * @private
 * @param {String} types The event (alias) to be removed from global events
 */


function _unsubscribe(type) {
  if (!handlers.hasOwnProperty(type)) return;

  if (handlers[type].listening) {
    handlers[type].unlisten();
  }

  delete handlers[type];
}

var EventManager = /*#__PURE__*/function () {
  function EventManager() {
    EventManager_classCallCheck(this, EventManager);
  }

  EventManager_createClass(EventManager, null, [{
    key: "hasListeners",

    /**
     * Checks if global event has registered callbacks
     * @param {String} type The event type
     */
    value: function hasListeners(type) {
      return !!emitter.hs[type] && !!emitter.hs[type].length;
    }
    /**
     * Adds a global event(s)
     * @param {Object|Object[]} config Event(s) configuration(s)
     */

  }, {
    key: "subscribe",
    value: function subscribe(config) {
      if (Array.isArray(config)) {
        config.forEach(function (entry) {
          return _subscribe(entry);
        });
        return;
      }

      _subscribe(config);
    }
    /**
     * Removes a global event
     * @param {String|String[]} types The event(s) to be removed
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe(type) {
      if (Array.isArray(type)) {
        type.forEach(function (entry) {
          return _unsubscribe(entry);
        });
        return;
      }

      _unsubscribe(type);
    }
    /**
     * Adds a global event listener
     * @param {String} type The event type
     * @param {Function} callback The event callback
     */

  }, {
    key: "on",
    value: function on(type, callback) {
      if (!handlers.hasOwnProperty(type)) return;

      if (!handlers[type].listening) {
        handlers[type].listen();
      }

      emitter.on(type, callback);
    }
    /**
     * Removes a global event listener
     * @param {String} type The event type
     * @param {Function} callback The event callback
     */

  }, {
    key: "off",
    value: function off(type, callback) {
      if (!handlers.hasOwnProperty(type) || !handlers[type].listening) return;
      emitter.off(type, callback);

      if (EventManager.hasListeners(type)) {
        handlers[type].unlisten();
      }
    }
    /**
     * Proxies event dispatching
     * @param {String} type The event type
     * @param {*} payload The event payload
     */

  }, {
    key: "emit",
    value: function emit(type, payload) {
      if (!handlers.hasOwnProperty(type)) return;
      emitter.emit(type, payload);
    }
    /**
     * Clears all registered callbacks
     * @param {Array} events The global events to clear
     */

  }, {
    key: "clear",
    value: function clear() {
      var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EventManager.subscribedEvents;
      if (!Array.isArray(events)) return;
      events.forEach(function (type) {
        if (!emitter.hs[type]) return;
        emitter.hs[type].clear();
      });
    }
    /**
     * Destroys all listeners, callbacks and handlers
     * @param {Array} events The global events to destroy
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EventManager.subscribedEvents;
      EventManager.clear(events);
      EventManager.unsubscribe(events);
    }
  }, {
    key: "subscribedEvents",

    /**
     * Global events list getter
     */
    get: function get() {
      return Object.keys(handlers);
    }
  }]);

  return EventManager;
}();


// CONCATENATED MODULE: ./packages/event-manager/lib/events.js

var resize = {
  type: 'resize',
  target: window,
  debounce: 200,
  payloadFilter: function payloadFilter(e) {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      event: e
    };
  }
};
var events_scroll = {
  type: 'scroll',
  target: window
};
var raf = {
  alias: 'raf',
  handler: RAFHandler
};
/* harmony default export */ var events = (['resize', 'scroll', 'raf']);
// CONCATENATED MODULE: ./packages/event-manager/index.js
/**
 * @module EventManager
 * @description A custom events management system
 */


 // built-in global events subscription

EventManager.subscribe([resize, events_scroll, raf]);
/* harmony default export */ var event_manager = __webpack_exports__["default"] = (EventManager);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(55);
var requireObjectCoercible = __webpack_require__(61);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(61);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var global = __webpack_require__(3);
var getBuiltIn = __webpack_require__(22);
var IS_PURE = __webpack_require__(44);
var DESCRIPTORS = __webpack_require__(6);
var NATIVE_SYMBOL = __webpack_require__(66);
var USE_SYMBOL_AS_UID = __webpack_require__(86);
var fails = __webpack_require__(1);
var has = __webpack_require__(5);
var isArray = __webpack_require__(47);
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(7);
var toObject = __webpack_require__(12);
var toIndexedObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(42);
var createPropertyDescriptor = __webpack_require__(29);
var nativeObjectCreate = __webpack_require__(32);
var objectKeys = __webpack_require__(56);
var getOwnPropertyNamesModule = __webpack_require__(63);
var getOwnPropertyNamesExternal = __webpack_require__(112);
var getOwnPropertySymbolsModule = __webpack_require__(72);
var getOwnPropertyDescriptorModule = __webpack_require__(21);
var definePropertyModule = __webpack_require__(8);
var propertyIsEnumerableModule = __webpack_require__(71);
var createNonEnumerableProperty = __webpack_require__(9);
var redefine = __webpack_require__(14);
var shared = __webpack_require__(43);
var sharedKey = __webpack_require__(45);
var hiddenKeys = __webpack_require__(31);
var uid = __webpack_require__(46);
var wellKnownSymbol = __webpack_require__(2);
var wrappedWellKnownSymbolModule = __webpack_require__(87);
var defineWellKnownSymbol = __webpack_require__(88);
var setToStringTag = __webpack_require__(48);
var InternalStateModule = __webpack_require__(30);
var $forEach = __webpack_require__(34).forEach;

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var createNonEnumerableProperty = __webpack_require__(9);
var has = __webpack_require__(5);
var setGlobal = __webpack_require__(62);
var inspectSource = __webpack_require__(79);
var InternalStateModule = __webpack_require__(30);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var forEach = __webpack_require__(91);

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var DOMIterables = __webpack_require__(92);
var forEach = __webpack_require__(91);
var createNonEnumerableProperty = __webpack_require__(9);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(64);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ qs; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ qsa; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ on; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ off; });

// UNUSED EXPORTS: byId, eventCoords, offset, getElements, matches, isChildOf, delegate, createCustomEvent

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(54);

// CONCATENATED MODULE: ./node_modules/@okiba/dom/node_modules/@okiba/arrays/index.js


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
// CONCATENATED MODULE: ./node_modules/@okiba/dom/utils.js

/**
 * Memo used to cache properties and methods trough the module
 */

var memo = {};
function getMatcher() {
  if (!memo.matcher) {
    for (var _i = 0, _arr = ['matchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector', 'webkitMatchesSelector']; _i < _arr.length; _i++) {
      var k = _arr[_i];

      if (k in Element.prototype) {
        memo.matcher = k;
        break;
      }
    }
  }

  return memo.matcher;
}
/**
 * Generic event add/removal factory
 */

function eventBuilder(source, type, handler, action, options) {
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
// CONCATENATED MODULE: ./node_modules/@okiba/dom/index.js












function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  return eventBuilder(source, type, handler, 'add', options);
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
  return eventBuilder(source, type, handler, 'remove', options);
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
/**
 * Checks if an element matches at least one in a list of selectors.
 *
 * @example
 * import {matches} from '@okiba/dom'
 *
 * const isInternal = !!matches(a, '.internal')
 * //...
 * const match = matches(myDiv, ['.red', '.green', '.blue])
 * myDiv.style.backgroundColor = match.replace('.', '')
 *
 * @param {Element} el Element to check
 * @param {(String|Array)} selectors Selector (ora array thereof) which the element should match
 * @param {Boolean} testAncestors If true, extends match test upward in the ancestors
 *
 * @return {String|null} First matching selector, `null` if there was no match
 */

function matches(el) {
  var selectors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var testAncestors = arguments.length > 2 ? arguments[2] : undefined;
  var matcher = getMatcher();
  var matched = castArray(selectors).find(function (selector) {
    return el[matcher] && el[matcher](selector);
  });

  if (!matched && testAncestors) {
    matched = castArray(selectors).find(function (selector) {
      return isChildOf(el, selector);
    });
  }

  return matched;
}
/**
 * Check if a given element is child of another. The target to match can be an element, selector, or array of selectors.
 *
 * @example
 * import {isChildOf} from '@okiba/dom'
 *
 * const isChildOfAnchor = isChildOf(myNode, 'a')
 * //... or
 * const isInsideButton = isChildOf(myNode, myButton)
 *
 * @param {Element} el Element to check
 * @param {(Element|String|String[])} target Selector to match or Element checked for parent relationship
 *
 * @return {Boolean} Boolean of match found
 */

function isChildOf(el, target) {
  var isSelector = typeof target === 'string';
  var isMatching = false;

  do {
    isMatching = isSelector ? matches(el, target) : el === target;
    el = el.parentNode;
  } while (!isMatching && el);

  return !!isMatching;
}
/**
 * Delegate an event callback.
 * It will be executed only if the event target has an ancestor which matches the given target
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
 * @param {String} event Event to bind to
 * @param {Function} callback Function to be executed at match
 * @param {(Object|Boolean)} options Options to be to `on`
 * @param {(Window|HTMLDocument|HTMLElement)} context Delegation root element
 *
 * @return {Function} Function to be called to remove the delegated callback
 */

function delegate(target, event, callback, options) {
  var context = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : window;

  function check(e) {
    if (isChildOf(e.target, target)) {
      callback(e);
    }
  }

  on(context, event, check, options);
  return function undelegate() {
    off(context, event, check);
  };
}
/**
 * Custom event factory.
 * Creates a cross-browsers compatible custom event instance
 *
 * @param {String} type The custom event type
 * @param {Object} options The custom event options
 *
 * @example
 * import {createCustomEvent} from '@okiba/dom'
 *
 * const enemy = document.getElementById('enemy')
 * const shinobiAttack = createCustomEvent('shinobi-attack', {
 *  detail: { damage: 3 }
 * })
 *
 * enemy.setAttribute('data-life-points', 100)
 *
 * enemy.addEventListener('shinobi-attack', e => {
 *  const currentLifePoints = enemy.getAttribute('data-life-points')
 *  const updatedlifePoints = Math.max(0, currentLifePoints - e.detail.damage)
 *  enemy.setAttribute('data-life-points', updatedlifePoints)
 * })
 *
 * enemy.dispatchEvent(shinobiAttack)
 *
 * console.log(enemy.getAttribute('data-life-points')) // Logs: 97
 *
 * @return {CustomEvent} The custom event instance
 */

function createCustomEvent(type) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var config = _objectSpread({
    bubbles: false,
    cancelable: false,
    detail: null
  }, options);

  if (typeof window.CustomEvent === 'function') {
    return new window.CustomEvent(type, config);
  }

  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(type, config.bubbles, config.cancelable, config.detail);
  return event;
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var fails = __webpack_require__(1);
var toIndexedObject = __webpack_require__(11);
var nativeGetOwnPropertyDescriptor = __webpack_require__(21).f;
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(11);
var addToUnscopables = __webpack_require__(75);
var Iterators = __webpack_require__(33);
var InternalStateModule = __webpack_require__(30);
var defineIterator = __webpack_require__(68);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var propertyIsEnumerableModule = __webpack_require__(71);
var createPropertyDescriptor = __webpack_require__(29);
var toIndexedObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(42);
var has = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(77);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(82);
var global = __webpack_require__(3);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var toObject = __webpack_require__(12);
var nativeKeys = __webpack_require__(56);
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $indexOf = __webpack_require__(74).indexOf;
var sloppyArrayMethod = __webpack_require__(67);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(69);
var redefine = __webpack_require__(14);
var toString = __webpack_require__(122);

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(123).charAt;
var InternalStateModule = __webpack_require__(30);
var defineIterator = __webpack_require__(68);

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

var global = __webpack_require__(3);
var DOMIterables = __webpack_require__(92);
var ArrayIteratorMethods = __webpack_require__(20);
var createNonEnumerableProperty = __webpack_require__(9);
var wellKnownSymbol = __webpack_require__(2);

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var fails = __webpack_require__(1);
var isArray = __webpack_require__(47);
var isObject = __webpack_require__(4);
var toObject = __webpack_require__(12);
var toLength = __webpack_require__(17);
var createProperty = __webpack_require__(53);
var arraySpeciesCreate = __webpack_require__(89);
var arrayMethodHasSpeciesSupport = __webpack_require__(52);
var wellKnownSymbol = __webpack_require__(2);
var V8_VERSION = __webpack_require__(90);

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
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(109);
var global = __webpack_require__(3);
var isObject = __webpack_require__(4);
var createNonEnumerableProperty = __webpack_require__(9);
var objectHas = __webpack_require__(5);
var sharedKey = __webpack_require__(45);
var hiddenKeys = __webpack_require__(31);

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
/* 31 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var defineProperties = __webpack_require__(110);
var enumBugKeys = __webpack_require__(65);
var hiddenKeys = __webpack_require__(31);
var html = __webpack_require__(111);
var documentCreateElement = __webpack_require__(78);
var sharedKey = __webpack_require__(45);
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
/* 33 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(51);
var IndexedObject = __webpack_require__(55);
var toObject = __webpack_require__(12);
var toLength = __webpack_require__(17);
var arraySpeciesCreate = __webpack_require__(89);

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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(27);

// EXTERNAL MODULE: ./packages/event-manager/index.js + 7 modules
var event_manager = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(59);

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
// CONCATENATED MODULE: ./packages/sizes-cache/node_modules/@okiba/dom/utils.js

/**
 * Memo used to cache properties and methods trough the module
 */

var memo = {};
function getMatcher() {
  if (!memo.matcher) {
    for (var _i = 0, _arr = ['matchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector', 'webkitMatchesSelector']; _i < _arr.length; _i++) {
      var k = _arr[_i];

      if (k in Element.prototype) {
        memo.matcher = k;
        break;
      }
    }
  }

  return memo.matcher;
}
/**
 * Generic event add/removal factory
 */

function eventBuilder(source, type, handler, action, options) {
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
  return eventBuilder(source, type, handler, 'add', options);
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
  return eventBuilder(source, type, handler, 'remove', options);
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
/**
 * Checks if an element matches at least one in a list of selectors.
 *
 * @example
 * import {matches} from '@okiba/dom'
 *
 * const isInternal = !!matches(a, '.internal')
 * //...
 * const match = matches(myDiv, ['.red', '.green', '.blue])
 * myDiv.style.backgroundColor = match.replace('.', '')
 *
 * @param {Element} el Element to check
 * @param {(String|Array)} selectors Selector (ora array thereof) which the element should match
 * @param {Boolean} testAncestors If true, extends match test upward in the ancestors
 *
 * @return {String|null} First matching selector, `null` if there was no match
 */

function matches(el) {
  var selectors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var testAncestors = arguments.length > 2 ? arguments[2] : undefined;
  var matcher = getMatcher();
  var matched = castArray(selectors).find(function (selector) {
    return el[matcher] && el[matcher](selector);
  });

  if (!matched && testAncestors) {
    matched = castArray(selectors).find(function (selector) {
      return isChildOf(el, selector);
    });
  }

  return matched;
}
/**
 * Checks if the given element has an ancestor which matches a selector
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
 * @param {(String|Element)} target Selector to match or Element checked for parent relationship
 *
 * @return {Boolean} Boolean of match found
 */

function isChildOf(el, target) {
  var isSelector = typeof target === 'string';
  var isMatching = false;

  do {
    isMatching = isSelector ? matches(el, target) : el === target;
    el = el.parentNode;
  } while (!isMatching && el);

  return isMatching;
}
/**
 * Delegate an event callback.
 * It will be executed only if the event target has an ancestor which matches the given target
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

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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


/* harmony default export */ var sizes_cache = __webpack_exports__["default"] = (new (_temp = /*#__PURE__*/function () {
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

      var _iterator = _createForOfIteratorHelper(_this.map.keys()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var el = _step.value;

          _this.compute(el);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
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
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $filter = __webpack_require__(34).filter;
var fails = __webpack_require__(1);
var arrayMethodHasSpeciesSupport = __webpack_require__(52);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var DESCRIPTORS = __webpack_require__(6);
var ownKeys = __webpack_require__(81);
var toIndexedObject = __webpack_require__(11);
var getOwnPropertyDescriptorModule = __webpack_require__(21);
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(0);
var DESCRIPTORS = __webpack_require__(6);
var global = __webpack_require__(3);
var has = __webpack_require__(5);
var isObject = __webpack_require__(4);
var defineProperty = __webpack_require__(8).f;
var copyConstructorProperties = __webpack_require__(80);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(88);

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(14);
var anObject = __webpack_require__(7);
var fails = __webpack_require__(1);
var flags = __webpack_require__(125);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),
/* 42 */
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(44);
var store = __webpack_require__(108);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.4.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(43);
var uid = __webpack_require__(46);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(60);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(8).f;
var has = __webpack_require__(5);
var wellKnownSymbol = __webpack_require__(2);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toObject = __webpack_require__(12);
var sharedKey = __webpack_require__(45);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(94);

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(49);

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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(2);
var V8_VERSION = __webpack_require__(90);

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(42);
var definePropertyModule = __webpack_require__(8);
var createPropertyDescriptor = __webpack_require__(29);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var isObject = __webpack_require__(4);
var isArray = __webpack_require__(47);
var toAbsoluteIndex = __webpack_require__(84);
var toLength = __webpack_require__(17);
var toIndexedObject = __webpack_require__(11);
var createProperty = __webpack_require__(53);
var arrayMethodHasSpeciesSupport = __webpack_require__(52);
var wellKnownSymbol = __webpack_require__(2);

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var classof = __webpack_require__(60);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(83);
var enumBugKeys = __webpack_require__(65);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var fails = __webpack_require__(1);
var toObject = __webpack_require__(12);
var nativeGetPrototypeOf = __webpack_require__(50);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(94);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var getBuiltIn = __webpack_require__(22);
var aFunction = __webpack_require__(49);
var anObject = __webpack_require__(7);
var isObject = __webpack_require__(4);
var create = __webpack_require__(32);
var bind = __webpack_require__(124);
var fails = __webpack_require__(1);

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.github.io/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $reduce = __webpack_require__(126).left;
var sloppyArrayMethod = __webpack_require__(67);

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: sloppyArrayMethod('reduce') }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 60 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var createNonEnumerableProperty = __webpack_require__(9);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(83);
var enumBugKeys = __webpack_require__(65);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 65 */
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 67 */
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var createIteratorConstructor = __webpack_require__(114);
var getPrototypeOf = __webpack_require__(50);
var setPrototypeOf = __webpack_require__(95);
var setToStringTag = __webpack_require__(48);
var createNonEnumerableProperty = __webpack_require__(9);
var redefine = __webpack_require__(14);
var wellKnownSymbol = __webpack_require__(2);
var IS_PURE = __webpack_require__(44);
var Iterators = __webpack_require__(33);
var IteratorsCore = __webpack_require__(93);

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(2);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 70 */,
/* 71 */
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
/* 72 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);









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
var EventEmitter = /*#__PURE__*/function () {
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

/* harmony default export */ __webpack_exports__["a"] = (EventEmitter);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(11);
var toLength = __webpack_require__(17);
var toAbsoluteIndex = __webpack_require__(84);

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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(2);
var create = __webpack_require__(32);
var createNonEnumerableProperty = __webpack_require__(9);

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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(116);
var collectionStrong = __webpack_require__(119);

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var fails = __webpack_require__(1);
var createElement = __webpack_require__(78);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var isObject = __webpack_require__(4);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(43);

var functionToString = Function.toString;

module.exports = shared('inspectSource', function (it) {
  return functionToString.call(it);
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var ownKeys = __webpack_require__(81);
var getOwnPropertyDescriptorModule = __webpack_require__(21);
var definePropertyModule = __webpack_require__(8);

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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(22);
var getOwnPropertyNamesModule = __webpack_require__(63);
var getOwnPropertySymbolsModule = __webpack_require__(72);
var anObject = __webpack_require__(7);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

module.exports = global;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIndexedObject = __webpack_require__(11);
var indexOf = __webpack_require__(74).indexOf;
var hiddenKeys = __webpack_require__(31);

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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(64);

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
/* 85 */
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(66);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol() == 'symbol';


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(2);

exports.f = wellKnownSymbol;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(82);
var has = __webpack_require__(5);
var wrappedWellKnownSymbolModule = __webpack_require__(87);
var defineProperty = __webpack_require__(8).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var isArray = __webpack_require__(47);
var wellKnownSymbol = __webpack_require__(2);

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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var userAgent = __webpack_require__(113);

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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(34).forEach;
var sloppyArrayMethod = __webpack_require__(67);

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 92 */
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(50);
var createNonEnumerableProperty = __webpack_require__(9);
var has = __webpack_require__(5);
var wellKnownSymbol = __webpack_require__(2);
var IS_PURE = __webpack_require__(44);

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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var aPossiblePrototype = __webpack_require__(115);

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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(31);
var isObject = __webpack_require__(4);
var has = __webpack_require__(5);
var defineProperty = __webpack_require__(8).f;
var uid = __webpack_require__(46);
var FREEZING = __webpack_require__(117);

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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var isArrayIteratorMethod = __webpack_require__(102);
var toLength = __webpack_require__(17);
var bind = __webpack_require__(51);
var getIteratorMethod = __webpack_require__(103);
var callWithSafeIterationClosing = __webpack_require__(104);

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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(69);
var classofRaw = __webpack_require__(60);
var wellKnownSymbol = __webpack_require__(2);

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
/* 99 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(7);
var has = __webpack_require__(5);
var getOwnPropertyDescriptorModule = __webpack_require__(21);
var getPrototypeOf = __webpack_require__(50);

// `Reflect.get` method
// https://tc39.github.io/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject(target) === receiver) return target[propertyKey];
  if (descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey)) return has(descriptor, 'value')
    ? descriptor.value
    : descriptor.get === undefined
      ? undefined
      : descriptor.get.call(receiver);
  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $find = __webpack_require__(34).find;
var addToUnscopables = __webpack_require__(75);

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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(2);
var Iterators = __webpack_require__(33);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(98);
var Iterators = __webpack_require__(33);
var wellKnownSymbol = __webpack_require__(2);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);

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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(2);

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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $map = __webpack_require__(34).map;
var fails = __webpack_require__(1);
var arrayMethodHasSpeciesSupport = __webpack_require__(52);

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
/* 107 */
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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var setGlobal = __webpack_require__(62);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var inspectSource = __webpack_require__(79);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var definePropertyModule = __webpack_require__(8);
var anObject = __webpack_require__(7);
var objectKeys = __webpack_require__(56);

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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(22);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(11);
var nativeGetOwnPropertyNames = __webpack_require__(63).f;

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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(22);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(93).IteratorPrototype;
var create = __webpack_require__(32);
var createPropertyDescriptor = __webpack_require__(29);
var setToStringTag = __webpack_require__(48);
var Iterators = __webpack_require__(33);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var global = __webpack_require__(3);
var isForced = __webpack_require__(85);
var redefine = __webpack_require__(14);
var InternalMetadataModule = __webpack_require__(96);
var iterate = __webpack_require__(97);
var anInstance = __webpack_require__(99);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(1);
var checkCorrectnessOfIteration = __webpack_require__(105);
var setToStringTag = __webpack_require__(48);
var inheritIfRequired = __webpack_require__(118);

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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var setPrototypeOf = __webpack_require__(95);

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
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(8).f;
var create = __webpack_require__(32);
var redefineAll = __webpack_require__(120);
var bind = __webpack_require__(51);
var anInstance = __webpack_require__(99);
var iterate = __webpack_require__(97);
var defineIterator = __webpack_require__(68);
var setSpecies = __webpack_require__(121);
var DESCRIPTORS = __webpack_require__(6);
var fastKey = __webpack_require__(96).fastKey;
var InternalStateModule = __webpack_require__(30);

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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(14);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(22);
var definePropertyModule = __webpack_require__(8);
var wellKnownSymbol = __webpack_require__(2);
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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(69);
var classof = __webpack_require__(98);

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(64);
var requireObjectCoercible = __webpack_require__(61);

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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(49);
var isObject = __webpack_require__(4);

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(7);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(49);
var toObject = __webpack_require__(12);
var IndexedObject = __webpack_require__(55);
var toLength = __webpack_require__(17);

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var from = __webpack_require__(128);
var checkCorrectnessOfIteration = __webpack_require__(105);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(51);
var toObject = __webpack_require__(12);
var callWithSafeIterationClosing = __webpack_require__(104);
var isArrayIteratorMethod = __webpack_require__(102);
var toLength = __webpack_require__(17);
var createProperty = __webpack_require__(53);
var getIteratorMethod = __webpack_require__(103);

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator, next;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var defineProperty = __webpack_require__(8).f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),
/* 130 */,
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(16);

// CONCATENATED MODULE: ./packages/scroll-manager/node_modules/@okiba/event-emitter/index.js









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
var EventEmitter = /*#__PURE__*/function () {
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
// EXTERNAL MODULE: ./packages/event-manager/index.js + 7 modules
var event_manager = __webpack_require__(10);

// EXTERNAL MODULE: ./packages/sizes-cache/index.js + 3 modules
var sizes_cache = __webpack_require__(35);

// CONCATENATED MODULE: ./packages/scroll-manager/node_modules/@okiba/math/index.js
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
// CONCATENATED MODULE: ./packages/scroll-manager/index.js











var _temp;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function scroll_manager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function scroll_manager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function scroll_manager_createClass(Constructor, protoProps, staticProps) { if (protoProps) scroll_manager_defineProperties(Constructor.prototype, protoProps); if (staticProps) scroll_manager_defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @module ScrollManager
 * @description A class that extends EventEmitter (@okiba/event-emitter). Basically emits `scroll` events in two different ways, when enabled it lerp the scroll position and emits `scroll` events on request animation frame, when disable is like a proxy of native scroll events.
 * @example
 * import ScrollManager from '@okiba/scroll-manager'
 * import {hasTouch} from '@okiba/detect'
 *
 * // Enable lerped scroll if device is not touch
 * hasTouch ? ScrollManager.disable() : ScrollManager.enable()
 * // Listen scroll events
 * ScrollManager.on('scroll', ({y, delta, acceleration, progress}) => console.log(y, delta, acceleration, progress))
 */




/* harmony default export */ var scroll_manager = __webpack_exports__["default"] = (new (_temp = /*#__PURE__*/function (_EventEmitter) {
  _inherits(ScrollManager, _EventEmitter);

  var _super = _createSuper(ScrollManager);

  function ScrollManager() {
    var _this;

    scroll_manager_classCallCheck(this, ScrollManager);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "onRaf", function () {
      if (!_this.isEnabled || _this.lerpY === _this.targetY) return;
      _this.deltaLerpY = _this.lerpY;
      _this.lerpY = lerp(_this.lerpY, _this.targetY, 0.1);
      _this.deltaLerpY -= _this.lerpY;

      if (Math.abs(_this.deltaLerpY) < 0.02) {
        _this.lerpY = _this.targetY;
        _this.deltaLerpY = 0;
      }

      _this.emit('scroll', {
        y: _this.lerpY,
        delta: _this.deltaLerpY,
        acceleration: _this.deltaLerpY / sizes_cache["default"].window.height,
        progress: cap(_this.lerpY / sizes_cache["default"].body.scrollArea, 0, 1)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function () {
      _this.deltaY = (window.scrollY || window.pageYOffset) - _this.targetY;
      _this.targetY += _this.deltaY;

      if (!_this.isEnabled) {
        _this.emit('scroll', {
          y: _this.targetY,
          delta: _this.deltaY,
          acceleration: _this.deltaY / sizes_cache["default"].window.height,
          progress: _this.targetY / sizes_cache["default"].body.scrollArea
        });
      }
    });

    _this.listen();

    _this.trigger();

    return _this;
  }
  /**
   * Disable lerped scroll calculation and remove the raf listener
   */


  scroll_manager_createClass(ScrollManager, [{
    key: "disable",
    value: function disable() {
      if (!this.isEnabled) return;
      this.isEnabled = false;
      event_manager["default"].off('raf', this.onRaf);
    }
    /**
     * Enable lerped scroll calculation and add the raf listener
     */

  }, {
    key: "enable",
    value: function enable() {
      if (this.isEnabled) return;
      this.isEnabled = true;
      event_manager["default"].on('raf', this.onRaf);
    }
    /**
     * Calculate the lerped scroll position and emit a scroll event.
     * The emitted scroll event pass an Object like:
     * ```javascript
     * {
     *  y // Lerped Y
     *  delta // Difference between actual y and the last emitted y
     *  acceleration // The accelleration of the scroll
     *  progress // The global progress of the page
     * }
     * ```
     *
     */

  }, {
    key: "listen",

    /**
     * Adds event listeners
     */
    value: function listen() {
      event_manager["default"].on('scroll', this.onChange);
      event_manager["default"].on('resize', this.onChange);
    }
    /**
     * Removes event listeners
     */

  }, {
    key: "unlisten",
    value: function unlisten() {
      if (this.isEnabled) {
        event_manager["default"].off('raf', this.onRaf);
      }

      event_manager["default"].off('scroll', this.onChange);
      event_manager["default"].off('resize', this.onChange);
    }
    /**
     * Update the scroll based on the page scroll and trigger a `scroll` event
     */

  }, {
    key: "trigger",
    value: function trigger() {
      this.targetY = window.scrollY || window.pageYOffset;
      this.lerpY = this.lerpY ? this.lerpY - 1 : this.targetY - 1;
      this.emit('scroll', {
        y: this.targetY,
        delta: 0,
        acceleration: 0,
        progress: cap(this.targetY / sizes_cache["default"].body.scrollArea, 0, 1)
      });
    }
  }]);

  return ScrollManager;
}(event_emitter), _temp)());

/***/ })
/******/ ]);
});