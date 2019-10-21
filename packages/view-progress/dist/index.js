var OkibaViewProgress = (function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
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
      _classCallCheck$1(this, EventEmitter);

      this.hs = {};
    }
    /**
     * Sets an event listener for an event type
     * @param  {String} name    Event type
     * @param  {Function} handler Callback to be fired when that event occours
     */


    _createClass$1(EventEmitter, [{
      key: "on",
      value: function on(name, handler) {
        (this.hs[name] || (this.hs[name] = [])).push(handler);
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
        var i = this.hs[name].indexOf(handler);
        if (i < 0) return;
        this.hs[name].splice(i, 1);
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

        for (var i = 0; i < this.hs[name].length; ++i) {
          this.hs[name][i](data);
        }
      }
      /**
       * Removes all event listeners and deletes the handlers object
       */

    }, {
      key: "destroy",
      value: function destroy() {
        var _this = this;

        Object.entries(this.hs).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              name = _ref2[0],
              handlers = _ref2[1];

          return handlers.forEach(function (handler) {
            return _this.off(name, handler);
          });
        });
        delete this.hs;
      }
    }]);

    return EventEmitter;
  }();

  function _classCallCheck$2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$2(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$2(Constructor, staticProps);
    return Constructor;
  }

  function _slicedToArray$1(arr, i) {
    return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1();
  }

  function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit$1(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
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


  var EventEmitter$1 =
  /*#__PURE__*/
  function () {
    function EventEmitter() {
      _classCallCheck$2(this, EventEmitter);

      this.hs = {};
    }
    /**
     * Sets an event listener for an event type
     * @param  {String} name    Event type
     * @param  {Function} handler Callback to be fired when that event occours
     */


    _createClass$2(EventEmitter, [{
      key: "on",
      value: function on(name, handler) {
        (this.hs[name] || (this.hs[name] = [])).push(handler);
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
        var i = this.hs[name].indexOf(handler);
        if (i < 0) return;
        this.hs[name].splice(i, 1);
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

        for (var i = 0; i < this.hs[name].length; ++i) {
          this.hs[name][i](data);
        }
      }
      /**
       * Removes all event listeners and deletes the handlers object
       */

    }, {
      key: "destroy",
      value: function destroy() {
        var _this = this;

        Object.entries(this.hs).forEach(function (_ref) {
          var _ref2 = _slicedToArray$1(_ref, 2),
              name = _ref2[0],
              handlers = _ref2[1];

          return handlers.forEach(function (handler) {
            return _this.off(name, handler);
          });
        });
        delete this.hs;
      }
    }]);

    return EventEmitter;
  }();

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
  var hasPassiveEvents = testHasPassiveEvents.check;

  /**
   * @module arrays
   * @description Array utils for okiba js
   */
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

    if (castable.callee || castable instanceof NodeList || castable instanceof DOMTokenList) {
      return Array.prototype.slice.call(castable);
    }

    return [castable];
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

  function _classCallCheck$3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$3(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$3(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$3(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$3(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf$1(subClass, superClass);
  }

  function _getPrototypeOf$1(o) {
    _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$1(o);
  }

  function _setPrototypeOf$1(o, p) {
    _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf$1(o, p);
  }

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn$1(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized$1(self);
  }

  var _temp;

  var index = new (_temp =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits$1(EventManager, _EventEmitter);

    function EventManager() {
      var _this;

      _classCallCheck$3(this, EventManager);

      _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(EventManager).call(this));

      _defineProperty$1(_assertThisInitialized$1(_this), "onRaf", function (timestamp) {
        _this.emit('raf', timestamp);

        requestAnimationFrame(_this.onRaf);
      });

      _defineProperty$1(_assertThisInitialized$1(_this), "onResize", function () {
        _this.emit('resize', {
          width: window.innerWidth,
          height: window.innerHeight
        });
      });

      _defineProperty$1(_assertThisInitialized$1(_this), "onScroll", function (data) {
        _this.emit('scroll', data);
      });

      _this.listen();

      return _this;
    }

    _createClass$3(EventManager, [{
      key: "listen",
      value: function listen() {
        requestAnimationFrame(this.onRaf);
        on(window, 'resize', this.onResize, hasPassiveEvents ? {
          passive: true,
          capture: false
        } : false);
        on(window, 'scroll', this.onScroll, hasPassiveEvents ? {
          passive: true,
          capture: false
        } : false);
      }
    }]);

    return EventManager;
  }(EventEmitter$1), _temp)();

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

  function _classCallCheck$4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$4(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$4(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$4(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$4(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty$2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var _temp$1;

  var index$1 = new (_temp$1 =
  /*#__PURE__*/
  function () {
    function SizesCache() {
      var _this = this;

      _classCallCheck$4(this, SizesCache);

      _defineProperty$2(this, "onResize", function () {
        _this.window = {
          width: window.innerWidth,
          height: window.innerHeight
        };
        _this.body = {
          width: document.body.offsetWidth,
          height: document.body.offsetHeight
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
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });

      this.map = new Map();
      this.listen();
      this.onResize();
    }

    _createClass$4(SizesCache, [{
      key: "get",
      value: function get(el) {
        if (!this.map.has(el)) {
          this.map.set(el, {});
          this.compute(el);
        }

        return this.map.get(el);
      }
    }, {
      key: "compute",
      value: function compute(el) {
        var sizes = this.map.get(el);

        var _offset = offset(el),
            top = _offset.top,
            left = _offset.left;

        var width = el.clientWidth;
        var height = el.clientHeight;
        sizes.top = top;
        sizes.right = left + width;
        sizes.bottom = top + height;
        sizes.left = left;
        sizes.width = width;
        sizes.height = height;
      }
    }, {
      key: "listen",
      value: function listen() {
        index.on('resize', this.onResize);
      }
    }]);

    return SizesCache;
  }(), _temp$1)();

  function _classCallCheck$5(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$5(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$5(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$5(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$5(Constructor, staticProps);
    return Constructor;
  }

  function _slicedToArray$2(arr, i) {
    return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _nonIterableRest$2();
  }

  function _arrayWithHoles$2(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit$2(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest$2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
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


  var EventEmitter$2 =
  /*#__PURE__*/
  function () {
    function EventEmitter() {
      _classCallCheck$5(this, EventEmitter);

      this.hs = {};
    }
    /**
     * Sets an event listener for an event type
     * @param  {String} name    Event type
     * @param  {Function} handler Callback to be fired when that event occours
     */


    _createClass$5(EventEmitter, [{
      key: "on",
      value: function on(name, handler) {
        (this.hs[name] || (this.hs[name] = [])).push(handler);
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
        var i = this.hs[name].indexOf(handler);
        if (i < 0) return;
        this.hs[name].splice(i, 1);
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

        for (var i = 0; i < this.hs[name].length; ++i) {
          this.hs[name][i](data);
        }
      }
      /**
       * Removes all event listeners and deletes the handlers object
       */

    }, {
      key: "destroy",
      value: function destroy() {
        var _this = this;

        Object.entries(this.hs).forEach(function (_ref) {
          var _ref2 = _slicedToArray$2(_ref, 2),
              name = _ref2[0],
              handlers = _ref2[1];

          return handlers.forEach(function (handler) {
            return _this.off(name, handler);
          });
        });
        delete this.hs;
      }
    }]);

    return EventEmitter;
  }();

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

  function _classCallCheck$6(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$6(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$6(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$6(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$6(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty$3(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits$2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf$2(subClass, superClass);
  }

  function _getPrototypeOf$2(o) {
    _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$2(o);
  }

  function _setPrototypeOf$2(o, p) {
    _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf$2(o, p);
  }

  function _assertThisInitialized$2(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn$2(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized$2(self);
  }

  var _temp$2;

  var index$2 = new (_temp$2 =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits$2(ScrollManager, _EventEmitter);

    function ScrollManager() {
      var _this;

      _classCallCheck$6(this, ScrollManager);

      _this = _possibleConstructorReturn$2(this, _getPrototypeOf$2(ScrollManager).call(this));

      _defineProperty$3(_assertThisInitialized$2(_this), "onRaf", function () {
        if (!_this.isEnabled || _this.lerpY === _this.targetY) return;
        _this.deltaLerpY = _this.lerpY;
        _this.lerpY = lerp(_this.lerpY, _this.targetY, 0.1);
        _this.deltaLerpY -= _this.lerpY;

        if (Math.abs(_this.deltaLerpY) < 0.02) {
          _this.lerpY = _this.targetY;
          _this.deltaLerpY = 0;
        }

        _this.emit('scroll', {
          y: ~~_this.lerpY,
          delta: _this.deltaLerpY,
          acceleration: _this.deltaLerpY / index$1.window.height
        });
      });

      _defineProperty$3(_assertThisInitialized$2(_this), "onChange", function () {
        _this.deltaY = (window.scrollY || window.pageYOffset) - _this.targetY;
        _this.targetY += _this.deltaY;

        if (!_this.isEnabled) {
          _this.emit('scroll', {
            y: _this.targetY,
            delta: _this.deltaY,
            acceleration: _this.deltaY / index$1.window.height
          });
        }
      });

      _this.targetY = _this.lerpY = window.scrollY || window.pageYOffset;

      _this.emit('scroll', {
        y: _this.targetY,
        delta: 0,
        acceleration: 0
      });

      _this.listen();

      return _this;
    } // Puo essere tolto metodo


    _createClass$6(ScrollManager, [{
      key: "disable",
      value: function disable() {
        if (!this.isEnabled) return;
        this.isEnabled = false;
      }
    }, {
      key: "enable",
      value: function enable() {
        if (this.isEnabled) return;
        this.isEnabled = true;
      }
    }, {
      key: "listen",
      value: function listen() {
        index.on('raf', this.onRaf);
        index.on('scroll', this.onChange);
        index.on('resize', this.onChange);
      }
    }]);

    return ScrollManager;
  }(EventEmitter$2), _temp$2)();

  /**
   * @module math
   * @description Collection of math functions
   */
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

  var ViewProgress =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits(ViewProgress, _EventEmitter);

    function ViewProgress(el, opts) {
      var _this;

      _classCallCheck(this, ViewProgress);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ViewProgress).call(this));

      _defineProperty(_assertThisInitialized(_this), "onScroll", function (_ref) {
        var y = _ref.y,
            rest = _objectWithoutProperties(_ref, ["y"]);

        if (!_this.opts.overflow && !_this.isInside) {
          if (y < _this.startY || y > _this.endY) return;
        }

        var progress = map(y, _this.startY, _this.endY, 0, 1);
        var isInside = progress >= 0 && progress <= 1;

        if (isInside !== _this.isInside) {
          if (isInside) {
            _this.emit('enter');
          } else {
            _this.emit('exit');
          }
        }

        _this.isInside = isInside;

        _this.emit('progress', _objectSpread2({
          progress: progress,
          isInside: isInside
        }, rest, {
          y: y
        }));
      });

      _defineProperty(_assertThisInitialized(_this), "onResize", function () {
        var _this$sizes = _this.sizes,
            top = _this$sizes.top,
            height = _this$sizes.height;
        _this.startY = top - index$1.window.height;
        _this.endY = _this.startY + height + index$1.window.height;

        if (_this.endY >= index$1.body.height) {
          _this.endY = _this.startY + height;
        }

        if (_this.startY < 0) {
          _this.startY = 0;
          _this.endY = height;
        }
      });

      _this.opts = opts || {};
      _this.el = el;
      _this.sizes = index$1.get(el);
      _this.isInside = false;

      _this.onResize();

      _this.listen();

      return _this;
    }

    _createClass(ViewProgress, [{
      key: "listen",
      value: function listen() {
        index$2.on('scroll', this.onScroll);
        index.on('resize', this.onResize);
      }
    }]);

    return ViewProgress;
  }(EventEmitter);

  return ViewProgress;

}());
