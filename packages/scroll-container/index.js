import Component from '@okiba/component'
import EventManager from '@okiba/event-manager'

const ui = {
  content: '.js-scroll-content'
}

export default class ScrollContainer extends Component {
  constructor({el}) {
    super({el, ui})
    this.listen()
    this.onResize()
  }

  disable() {
    if (!this.isEnabled) return
    this.isEnabled = false
    document.body.style.height = ''
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
    document.body.style.height = `${this.height}px`
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
      document.body.style.height = `${this.height}px`
    }
  }

  listen() {
    EventManager.on('resize', this.onResize)
  }
}
