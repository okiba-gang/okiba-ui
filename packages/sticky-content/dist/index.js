var OkibaStickyContent = (function () {
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

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var _temp;

  var index = new (_temp =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits(EventManager, _EventEmitter);

    function EventManager() {
      var _this;

      _classCallCheck$2(this, EventManager);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(EventManager).call(this));

      _defineProperty$1(_assertThisInitialized(_this), "onRaf", function (timestamp) {
        _this.emit('raf', timestamp);

        requestAnimationFrame(_this.onRaf);
      });

      _defineProperty$1(_assertThisInitialized(_this), "onResize", function () {
        _this.emit('resize', {
          width: window.innerWidth,
          height: window.innerHeight
        });
      });

      _defineProperty$1(_assertThisInitialized(_this), "onScroll", function (data) {
        _this.emit('scroll', data);
      });

      _this.listen();

      return _this;
    }

    _createClass$2(EventManager, [{
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
  }(EventEmitter), _temp)();

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

      _classCallCheck$3(this, SizesCache);

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

    _createClass$3(SizesCache, [{
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
      _classCallCheck$4(this, EventEmitter);

      this.hs = {};
    }
    /**
     * Sets an event listener for an event type
     * @param  {String} name    Event type
     * @param  {Function} handler Callback to be fired when that event occours
     */


    _createClass$4(EventEmitter, [{
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

  var _temp$2;

  var index$2 = new (_temp$2 =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits$1(ScrollManager, _EventEmitter);

    function ScrollManager() {
      var _this;

      _classCallCheck$5(this, ScrollManager);

      _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(ScrollManager).call(this));

      _defineProperty$3(_assertThisInitialized$1(_this), "onRaf", function () {
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

      _defineProperty$3(_assertThisInitialized$1(_this), "onChange", function () {
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


    _createClass$5(ScrollManager, [{
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
  }(EventEmitter$1), _temp$2)();

  var StickyContent =
  /*#__PURE__*/
  function () {
    function StickyContent(el, content, opts) {
      var _this = this;

      _classCallCheck(this, StickyContent);

      _defineProperty(this, "onScroll", function (_ref) {
        var y = _ref.y;
        if (!_this.isEnabled) return;
        var deltaY = y - _this.sizes.top;

        if (deltaY <= 0) {
          _this.y = 0;
        } else if (!_this.opts.overflow && y > _this.limitY) {
          _this.y = _this.maxY;
        } else {
          _this.y = deltaY;
        }

        _this.content.style.transform = "translate3d(0, ".concat(_this.y, "px, 0)");
      });

      _defineProperty(this, "onResize", function () {
        _this.maxY = _this.sizes.height - index$1.window.height;
        _this.limitY = _this.sizes.bottom - index$1.window.height;
      });

      this.opts = opts || {};
      this.el = el;
      this.content = content;
      this.sizes = index$1.get(el);
      this.onResize();
      this.listen();
    }

    _createClass(StickyContent, [{
      key: "enable",
      value: function enable() {
        if (this.isEnabled) return;
        this.isEnabled = true;
        this.content.style.transform = "translate3d(0, ".concat(this.y, "px, 0)");
      }
    }, {
      key: "disable",
      value: function disable() {
        if (!this.isEnabled) return;
        this.isEnabled = false;
        this.content.style.transform = '';
      }
    }, {
      key: "listen",
      value: function listen() {
        index.on('resize', this.onResize);
        index$2.on('scroll', this.onScroll);
      }
    }]);

    return StickyContent;
  }();

  return StickyContent;

}());
