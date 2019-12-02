"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _eventEmitter = _interopRequireDefault(require("@okiba/event-emitter"));

var _eventManager = _interopRequireDefault(require("@okiba/event-manager"));

var _sizesCache = _interopRequireDefault(require("@okiba/sizes-cache"));

var _math = require("@okiba/math");

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

var _default = new (_temp =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(ScrollManager, _EventEmitter);

  function ScrollManager() {
    var _this;

    _classCallCheck(this, ScrollManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollManager).call(this));

    _defineProperty(_assertThisInitialized(_this), "onRaf", function () {
      if (!_this.isEnabled || _this.lerpY === _this.targetY) return;
      _this.deltaLerpY = _this.lerpY;
      _this.lerpY = (0, _math.lerp)(_this.lerpY, _this.targetY, 0.1);
      _this.deltaLerpY -= _this.lerpY;

      if (Math.abs(_this.deltaLerpY) < 0.02) {
        _this.lerpY = _this.targetY;
        _this.deltaLerpY = 0;
      }

      _this.emit('scroll', {
        y: _this.lerpY,
        delta: _this.deltaLerpY,
        acceleration: _this.deltaLerpY / _sizesCache["default"].window.height,
        progress: (0, _math.cap)(_this.lerpY / _sizesCache["default"].body.scrollArea, 0, 1)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function () {
      _this.deltaY = (window.scrollY || window.pageYOffset) - _this.targetY;
      _this.targetY += _this.deltaY;

      if (!_this.isEnabled) {
        _this.emit('scroll', {
          y: _this.targetY,
          delta: _this.deltaY,
          acceleration: _this.deltaY / _sizesCache["default"].window.height,
          progress: _this.targetY / _sizesCache["default"].body.scrollArea
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


  _createClass(ScrollManager, [{
    key: "disable",
    value: function disable() {
      if (!this.isEnabled) return;
      this.isEnabled = false;

      _eventManager["default"].off('raf', this.onRaf);
    }
    /**
     * Enable lerped scroll calculation and add the raf listener
     */

  }, {
    key: "enable",
    value: function enable() {
      if (this.isEnabled) return;
      this.isEnabled = true;

      _eventManager["default"].on('raf', this.onRaf);
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
      _eventManager["default"].on('scroll', this.onChange);

      _eventManager["default"].on('resize', this.onChange);
    }
    /**
     * Removes event listeners
     */

  }, {
    key: "unlisten",
    value: function unlisten() {
      if (this.isEnabled) {
        _eventManager["default"].off('raf', this.onRaf);
      }

      _eventManager["default"].off('scroll', this.onChange);

      _eventManager["default"].off('resize', this.onChange);
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
        progress: (0, _math.cap)(this.targetY / _sizesCache["default"].body.scrollArea, 0, 1)
      });
    }
  }]);

  return ScrollManager;
}(_eventEmitter["default"]), _temp)();

exports["default"] = _default;