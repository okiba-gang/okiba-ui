import { qs } from '@okiba/dom'
import Component from '@okiba/component'
import EventManager from '../../../packages/event-manager'
import SizesCache from '../../../packages/sizes-cache'

class ResizeComponent extends Component {
  constructor({ el }) {
    super({ el })
    EventManager.on('resize', this.onResize)
    EventManager.emit('resize')
  }

  update() {
    const { width, height } = SizesCache.window
    this.el.innerHTML = `width: ${width}px<br>height: ${height}px`
  }

  onResize = () => this.update()
}

class ScrollComponent extends Component {
  constructor({ el }) {
    super({ el })
    EventManager.on('scroll', this.onScroll)
    EventManager.emit('scroll')
  }

  update() {
    this.el.innerText = `y: ${window.scrollY}`
  }

  onScroll = () => this.update()
}

class RafComponent extends Component {
  constructor({ el }) {
    super({ el })
    EventManager.on('raf', this.onRaf)
  }

  onRaf = (timestamp) => {
    this.el.innerText = `timestamp: ${timestamp}`
  }
}

const app = new Component({
  el: qs('#app'),
  components: [
    {
      selector: '#resize',
      type: ResizeComponent
    },
    {
      selector: '#scroll',
      type: ScrollComponent
    },
    {
      selector: '#raf',
      type: RafComponent
    }
  ]
})
