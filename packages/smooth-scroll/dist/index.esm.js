import { cap } from '@okiba/math';
import ScrollManager from '@okiba/scroll-manager';
import EventManager from '@okiba/event-manager';
import SizesCache from '@okiba/sizes-cache';

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

var SmoothScroll =
/*#__PURE__*/
function () {
  function SmoothScroll(el) {
    var _this = this;

    _classCallCheck(this, SmoothScroll);

    _defineProperty(this, "onRaf", function () {
      if (!_this.isEnabled) return;

      if (_this.targetY === _this.y) {
        EventManager.off('raf', _this.onRaf);
        return;
      }

      _this.y = _this.targetY;
      _this.el.style.transform = "translate3d(0, -".concat(_this.y, "px, 0)");
    });

    _defineProperty(this, "onScroll", function (_ref) {
      var y = _ref.y;
      _this.targetY = cap(y, _this.top, _this.bottom);

      if (_this.targetY !== _this.y) {
        _this.onRaf();

        EventManager.on('raf', _this.onRaf);
        return;
      }
    });

    _defineProperty(this, "onResize", function () {
      _this.bottom = _this.sizes.bottom;
      _this.top = _this.sizes.top - SizesCache.window.height;
    });

    this.el = el;
    this.sizes = SizesCache.get(this.el);
    this.onResize();
    this.listen();
  }

  _createClass(SmoothScroll, [{
    key: "disable",
    value: function disable() {
      if (!this.isEnabled) return;
      this.isEnabled = false;
      this.el.style.transform = '';
    }
  }, {
    key: "enable",
    value: function enable() {
      if (this.isEnabled) return;
      this.isEnabled = true;
      this.el.style.transform = "translate3d(0, -".concat(this.y, "px, 0)");
    }
  }, {
    key: "listen",
    value: function listen() {
      EventManager.on('resize', this.onResize);
      EventManager.on('raf', this.onRaf);
      ScrollManager.on('scroll', this.onScroll);
    }
  }]);

  return SmoothScroll;
}();

export default SmoothScroll;
//# sourceMappingURL=index.esm.js.map
