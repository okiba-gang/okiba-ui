import EventEmitter from '@okiba/event-emitter'
import SizesCache from '@okiba/sizes-cache'
import ScrollManager from '@okiba/scroll-manager'
import EventManager from '@okiba/event-manager'
import {map} from '@okiba/math'

export default class ViewProgress extends EventEmitter {
  constructor(el, opts) {
    super()
    this.opts = opts || {}
    this.el = el
    this.sizes = SizesCache.get(el)
    this.isInside = false
    this.onResize()
    this.listen()
  }

  onScroll = ({y, ...rest}) => {
    if (!this.opts.overflow && !this.isInside) {
      if (y < this.startY || y > this.endY) return
    }

    const progress = map(y, this.startY, this.endY, 0, 1)
    const isInside = progress >= 0 && progress <= 1

    if (isInside !== this.isInside) {
      if (isInside) {
        this.emit('enter')
      } else {
        this.emit('exit')
      }
    }

    this.isInside = isInside
    this.emit('progress', {progress, isInside, ...rest, y})
  }

  onResize = () => {
    const {top, height} = this.sizes

    this.startY = top - SizesCache.window.height
    this.endY = this.startY + height + SizesCache.window.height

    if (this.endY >= SizesCache.body.height) {
      this.endY = this.startY + height
    }

    if (this.startY < 0) {
      this.startY = 0
      this.endY = height
    }
  }

  listen() {
    ScrollManager.on('scroll', this.onScroll)
    EventManager.on('resize', this.onResize)
  }
}
