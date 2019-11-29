import EventManager from '@okiba/event-manager'
import { offset } from '@okiba/dom'

export default new class SizesCache {
  constructor() {
    this.map = new Map()
    this.onResize()
    this.listen()
  }

  get(el) {
    if (!this.map.has(el)) {
      this.map.set(el, {})
      this.compute(el)
    }

    return this.map.get(el)
  }

  compute(el) {
    const sizes = this.map.get(el)

    const {top, left} = offset(el)
    const width = el.offsetWidth
    const height = el.offsetHeight

    sizes.top = top
    sizes.left = left
    sizes.width = width
    sizes.height = height
    sizes.right = left + width
    sizes.bottom = top + height
  }

  onResize = () => {
    this.window = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    this.body = {
      width: document.body.offsetWidth,
      height: document.body.offsetHeight,
      scrollArea: document.body.offsetHeight - window.innerHeight
    }

    for (const el of this.map.keys()) {
      this.compute(el)
    }
  }

  listen() {
    EventManager.on('resize', this.onResize)
  }

  unlisten() {
    EventManager.off('resize', this.onResize)
  }

  reset = () => {
    this.map.clear()
  }
}
