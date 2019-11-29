import Component from '@okiba/component'
import EventManager from '@okiba/event-manager'
import SizesCache from '@okiba/sizes-cache'

export default class ScrollContainer extends Component {
  constructor({el, options = {}}) {
    const { content = '.js-scroll-content', ...restOptions } = options
    super({el, options: restOptions, ui: { content }})
    this.onResize()
    this.listen()
    options.enabled && this.enable()
  }

  disable() {
    if (!this.isEnabled) return
    this.isEnabled = false
    document.body.style.height = ''
    SizesCache.onResize()
    Object.assign(this.el.style, {
      position: '',
      top: '',
      left: '',
      width: ''
    })
  }

  enable() {
    if (this.isEnabled) return
    this.isEnabled = true
    this.updateBodyHeight()
    Object.assign(this.el.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%'
    })
  }

  onResize = () => {
    this.height = this.ui.content.offsetHeight
    if (this.isEnabled) {
      this.updateBodyHeight()
    }
  }

  updateBodyHeight() {
    SizesCache.body.height = this.height
    SizesCache.body.scrollArea = this.height - SizesCache.window.height
    document.body.style.height = `${this.height}px`
  }

  listen() {
    EventManager.on('resize', this.onResize)
  }

  unlisten() {
    EventManager.off('resize', this.onResize)
  }

  onDestroy() {
    if (this.isEnabled) {
      this.disable()
    }

    this.unlisten()
  }
}
