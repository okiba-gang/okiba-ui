var OkibaEventManager = (function () {
  'use strict';

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

  var _temp;
  var index = new (_temp =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits(EventManager, _EventEmitter);

    function EventManager() {
      var _this;

      _classCallCheck(this, EventManager);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(EventManager).call(this));

      _defineProperty(_assertThisInitialized(_this), "onRaf", function (timestamp) {
        _this.emit('raf', timestamp);

        requestAnimationFrame(_this.onRaf);
      });

      _defineProperty(_assertThisInitialized(_this), "onResize", function () {
        _this.emit('resize', {
          width: window.innerWidth,
          height: window.innerHeight
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onScroll", function (data) {
        _this.emit('scroll', data);
      });

      _this.listen();

      return _this;
    }

    _createClass(EventManager, [{
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

  return index;

}());
