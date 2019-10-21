import EventEmitter from '@okiba/event-emitter';
import { hasPassiveEvents } from '@okiba/detect';
import { on } from '@okiba/dom';

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
  _inherits(EventManager, _EventEmitter);

  function EventManager() {
    var _this;

    _classCallCheck(this, EventManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventManager).call(this));

    _defineProperty(_assertThisInitialized(_this), "onRaf", function (timestamp) {
      _this.emit('raf', timestamp);

      requestAnimationFrame(_this.onRaf);
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      _this.emit('resize', {
        width: window.innerWidth,
        height: window.innerHeight
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function (data) {
      _this.emit('scroll', data);
    });

    _this.listen();

    return _this;
  }

  _createClass(EventManager, [{
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

export default index;
//# sourceMappingURL=index.esm.js.map
