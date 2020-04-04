/**
 * @module ScrollManager
 * @description A class that extends EventEmitter (@okiba/event-emitter). Basically emits `scroll` events in two different ways, when enabled it lerp the scroll position and emits `scroll` events on request animation frame, when disable is like a proxy of native scroll events.
 * @example
 * import ScrollManager from '@okiba/scroll-manager'
 * import {hasTouch} from '@okiba/detect'
 *
 * // Enable lerped scroll if device is not touch
 * hasTouch ? ScrollManager.disable() : ScrollManager.enable()
 * // Listen scroll events
 * ScrollManager.on('scroll', ({y, delta, acceleration, progress}) => console.log(y, delta, acceleration, progress))
 */
import EventEmitter from '@okiba/core/event-emitter'
import { lerp, cap } from '@okiba/core/math'
import EventManager from '@okiba/event-manager'
import SizesCache from '@okiba/sizes-cache'

export default new class ScrollManager extends EventEmitter {
  constructor() {
    super()
    this.listen()
    this.trigger()
  }
  /**
   * Disable lerped scroll calculation and remove the raf listener
   */
  disable() {
    if (!this.isEnabled) return
    this.isEnabled = false
    EventManager.off('raf', this.onRaf)
  }
  /**
   * Enable lerped scroll calculation and add the raf listener
   */
  enable() {
    if (this.isEnabled) return
    this.isEnabled = true
    EventManager.on('raf', this.onRaf)
  }
  /**
   * Calculate the lerped scroll position and emit a scroll event.
   * The emitted scroll event pass an Object like:
   * ```javascript
   * {
   *  y // Lerped Y
   *  delta // Difference between actual y and the last emitted y
   *  acceleration // The accelleration of the scroll
   *  progress // The global progress of the page
   * }
   * ```
   *
   */
  onRaf = () => {
    if (!this.isEnabled || this.lerpY === this.targetY) return
    this.deltaLerpY = this.lerpY
    this.lerpY = lerp(this.lerpY, this.targetY, 0.1)
    this.deltaLerpY -= this.lerpY

    if (Math.abs(this.deltaLerpY) < 0.02) {
      this.lerpY = this.targetY
      this.deltaLerpY = 0
    }

    this.emit('scroll', {
      y: this.lerpY,
      delta: this.deltaLerpY,
      acceleration: this.deltaLerpY / SizesCache.window.height,
      progress: cap(this.lerpY / SizesCache.body.scrollArea, 0, 1)
    })
  }
  /**
   * Callback of scroll event and update the target Y. If component is disable it emits a `scroll` event
   */
  onChange = () => {
    this.deltaY = (window.scrollY || window.pageYOffset) - this.targetY
    this.targetY += this.deltaY

    if (!this.isEnabled) {
      this.emit('scroll', {
        y: this.targetY,
        delta: this.deltaY,
        acceleration: this.deltaY / SizesCache.window.height,
        progress: this.targetY / SizesCache.body.scrollArea
      })
    }
  }
  /**
   * Adds event listeners
   */
  listen() {
    EventManager.on('scroll', this.onChange)
    EventManager.on('resize', this.onChange)
  }
  /**
   * Removes event listeners
   */
  unlisten() {
    if (this.isEnabled) {
      EventManager.off('raf', this.onRaf)
    }
    EventManager.off('scroll', this.onChange)
    EventManager.off('resize', this.onChange)
  }
  /**
   * Update the scroll based on the page scroll and trigger a `scroll` event
   */
  trigger() {
    this.targetY = window.scrollY || window.pageYOffset
    this.lerpY = this.lerpY ? this.lerpY - 1 : this.targetY - 1
    this.emit('scroll', {
      y: this.targetY, delta: 0, acceleration: 0,
      progress: cap(this.targetY / SizesCache.body.scrollArea, 0, 1)
    })
  }
}
