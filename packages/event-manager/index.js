import EventEmitter from '@okiba/event-emitter'
import {hasPassiveEvents} from '@okiba/detect'
import { on } from '@okiba/dom'

export default new class EventManager extends EventEmitter {
  constructor() {
    super()
    this.listen()
  }

  onRaf = (timestamp) => {
    this.emit('raf', timestamp)
    requestAnimationFrame(this.onRaf)
  }

  onResize = () => {
    this.emit('resize', {
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  onScroll = (data) => {
    this.emit('scroll', data)
  }

  listen() {
    requestAnimationFrame(this.onRaf)

    on(window, 'resize', this.onResize, hasPassiveEvents ? {passive: true, capture: false} : false)
    on(window, 'scroll', this.onScroll, hasPassiveEvents ? {passive: true, capture: false} : false)
  }
}
