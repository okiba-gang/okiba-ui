/**
 * @module Cursor
 * @description Custom cursor base class
 * @example
 */
import Component from '@okiba/component'
import EventManager from '@okiba/event-manager'
import SizesCache from '@okiba/sizes-cache'
// import { matches } from '@okiba/dom'
import { hasTouch } from '@okiba/detect'
import { lerp } from '@okiba/math'
import Pointer from '../Pointer'

const matches = (target, selectors = []) => selectors.find(selector => target.matches(selector))

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
      current: {}
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
   * Handles hover event
   * @param {Object} target The event target
   * @param {Object} matchedSelector The trigger selector
   */
  hover(target, matchedSelector) {}

  /**
   * Restores the cursor default state (should be implemented)
   */
  reset() {}

  /**
   * Handles pointer entering/leaving viewport callback
   */
  onPointerInView = inView => {
    const action = inView ? 'show' : 'hide'
    this[action]()
  }

  /**
   * Updates cursor position
   */
  onPointerMove = () => {
    this.coords.current = Pointer.coords

    if (!this.enabled) {
      this.move()
      this.enabled = true
      EventManager.on('raf', this.onRAF)
    }
  }

  /**
   *  Handles pointer hover
   * @param {Event} e The hover event
   */
  onPointerOver = ({ target }) => {
    const { triggers = Cursor.defaultTriggers, trackTouch } = this.options
    let matchedSelector = matches(target, triggers)

    if (!matchedSelector && hasTouch && trackTouch) {
      matchedSelector = triggers.find(selector => target.closest(selector))
    }

    this.hover(target, matchedSelector)
  }

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
    const { trackTouch } = this.options

    if (!hasTouch || trackTouch) {
      EventManager.on('resize', this.onResize)
      EventManager.on('pointerinview', this.onPointerInView)
      EventManager.on('pointermove', this.onPointerMove)
      EventManager.on('pointerover', this.onPointerOver)
    }
  }

  /**
   * Kills listeners (can be extended)
   */
  onDestroy() {
    const { trackTouch } = this.options

    if (!hasTouch || trackTouch) {
      EventManager.off('resize', this.onResize)
      EventManager.off('pointerinview', this.onPointerInView)
      EventManager.off('pointermove', this.onPointerMove)
      EventManager.off('pointerover', this.onPointerOver)

      this.disable()
    }
  }
}

export default Cursor
