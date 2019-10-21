import SizesCache from '@okiba/sizes-cache';
import ScrollManager from '@okiba/scroll-manager';
import EventManager from '@okiba/event-manager';

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
      _this.maxY = _this.sizes.height - SizesCache.window.height;
      _this.limitY = _this.sizes.bottom - SizesCache.window.height;
    });

    this.opts = opts || {};
    this.el = el;
    this.content = content;
    this.sizes = SizesCache.get(el);
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
      EventManager.on('resize', this.onResize);
      ScrollManager.on('scroll', this.onScroll);
    }
  }]);

  return StickyContent;
}();

export default StickyContent;
//# sourceMappingURL=index.esm.js.map
