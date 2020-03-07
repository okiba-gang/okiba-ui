export function debounce(callback, latency = 250, timer) {
  return (...args) => clearTimeout(timer, timer = setTimeout(callback, latency, ...args))
}

export function dispatchEvent(eventName) {
  if (typeof window.CustomEvent === 'function') {
    window.dispatchEvent(new CustomEvent(eventName))
    return
  }

  const scroll = document.createEvent('CustomEvent')
  scroll.initCustomEvent(eventName, false, false, null)
  window.dispatchEvent(scroll)
}
