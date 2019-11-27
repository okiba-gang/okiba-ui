import EventedComponent from '@okiba/evented-component'
import SizesCache from './sizes-cache'
import ScrollManager from './scroll-manager'
import EventManager from './event-manager'
import {map} from '@okiba/math'

export default class ViewProgress extends EventedComponent {
  constructor({el, options = {}}) {
    super({el, options})

    this.sizes = SizesCache.get(el)
    this.isInside = false
    this.onResize()
    this.listen()
  }

  onScroll = ({y, ...rest}) => {
    if (!this.options.overflow && !this.isInside) {
      if (y < this.startY || y > this.endY) {
        return
      }
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
    const maxY = Math.max(0, SizesCache.body.height - SizesCache.window.height)
    this.startY = top - SizesCache.window.height
    this.endY = this.startY + height + SizesCache.window.height

    if (this.endY >= maxY) {
      this.endY = maxY
    }
  }

  listen() {
    ScrollManager.on('scroll', this.onScroll)
    EventManager.on('resize', this.onResize)
  }

  unlisten() {
    ScrollManager.off('scroll', this.onScroll)
    EventManager.off('resize', this.onResize)
  }

  onDestroy() {
    this.unlisten()
  }
}
