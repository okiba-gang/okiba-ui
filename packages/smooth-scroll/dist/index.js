"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("@okiba/component"));

var _scrollManager = _interopRequireDefault(require("@okiba/scroll-manager"));

var _scrollContainer = _interopRequireDefault(require("@okiba/scroll-container"));

var _scrollElement = _interopRequireDefault(require("@okiba/scroll-element"));

var _detect = require("@okiba/detect");

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

var SmoothScroll =
/*#__PURE__*/
function (_Component) {
  _inherits(SmoothScroll, _Component);

  function SmoothScroll(_ref) {
    var _this;

    var el = _ref.el,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options;

    _classCallCheck(this, SmoothScroll);

    var _options$elements = options.elements,
        elements = _options$elements === void 0 ? '.js-scroll-element' : _options$elements,
        _options$enabled = options.enabled,
        enabled = _options$enabled === void 0 ? !_detect.hasTouch : _options$enabled,
        restOptions = _objectWithoutProperties(options, ["elements", "enabled"]);

    var components = {
      container: {
        ghost: true,
        type: _scrollContainer["default"],
        options: {
          enabled: enabled
        }
      },
      elements: {
        selector: elements,
        type: _scrollElement["default"],
        options: {
          enabled: enabled
        },
        asArray: true
      }
    };
    _this = _possibleConstructorReturn(this, _getPrototypeOf(SmoothScroll).call(this, {
      el: el,
      options: restOptions,
      components: components
    }));

    _defineProperty(_assertThisInitialized(_this), "onScroll", function (data) {
      _this.components.elements.forEach(function (element) {
        return element.update(data);
      });
    });

    _this.listen();

    enabled ? _scrollManager["default"].enable() : _scrollManager["default"].disable();
    return _this;
  }
  /**
   * Enables component's features
   */


  _createClass(SmoothScroll, [{
    key: "enable",
    value: function enable() {
      _scrollManager["default"].enable();

      this.components.container.enable();
      this.components.elements.forEach(function (element) {
        return element.enable();
      });
    }
    /**
     * Disables component's features
     */

  }, {
    key: "disable",
    value: function disable() {
      _scrollManager["default"].disable();

      this.components.container.disable();
      this.components.elements.forEach(function (element) {
        return element.disable();
      });
    }
    /**
     * Updates inner elements on scroll
     * @param {Object} data Scroll event's data
     */

  }, {
    key: "listen",

    /**
     * Adds scroll event listener to ScrollManager
     */
    value: function listen() {
      _scrollManager["default"].on('scroll', this.onScroll);
    }
    /**
     * Removes scroll event listener from ScrollManager
     */

  }, {
    key: "unlisten",
    value: function unlisten() {
      _scrollManager["default"].off('scroll', this.onScroll);
    }
    /**
     * Removes all event listeners on destroy from ScrollManager
     */

  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.unlisten();
    }
  }]);

  return SmoothScroll;
}(_component["default"]);

exports["default"] = SmoothScroll;