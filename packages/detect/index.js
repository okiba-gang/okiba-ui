let _hasPassiveEvents
const testHasPassiveEvents = {}
Object.defineProperties(testHasPassiveEvents, {
  check: {
    get() {
      if (_hasPassiveEvents !== void 0) {
        return _hasPassiveEvents
      }

      function noop() {}

      const options = Object.defineProperty({}, 'passive', {
        get() {
          _hasPassiveEvents = true
        }
      })

      window.addEventListener('_', noop, options)
      window.removeEventListener('_', noop, options)
      return _hasPassiveEvents
    }
  }
})

const testIsTouch = {}
Object.defineProperties(testIsTouch, {
  check: {
    get() {
      return 'ontouchstart' in window
    }
  }
})


export const hasPassiveEvents = testHasPassiveEvents.check
export const hasTouch = testIsTouch.check
