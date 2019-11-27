import EventEmitter from '@okiba/event-emitter'
import { on, off } from '@okiba/dom'
import {hasPassiveEvents} from '@okiba/detect'

const debounceEvent = (a, b = 250, c)=>(...d)=>clearTimeout(c, c = setTimeout(a, b, ...d))

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

  onResize = () => {
    this.emit('resize', {
      width: window.innerWidth,
      height: window.innerHeight
    })
    this.emit('scroll', window.scrollY)
  }

  onScroll = (data) => {
    this.emit('scroll', data)
  }

  listen() {
    this.rafID = requestAnimationFrame(this.onRaf)

    on(window, 'resize', this.debouncedResize, hasPassiveEvents ? {passive: true, capture: false} : false)
    on(window, 'scroll', this.onScroll, hasPassiveEvents ? {passive: true, capture: false} : false)
  }

  unlisten() {
    cancelAnimationFrame(this.rafID)

    off(window, 'resize', this.debouncedResize, hasPassiveEvents ? {passive: true, capture: false} : false)
    off(window, 'scroll', this.onScroll, hasPassiveEvents ? {passive: true, capture: false} : false)
  }
}
