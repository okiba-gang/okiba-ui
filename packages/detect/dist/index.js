"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasTouch = exports.hasPassiveEvents = void 0;

/**
 * @module  detect
 * @description Utilities to check some browser features
 */
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
/**
 * Check if browser supports passive events
 *
 * @example
 * import {hasPassiveEvents} from '@okiba/detect'
 *
 * console.log(hasPassiveEvents) // true
 *
 * @return {Boolean} true if browser supports passive events
 */

var hasPassiveEvents = testHasPassiveEvents.check;
/**
 * Check if browser has touch support
 *
 * @example
 * import {hasTouch} from '@okiba/detect'
 *
 * console.log(hasTouch) // true
 *
 * @return {Boolean} true if browser has touch support
 */

exports.hasPassiveEvents = hasPassiveEvents;
var hasTouch = testIsTouch.check;
exports.hasTouch = hasTouch;