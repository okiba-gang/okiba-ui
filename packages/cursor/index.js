/**
 * @module Cursor
 * @extends Component
 * @description A base component aimed to handle a custom html cursor
 * @example
 * import Cursor from '@okiba/cursor'
 *
 * const cursor = new Cursor({
 *  el: document.getElementById('my-custom-cursor'),
 *  options: {
 *    inertia: 0.25
 *  }
 * })
 */

import Component from '@okiba/component'
import { matches } from '@okiba/dom'
import { lerp } from '@okiba/math'
import { hasTouch } from '@okiba/detect'
import EventManager from '@okiba/event-manager'
import SizesCache from '@okiba/sizes-cache'
import { ensurePointerEvents } from '@okiba/pointer/helpers'

class Cursor extends Component {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props)

    if (!props.options) this.options = {}

    this.coords = { current: {} }
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
    const { origin = [0.5, 0.5] } = this.options

    this.el.style.position = 'fixed'
    this.el.style.top = `${this.sizes.height * -origin[0]}px`
    this.el.style.left = `${this.sizes.width * -origin[1]}px`
  }

  /**
   * Reveals cursor (can be extended)
   */
  show() {
    this.el.setAttribute('data-cursor-visible', '')
  }

  /**
   * Unveils cursor (can be extended)
   */
  hide() {
    this.el.removeAttribute('data-cursor-visible')
  }

  /**
   * Animates cursor to pointer position (can be overwritten)
   * @param {Number} inertia The lerping factor
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
   * @param {Object} matchedSelector The trigger selector
   */
  hover(target, matchedSelector) {
    const action = !!matchedSelector ? 'setAttribute' : 'removeAttribute'

    this.show()
    this.el[action]('data-cursor-hover', '')
    this.el[action]('data-cursor-match', matchedSelector)
  }

  /**
   * Restores the cursor default state (should be implemented)
   */
  reset() {
    this.el.removeAttribute('data-cursor-hover')
    this.el.removeAttribute('data-cursor-match')
  }

  /**
   * Handles pointer entering/leaving viewport callback
   * @param {Object} payload The pointer inview event payload
   */
  onPointerInView = ({ inview }) => {
    const action = inview ? 'show' : 'hide'

    this[action]()
  }

  /**
   * Updates cursor position
   * @param {Object} payload The pointermove event payload
   */
  onPointerMove = ({ coords }) => {
    const { trackTouch } = this.options

    this.coords.current = coords

    if ((!hasTouch || trackTouch) && !this.enabled) {
      this.move()
      this.show()
      this.enabled = true

      EventManager.on('raf', this.onRAF)
    }
  }

  /**
   * Handles pointer hover
   * @param {Event} e The mouseover/touchmove event
   */
  onPointerOver = ({ target }) => {
    const { triggers = Cursor.defaultTriggers } = this.options
    const matchedSelector = matches(target, triggers, true)

    this.hover(target, matchedSelector)
  }

  /**
   * Handles pointer down
   */
  onPointerDown = () => {
    this.el.setAttribute('data-cursor-hold', '')
  }

  /**
   * Handles pointer up
   */
  onPointerUp = () => {
    this.el.removeAttribute('data-cursor-hold')
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
      ensurePointerEvents()
      EventManager.on('resize', this.onResize)
      EventManager.on('pointerinview', this.onPointerInView)
      EventManager.on('pointermove', this.onPointerMove)
      EventManager.on('pointerover', this.onPointerOver)
      EventManager.on('pointerdown', this.onPointerDown)
      EventManager.on('pointerup', this.onPointerUp)
    }
  }

  /**
   * Kills listeners (can be extended)
   */
  onDestroy() {
    const { trackTouch } = this.options

    if (!hasTouch || trackTouch) {
      EventManager.off('raf', this.onRAF)
      EventManager.off('resize', this.onResize)
      EventManager.off('pointerinview', this.onPointerInView)
      EventManager.off('pointermove', this.onPointerMove)
      EventManager.off('pointerover', this.onPointerOver)
      EventManager.off('pointerdown', this.onPointerDown)
      EventManager.off('pointerup', this.onPointerUp)

      this.enabled = false
    }
  }

  /**
   * Default triggers selectors
   * @static
   */
  static defaultTriggers = ['a', 'button', '[data-cursor]']
}

export default Cursor
