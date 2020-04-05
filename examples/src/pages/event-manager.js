import { qs } from '@okiba/core/dom'
import Component from '@okiba/core/component'
import EventManager from '@okiba/ui/event-manager'
import SizesCache from '@okiba/ui/sizes-cache'

class ResizeComponent extends Component {
  constructor({ el }) {
    super({ el })
    EventManager.on('resize', this.onResize)
    this.update()
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
    this.update()
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
