var _hasPassiveEvents;

var testHasPassiveEvents = {};
Object.defineProperties(testHasPassiveEvents, {
  check: {
    get: function get() {
      if (_hasPassiveEvents !== void 0) {
        return _hasPassiveEvents;
      }

      function noop() {}

      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          _hasPassiveEvents = true;
        }
      });
      window.addEventListener('_', noop, options);
      window.removeEventListener('_', noop, options);
      return _hasPassiveEvents;
    }
  }
});
var testIsTouch = {};
Object.defineProperties(testIsTouch, {
  check: {
    get: function get() {
      return 'ontouchstart' in window;
    }
  }
});
var hasPassiveEvents = testHasPassiveEvents.check;
var isTouch = testIsTouch.check;

export { hasPassiveEvents, isTouch };
//# sourceMappingURL=index.esm.js.map
