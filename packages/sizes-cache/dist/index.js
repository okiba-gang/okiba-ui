"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _eventManager = _interopRequireDefault(require("@okiba/event-manager"));

var _dom = require("@okiba/dom");

var _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = new (_temp =
/*#__PURE__*/
function () {
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

    _defineProperty(this, "reset", function () {
      _this.map.clear();
    });

    this.map = new Map();
    this.onResize();
    this.listen();
  }

  _createClass(SizesCache, [{
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

      var _offset = (0, _dom.offset)(el),
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
  }]);

  return SizesCache;
}(), _temp)();

exports["default"] = _default;