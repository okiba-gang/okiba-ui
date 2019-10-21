import EventEmitter from '@okiba/event-emitter';
import EventManager from '@okiba/event-manager';
import SizesCache from '@okiba/sizes-cache';
import { lerp } from '@okiba/math';

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

var _temp;
var index = new (_temp =
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
      _this.lerpY = lerp(_this.lerpY, _this.targetY, 0.1);
      _this.deltaLerpY -= _this.lerpY;

      if (Math.abs(_this.deltaLerpY) < 0.02) {
        _this.lerpY = _this.targetY;
        _this.deltaLerpY = 0;
      }

      _this.emit('scroll', {
        y: ~~_this.lerpY,
        delta: _this.deltaLerpY,
        acceleration: _this.deltaLerpY / SizesCache.window.height
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function () {
      _this.deltaY = (window.scrollY || window.pageYOffset) - _this.targetY;
      _this.targetY += _this.deltaY;

      if (!_this.isEnabled) {
        _this.emit('scroll', {
          y: _this.targetY,
          delta: _this.deltaY,
          acceleration: _this.deltaY / SizesCache.window.height
        });
      }
    });

    _this.targetY = _this.lerpY = window.scrollY || window.pageYOffset;

    _this.emit('scroll', {
      y: _this.targetY,
      delta: 0,
      acceleration: 0
    });

    _this.listen();

    return _this;
  } // Puo essere tolto metodo


  _createClass(ScrollManager, [{
    key: "disable",
    value: function disable() {
      if (!this.isEnabled) return;
      this.isEnabled = false;
    }
  }, {
    key: "enable",
    value: function enable() {
      if (this.isEnabled) return;
      this.isEnabled = true;
    }
  }, {
    key: "listen",
    value: function listen() {
      EventManager.on('raf', this.onRaf);
      EventManager.on('scroll', this.onChange);
      EventManager.on('resize', this.onChange);
    }
  }]);

  return ScrollManager;
}(EventEmitter), _temp)();

export default index;
//# sourceMappingURL=index.esm.js.map
