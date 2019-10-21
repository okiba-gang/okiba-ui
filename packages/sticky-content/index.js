import SizesCache from './sizes-cache'
import ScrollManager from './scroll-manager'
import EventManager from './event-manager'

export default class StickyContent {
  constructor(el, content, opts) {
    this.opts = opts || {}
    this.el = el
    this.content = content
    this.sizes = SizesCache.get(el)
    this.onResize()
    this.listen()
  }

  enable() {
    if (this.isEnabled) return
    this.isEnabled = true
    this.content.style.transform = `translate3d(0, ${this.y}px, 0)`
  }

  disable() {
    if (!this.isEnabled) return
    this.isEnabled = false
    this.content.style.transform = ''
  }

  onScroll = ({y}) => {
    if (!this.isEnabled) return

    const deltaY = y - this.sizes.top

    if (deltaY <= 0) {
      this.y = 0
    } else if (!this.opts.overflow && y > this.limitY)  {
      this.y = this.maxY
    } else {
      this.y = deltaY
    }

    this.content.style.transform = `translate3d(0, ${this.y}px, 0)`
  }

  onResize = () => {
    this.maxY = this.sizes.height - SizesCache.window.height
    this.limitY = this.sizes.bottom - SizesCache.window.height
  }

  listen() {
    EventManager.on('resize', this.onResize)
    ScrollManager.on('scroll', this.onScroll)
  }
}
