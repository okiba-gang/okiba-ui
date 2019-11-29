import Component from '@okiba/component'
import EventManager from '@okiba/event-manager'
import SizesCache from '@okiba/sizes-cache'
import { cap } from '@okiba/math'

export default class ScrollElement extends Component {
  constructor({el, options = {}}) {
    const { enabled, ...restOptions } = options
    super({ el, options: restOptions })
    this.sizes = SizesCache.get(this.el)
    enabled && this.enable()
    this.onResize()
    this.listen()
  }

  disable() {
    if (!this.isEnabled) return
    this.isEnabled = false
    this.el.style.transform = ''
  }

  enable() {
    if (this.isEnabled) return
    this.isEnabled = true
  }

  update({ y }) {
    this.targetY = cap(y, this.top, this.bottom)
    if (this.isEnabled && this.targetY !== this.y) {
      EventManager.on('raf', this.onRaf)
      this.hasRafRequest = true
    }
  }

  onRaf = () => {
    this.y = this.targetY
    this.el.style.transform = `translate3d(0, -${this.y}px, 0)`
    this.hasRafRequest = false
    EventManager.off('raf', this.onRaf)
  }

  onResize = () => {
    this.top = this.sizes.top - SizesCache.window.height + (this.options.thresholdTop || 0)
    this.bottom = this.sizes.bottom + (this.options.thresholdBottom || 0)
  }

  listen() {
    EventManager.on('resize', this.onResize)
  }

  unlisten() {
    EventManager.off('resize', this.onResize)

    if (this.hasRafRequest) {
      EventManager.off('raf', this.onRaf)
    }
  }

  onDestroy() {
    this.unlisten()
  }
}
