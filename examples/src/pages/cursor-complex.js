import { qs } from '@okiba/dom'
import { lerp } from '@okiba/math'
import { hasTouch } from '@okiba/detect'
import EventManager from '@okiba/event-manager'
import SizesCache from '@okiba/sizes-cache'
import Cursor from '@okiba/cursor'

class CustomCursor extends Cursor {
  constructor({ options, ...props }) {
    super({ options: { ...options, autoInit: false }, ...props })

    this.sizes = this.ui.circles.map(circle => SizesCache.get(circle))

    this.setup()
    this.listen()
  }

  setup() {
    this.ui.circles.forEach((circle, i) => {
      circle.style.position = 'fixed'
      circle.style.top = `-${this.sizes[i].height / 2}px`
      circle.style.left = `-${this.sizes[i].width / 2}px`
    })
  }

  move(inertia = false) {
    const { last, current } = this.coords
    const { circles } = this.ui

    const coords = circles.map((circle, i) => {
      const x = inertia ? lerp(last[i].x, current.x, inertia / (circles.length - i)) : current.x
      const y = inertia ? lerp(last[i].y, current.y, inertia / (circles.length - i)) : current.y

      circle.style.transform = `translate3d(${x}px, ${y}px, 0)`

      return { x, y }
    })

    this.coords.last = coords
  }

  hover(target, matchedSelector) {
    switch (matchedSelector) {
      case '[data-cursor]':
      case 'a':
      case 'button':
      case '.MenuHamburger':
        this.el.classList.add('morph')
        break
      default:
        this.reset()
        break
    }
  }

  reset() {
    this.el.classList.remove('morph')
  }

  onPointerDown = () => {
    this.el.classList.add('down')
  }

  onPointerUp = () => {
    this.el.classList.remove('down')
  }

  listen() {
    super.listen()

    if (!hasTouch) {
      EventManager.on('pointerdown', this.onPointerDown)
      EventManager.on('pointerup', this.onPointerUp)
    }
  }

  onDestroy() {
    super.onDestroy()

    if (!hasTouch) {
      EventManager.off('pointerdown', this.onPointerDown)
      EventManager.off('pointerup', this.onPointerUp)
    }
  }
}

const cursor = new CustomCursor({
  el: qs('.Cursor'),
  ui: {
    circles: '.Cursor_circle'
  },
  options: {
    triggers: [ ...Cursor.defaultTriggers, '.MenuHamburger' ],
    inertia: 0.36
  }
})
