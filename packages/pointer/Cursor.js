/**
 * @module Cursor
 * @description Custom cursor base class
 * @example
 */
import Component from '@okiba/component'
import EventManager from '@okiba/event-manager'
import SizesCache from '@okiba/sizes-cache'
import { hasTouch } from '@okiba/detect'
import { lerp } from '@okiba/math'
import Pointer from './Pointer'

class Cursor extends Component {
  /**
   * Default triggers selectors
   */
  static defaultTriggers = ['a', 'button', '[data-cursor]']

  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props)
    this.coords = {
      current: { x: 0, y: 0 }
    }

    this.sizes = SizesCache.get(this.el)

    if (this.options.autoInit !== false) {
      this.setup()
      this.listen()
    }
  }

  /**
   * Sets cursor base styles (can be extended/overwritten)
   */
  setup() {
    this.el.style.position = 'fixed'
    this.el.style.top = `-${this.sizes.height / 2}px`
    this.el.style.left = `-${this.sizes.width / 2}px`
  }

  /**
   * Reveals cursor (can be extended)
   */
  show() {
    this.el.classList.remove('hidden')
  }

  /**
   * Unveils cursor (can be extended)
   */
  hide() {
    this.el.classList.add('hidden')
  }

  /**
   * Animates cursor to pointer position (can be overwritten)
   * @param
   */
  move(inertia = false) {
    const { last, current } = this.coords
    const x = inertia ? lerp(last.x, current.x, inertia) : current.x
    const y = inertia ? lerp(last.y, current.y, inertia) : current.y

    this.coords.last = { x, y }
    this.el.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  /**
   * Applies a transformation according to type (should be implemented)
   * @param {Object} target The interception payload
   */
  morph({ type, trigger }) {
    console.log(`morph (of type "${type || trigger.el.tagName.toLowerCase()}") triggered by`, trigger)
  }

  /**
   * Restores the cursor default state (should be implemented)
   */
  reset() {}

  /**
   * Updates cursor position
   * @param {Object} e The pointer's move event payload
   */
  onPointerMove = ({ coords }) => {
    this.coords.current = coords

    if (!this.enabled) {
      this.move()
      this.enabled = true
      EventManager.on('raf', this.onRAF)
    }
  }

  /**
   * Handles element interception start
   * @param {Object} trigger The triggered interception
   */
  onInterceptionStart = trigger => {
    this.morph({ type: trigger.el.dataset.cursor, trigger })
  }

  /**
   * Handles element interception end
   */
  onInterceptionEnd = () => this.reset()

  /**
   * Handles viewport enter callback
   */
  onViewportEnter = () => this.show()

  /**
   * Handles viewport leave callback
   */
  onViewportLeave = () => this.hide()

  /**
   * Handles request animation frame
   */
  onRAF = () => {
    const { inertia } = this.options
    const { last } = this.coords
    const withInertia = !!last && typeof inertia === 'number' && inertia > 0 && inertia < 1
    this.move(withInertia ? inertia : false)
  }

  /**
   * Handles resize
   */
  onResize = () => this.setup()

  /**
   * Initializes listeners (can be extended)
   */
  listen() {
    if (!hasTouch) {
      const { triggers = Cursor.defaultTriggers } = this.options
      const interceptors = triggers.reduce((acc, selector) => {
        acc[selector] = {
          onEnter: ({ target: el }) => this.onInterceptionStart({ selector, el }),
          onLeave: this.onInterceptionEnd
        }
        return acc
      }, {})

      EventManager.on('resize', this.onResize)

      Pointer.on('viewportEnter', this.onViewportEnter)
      Pointer.on('viewportLeave', this.onViewportLeave)
      Pointer.on('move', this.onPointerMove)
      Pointer.addInterceptors(interceptors)
    }
  }

  /**
   * Kills listeners (can be extended)
   */
  onDestroy() {
    if (!hasTouch) {
      const { triggers = Cursor.defaultTriggers } = this.options

      EventManager.off('resize', this.onResize)

      Pointer.off('viewportEnter', this.onViewportEnter)
      Pointer.off('viewportLeave', this.onViewportLeave)
      Pointer.off('move', this.onPointerMove)
      Pointer.removeInterceptors(triggers)

      this.disable()
    }
  }
}

export default Cursor
