var OkibaScrollContainer = (function () {
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

    if (castable.callee || castable instanceof NodeList || castable instanceof DOMTokenList) {
      return Array.prototype.slice.call(castable);
    }

    return [castable];
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

  function bindUi(ui, el) {
    return Object.keys(ui).reduce(function (hash, key) {
      var els = arrayOrOne(qsa(ui[key].selector || ui[key], el));

      if (els) {
        hash[key] = els;
      } else if (!ui[key].optional) {
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
          optional = _components$key.optional;

      if (typeof selector !== 'string' || !type) {
        throw new Error("[!!] [Component] Invalid component configuration for key: ".concat(key));
      }

      var els = arrayOrOne(qsa(selector, el));

      if (els) {
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
      _classCallCheck$1(this, Component);

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


    _createClass$1(Component, [{
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


  function castArray$1(castable) {
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
    var elements = castArray$1(source);
    var types = castArray$1(type);
    var handlers = castArray$1(handler);

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
  }(EventEmitter), _temp)();

  var ui = {
    content: '.js-scroll-content'
  };

  var ScrollContainer =
  /*#__PURE__*/
  function (_Component) {
    _inherits(ScrollContainer, _Component);

    function ScrollContainer(_ref) {
      var _this;

      var el = _ref.el;

      _classCallCheck(this, ScrollContainer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollContainer).call(this, {
        el: el,
        ui: ui
      }));

      _defineProperty(_assertThisInitialized(_this), "onResize", function () {
        _this.height = _this.ui.content.offsetHeight;

        if (_this.isEnabled) {
          document.body.style.height = "".concat(_this.height, "px");
        }
      });

      _this.listen();

      _this.onResize();

      return _this;
    }

    _createClass(ScrollContainer, [{
      key: "disable",
      value: function disable() {
        if (!this.isEnabled) return;
        this.isEnabled = false;
        document.body.style.height = '';
        Object.assign(this.el.style, {
          position: '',
          top: '',
          left: '',
          width: ''
        });
      }
    }, {
      key: "enable",
      value: function enable() {
        if (this.isEnabled) return;
        this.isEnabled = true;
        document.body.style.height = "".concat(this.height, "px");
        Object.assign(this.el.style, {
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%'
        });
      }
    }, {
      key: "listen",
      value: function listen() {
        index.on('resize', this.onResize);
      }
    }]);

    return ScrollContainer;
  }(Component);

  return ScrollContainer;

}());
