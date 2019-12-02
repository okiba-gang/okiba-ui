"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _eventEmitter = _interopRequireDefault(require("@okiba/event-emitter"));

var _dom = require("@okiba/dom");

var _detect = require("@okiba/detect");

var _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var debounceEvent = function debounceEvent(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var c = arguments.length > 2 ? arguments[2] : undefined;
  return function () {
    for (var _len = arguments.length, d = new Array(_len), _key = 0; _key < _len; _key++) {
      d[_key] = arguments[_key];
    }

    return clearTimeout(c, c = setTimeout.apply(void 0, [a, b].concat(d)));
  };
};
/** Polyfilled custom event ie9+ */


var dispatchScroll = function dispatchScroll() {
  if (typeof window.CustomEvent === 'function') {
    window.dispatchEvent(new CustomEvent('scroll'));
    return;
  }

  var scroll = document.createEvent('CustomEvent');
  scroll.initCustomEvent('scroll', false, false, null);
  window.dispatchEvent(scroll);
};

var _default = new (_temp =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(EventManager, _EventEmitter);

  function EventManager() {
    var _this;

    _classCallCheck(this, EventManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventManager).call(this));

    _defineProperty(_assertThisInitialized(_this), "onRaf", function (timestamp) {
      _this.emit('raf', timestamp);

      _this.rafID = requestAnimationFrame(_this.onRaf);
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      _this.emit('resize', {
        width: window.innerWidth,
        height: window.innerHeight
      });

      dispatchScroll();
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function (data) {
      _this.emit('scroll', data);
    });

    _this.debouncedResize = debounceEvent(_this.onResize);

    _this.debouncedResize();

    _this.listen();

    return _this;
  }

  _createClass(EventManager, [{
    key: "listen",

    /**
     * Adds event listeners on window resize, window scroll and requestAnimationFrame
     */
    value: function listen() {
      this.rafID = requestAnimationFrame(this.onRaf);
      (0, _dom.on)(window, 'resize', this.debouncedResize, _detect.hasPassiveEvents ? {
        passive: true,
        capture: false
      } : false);
      (0, _dom.on)(window, 'scroll', this.onScroll, _detect.hasPassiveEvents ? {
        passive: true,
        capture: false
      } : false);
    }
    /**
     * Removes event listeners on window resize, window scroll and requestAnimationFrame
     */

  }, {
    key: "unlisten",
    value: function unlisten() {
      cancelAnimationFrame(this.rafID);
      (0, _dom.off)(window, 'resize', this.debouncedResize, _detect.hasPassiveEvents ? {
        passive: true,
        capture: false
      } : false);
      (0, _dom.off)(window, 'scroll', this.onScroll, _detect.hasPassiveEvents ? {
        passive: true,
        capture: false
      } : false);
    }
  }]);

  return EventManager;
}(_eventEmitter["default"]), _temp)();

exports["default"] = _default;