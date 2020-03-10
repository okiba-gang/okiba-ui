/**
 * Callback debounce helper
 * @param {Function} callback The callback to be debounced
 * @param {Number} latency The debounce delay time
 * @param {Number} timer The timer id
 */
export function debounce(callback, latency = 250, timer) {
  return (...args) => clearTimeout(timer, timer = setTimeout(callback, latency, ...args))
}

/**
 * Custom event factory helper
 * @param {String} type The custom event type
 */
export function createCustomEvent(type) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(type)
  }

  const event = document.createEvent('CustomEvent')
  event.initCustomEvent(type, false, false, null)

  return event
}

/**
 * Custom event dispatch helper
 * @param {String} type The event type
 */
export function dispatchCustomEvent(type) {
  const event = createCustomEvent(type)
  window.dispatchEvent(event)
}
