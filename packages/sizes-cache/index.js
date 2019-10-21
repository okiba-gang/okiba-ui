import EventManager from '@okiba/event-manager'
import { offset } from '@okiba/dom'

export default new class SizesCache {
  constructor() {
    this.map = new Map()
    this.listen()
    this.onResize()
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
    const width = el.clientWidth
    const height = el.clientHeight

    sizes.top = top
    sizes.right = left + width
    sizes.bottom = top + height
    sizes.left = left
    sizes.width = width
    sizes.height = height
  }

  onResize = () => {
    this.window = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    this.body = {
      width: document.body.offsetWidth,
      height: document.body.offsetHeight
    }

    for (const el of this.map.keys()) {
      this.compute(el)
    }
  }

  listen() {
    EventManager.on('resize', this.onResize)
  }
}
