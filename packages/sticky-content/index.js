import Component from '@okiba/component'
import SizesCache from '@okiba/sizes-cache'
import ScrollManager from '@okiba/scroll-manager'
import EventManager from '@okiba/event-manager'

export default class StickyContent extends Component {
  constructor({el, content, options}) {
    super({el, options})
    this.content = content
    this.sizes = SizesCache.get(el)
    this.isEnabled = true
    this.onResize()
    this.listen()
  }

  enable() {
    if (this.isEnabled) return
    this.isEnabled = true
    this.content.style.transform = `translate3d(0, ${this.y}px, 0)`
  }

  disable() {
    this.isEnabled = false
    this.content.style.transform = ''
  }

  onScroll = ({y}) => {
    if (!this.isEnabled) return

    const deltaY = y - this.sizes.top

    if (deltaY <= 0) {
      this.y = 0
    } else if (!this.options.overflow && y > this.limitY)  {
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

  unlisten() {
    EventManager.off('resize', this.onResize)
    ScrollManager.off('scroll', this.onScroll)
  }

  onDestroy() {
    this.unlisten()
  }
}
