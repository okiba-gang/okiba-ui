/**
 * @module  event-manager
 * @description A class that extends EventEmitter (@okiba/event-emitter) to centralize resize and scroll events and RequestAnimationFrame handler
 *
 * @example
 * // ./main.js
 *
 * import EventManager from '@okiba/event-manager
 *
 * EventManager.on('scroll', function(){ console.log(window.scrollY) })
 * EventManager.on('resize', ({ width, height }) => {
 *    this.el.innerHTML = `width: ${width}px<br>height: ${height}px`
 * })
 * EventManager.on('raf', (timestamp) => {
 *    this.el.innerText = `timestamp: ${timestamp}`
 * })
 */
import EventEmitter from '@okiba/event-emitter'
import { on, off } from '@okiba/dom'
import {hasPassiveEvents} from '@okiba/detect'

const debounceEvent = (a, b = 250, c)=>(...d)=>clearTimeout(c, c = setTimeout(a, b, ...d))

/** Polyfilled custom event ie9+ */
const dispatchScroll = () => {
  if (typeof window.CustomEvent === 'function') {
    window.dispatchEvent(new CustomEvent('scroll'))
    return
  }

  const scroll = document.createEvent('CustomEvent')
  scroll.initCustomEvent('scroll', false, false, null)
  window.dispatchEvent(scroll)
}

export default new class EventManager extends EventEmitter {
  constructor() {
    super()

    this.debouncedResize = debounceEvent(this.onResize)
    this.debouncedResize()
    this.listen()
  }

  onRaf = (timestamp) => {
    this.emit('raf', timestamp)
    this.rafID = requestAnimationFrame(this.onRaf)
  }
  /**
   * Callback of window resize event. Automatically emit a 'resize' event passing the new window width and height and a native scroll event
   */
  onResize = () => {
    this.emit('resize', {
      width: window.innerWidth,
      height: window.innerHeight
    })
    dispatchScroll()
  }
  /**
   * Callback of window scroll event. Automatically emit a 'scroll' event passing the native event
   */
  onScroll = (data) => {
    this.emit('scroll', data)
  }
  /**
   * Adds event listeners on window resize, window scroll and requestAnimationFrame
   */
  listen() {
    this.rafID = requestAnimationFrame(this.onRaf)

    on(window, 'resize', this.debouncedResize, hasPassiveEvents ? {passive: true, capture: false} : false)
    on(window, 'scroll', this.onScroll, hasPassiveEvents ? {passive: true, capture: false} : false)
  }
  /**
   * Removes event listeners on window resize, window scroll and requestAnimationFrame
   */
  unlisten() {
    cancelAnimationFrame(this.rafID)

    off(window, 'resize', this.debouncedResize, hasPassiveEvents ? {passive: true, capture: false} : false)
    off(window, 'scroll', this.onScroll, hasPassiveEvents ? {passive: true, capture: false} : false)
  }
}
