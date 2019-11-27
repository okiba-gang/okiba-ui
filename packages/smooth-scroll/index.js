import Component from '@okiba/component'
import ScrollManager from '@okiba/scroll-manager'
import EventManager from '@okiba/event-manager'
import SizesCache from '@okiba/sizes-cache'
import {cap} from '@okiba/math'
import {hasTouch} from '@okiba/detect'

export default class SmoothScroll extends Component {
  constructor({el, options}) {
    super({el, options})
    this.sizes = SizesCache.get(this.el)
    hasTouch ? this.disable() : this.enable()
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
    this.el.style.transform = `translate3d(0, -${this.y}px, 0)`
  }

  onRaf = () => {
    if (!this.isEnabled) return
    if (this.targetY === this.y) {
      EventManager.off('raf', this.onRaf)
      return
    }

    this.y = this.targetY
    this.el.style.transform = `translate3d(0, -${this.y}px, 0)`
  }

  onScroll = ({y}) => {
    this.targetY = cap(y, this.top, this.bottom)
    if (this.targetY !== this.y) {
      this.onRaf()
      EventManager.on('raf', this.onRaf)
      return
    }
  }

  onResize = () => {
    this.top = this.sizes.top - SizesCache.window.height + (this.options.thresholdTop || 0)
    this.bottom = this.sizes.bottom + (this.options.thresholdBottom || 0)
  }

  listen() {
    EventManager.on('resize', this.onResize)
    EventManager.on('raf', this.onRaf)
    ScrollManager.on('scroll', this.onScroll)
  }

  unlisten() {
    EventManager.off('resize', this.onResize)
    EventManager.off('raf', this.onRaf)
    ScrollManager.off('scroll', this.onScroll)
  }

  onDestroy() {
    this.unlisten()
  }
}
