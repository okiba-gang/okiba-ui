import { qs } from '@okiba/dom'
import Component from '@okiba/component'
import EventManager from '@okiba/event-manager'

class ResizeComponent extends Component {
  constructor({ el }) {
    super({ el })
    EventManager.on('resize', this.onResize)
  }

  onResize = ({ width, height }) => {
    this.el.innerHTML = `width: ${width}px<br>height: ${height}px`
  }
}

class ScrollComponent extends Component {
  constructor({ el }) {
    super({ el })
    EventManager.on('scroll', this.onScroll)
  }

  onScroll = () => {
    this.el.innerText = `y: ${window.scrollY}`
  }
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
