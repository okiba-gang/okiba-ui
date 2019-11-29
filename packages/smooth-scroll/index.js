import Component from '@okiba/component'
import ScrollManager from '@okiba/scroll-manager'
import ScrollContainer from '@okiba/scroll-container'
import ScrollElement from '@okiba/scroll-element'
import { hasTouch } from '@okiba/detect'

export default class SmoothScroll extends Component {
  constructor({el, options = {}}) {
    const {
      container = '.js-scroll-container',
      content = '.js-scroll-content',
      elements = '.js-scroll-element',
      enabled = !hasTouch,
      ...restOptions
    } = options

    const components = {
      container: {
        selector: container,
        type: ScrollContainer,
        options: { enabled: enabled, content }
      },
      elements: {
        selector: elements,
        type: ScrollElement,
        options: { enabled: enabled }
      }
    }

    super({ el, options: restOptions, components })
    this.listen()
  }

  enable() {
    this.components.container.enable()
    this.components.elements.forEach((element) => element.enable())
  }

  disable() {
    this.components.container.disable()
    this.components.elements.forEach((element) => element.disable())
  }

  onScroll = data => {
    this.components.elements.forEach((element) => element.update(data))
  }

  listen() {
    ScrollManager.on('scroll', this.onScroll)
  }

  unlisten() {
    ScrollManager.off('scroll', this.onScroll)
  }

  onDestroy() {
    this.unlisten()
  }
}
