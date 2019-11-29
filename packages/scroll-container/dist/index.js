"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("@okiba/component"));

var _eventManager = _interopRequireDefault(require("@okiba/event-manager"));

var _sizesCache = _interopRequireDefault(require("@okiba/sizes-cache"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ScrollContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollContainer, _Component);

  function ScrollContainer(_ref) {
    var _this;

    var el = _ref.el,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options;

    _classCallCheck(this, ScrollContainer);

    var _options$content = options.content,
        content = _options$content === void 0 ? '.js-scroll-content' : _options$content,
        restOptions = _objectWithoutProperties(options, ["content"]);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollContainer).call(this, {
      el: el,
      options: restOptions,
      ui: {
        content: content
      }
    }));

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      _this.height = _this.ui.content.offsetHeight;

      if (_this.isEnabled) {
        _this.updateBodyHeight();
      }
    });

    _this.onResize();

    _this.listen();

    options.enabled && _this.enable();
    return _this;
  }

  _createClass(ScrollContainer, [{
    key: "disable",
    value: function disable() {
      if (!this.isEnabled) return;
      this.isEnabled = false;
      document.body.style.height = '';

      _sizesCache["default"].onResize();

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
      this.updateBodyHeight();
      Object.assign(this.el.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%'
      });
    }
  }, {
    key: "updateBodyHeight",
    value: function updateBodyHeight() {
      _sizesCache["default"].body.height = this.height;
      _sizesCache["default"].body.scrollArea = this.height - _sizesCache["default"].window.height;
      document.body.style.height = "".concat(this.height, "px");
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
      if (this.isEnabled) {
        this.disable();
      }

      this.unlisten();
    }
  }]);

  return ScrollContainer;
}(_component["default"]);

exports["default"] = ScrollContainer;