"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dom = require("@okiba/dom");

var _component = _interopRequireDefault(require("@okiba/component"));

var _sizesCache = _interopRequireDefault(require("@okiba/sizes-cache"));

var _eventManager = _interopRequireDefault(require("@okiba/event-manager"));

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

var StickyContent =
/*#__PURE__*/
function (_Component) {
  _inherits(StickyContent, _Component);

  function StickyContent(_ref) {
    var _this;

    var el = _ref.el,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options;

    _classCallCheck(this, StickyContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StickyContent).call(this, {
      el: el,
      options: options
    }));

    _defineProperty(_assertThisInitialized(_this), "update", function (_ref2) {
      var y = _ref2.y;
      if (!_this.isEnabled) return;
      var deltaY = y - _this.sizes.top;

      if (deltaY <= 0) {
        _this.y = 0;
      } else if (!_this.options.overflow && y > _this.limitY) {
        _this.y = _this.maxY;
      } else {
        _this.y = deltaY;
      }

      _this.target.style.transform = "translate3d(0, ".concat(_this.y, "px, 0)");
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      _this.maxY = _this.sizes.height - _sizesCache["default"].window.height;
      _this.limitY = _this.sizes.bottom - _sizesCache["default"].window.height;
    });

    _this.target = (0, _dom.qs)(options.targetSelector || '.js-sticky-target');
    _this.sizes = _sizesCache["default"].get(el);
    _this.isEnabled = true;

    _this.onResize();

    _this.listen();

    return _this;
  }

  _createClass(StickyContent, [{
    key: "enable",
    value: function enable() {
      if (this.isEnabled) return;
      this.isEnabled = true;
      this.target.style.transform = "translate3d(0, ".concat(this.y, "px, 0)");
    }
  }, {
    key: "disable",
    value: function disable() {
      this.isEnabled = false;
      this.target.style.transform = '';
    }
  }, {
    key: "listen",
    value: function listen() {
      _eventManager["default"].on('resize', this.onResize);
    }
  }, {
    key: "unlisten",
    value: function unlisten() {
      _eventManager["default"].off('resize', this.onResize);
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.unlisten();
    }
  }]);

  return StickyContent;
}(_component["default"]);

exports["default"] = StickyContent;