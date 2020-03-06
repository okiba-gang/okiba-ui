export function debounce(callback, latency = 250, timer) {
  return (...args) => clearTimeout(timer, timer = setTimeout(callback, latency, ...args))
}
