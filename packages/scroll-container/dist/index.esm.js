import Component from '@okiba/component';
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

var ui = {
  content: '.js-scroll-content'
};

var ScrollContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollContainer, _Component);

  function ScrollContainer(_ref) {
    var _this;

    var el = _ref.el;

    _classCallCheck(this, ScrollContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollContainer).call(this, {
      el: el,
      ui: ui
    }));

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      _this.height = _this.ui.content.offsetHeight;

      if (_this.isEnabled) {
        document.body.style.height = "".concat(_this.height, "px");
      }
    });

    _this.listen();

    _this.onResize();

    return _this;
  }

  _createClass(ScrollContainer, [{
    key: "disable",
    value: function disable() {
      if (!this.isEnabled) return;
      this.isEnabled = false;
      document.body.style.height = '';
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
      document.body.style.height = "".concat(this.height, "px");
      Object.assign(this.el.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%'
      });
    }
  }, {
    key: "listen",
    value: function listen() {
      EventManager.on('resize', this.onResize);
    }
  }]);

  return ScrollContainer;
}(Component);

export default ScrollContainer;
//# sourceMappingURL=index.esm.js.map
