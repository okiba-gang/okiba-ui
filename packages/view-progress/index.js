import EventedComponent from '@okiba/evented-component'
import SizesCache from '@okiba/sizes-cache'
import EventManager from '@okiba/event-manager'
import {map} from '@okiba/math'

export default class ViewProgress extends EventedComponent {
  constructor({el, options = {}}) {
    super({el, options})

    this.sizes = SizesCache.get(el)
    this.isInside = false
    this.onResize()
    this.listen()
  }

  update = ({y, ...rest}) => {
    const adjustedY = Math.min(y, SizesCache.body.scrollArea);
    if (!this.options.overflow && !this.isInside) {
      if (adjustedY < this.startY || adjustedY > this.endY) {
        return
      }
    }

    const progress = map(adjustedY, this.startY, this.endY, 0, 1)
    const isInside = progress >= 0 && progress <= 1
    if (isInside !== this.isInside) {
      if (isInside) {
        this.emit('enter')
      } else {
        this.emit('exit')
      }
    }

    this.isInside = isInside
    this.emit('progress', {...rest, progress, isInside, adjustedY})
  }

  onResize = () => {
    const {top, height} = this.sizes
    this.startY = top - SizesCache.window.height
    this.endY = Math.min(SizesCache.body.scrollArea, this.startY + height + SizesCache.window.height)
  }

  listen() {
    EventManager.on('resize', this.onResize)
  }

  unlisten() {
    EventManager.off('resize', this.onResize)
  }

  onDestroy() {
    this.unlisten()
  }
}
