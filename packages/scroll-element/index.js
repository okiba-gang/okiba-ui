/**
 * @module ScrollElement
 * @description A class that extends Component (@okiba/component). When enabled, this component translate the dom element to the last Y passed to `onScroll` function
 * @example
 * import qs from '@okiba/dom'
 * import ScrollElement from '@okiba/scroll-element'
 *
 * const scrollElement new ScrollElement({el: qs('#app'), options: {enabled: true}})
 */
import Component from '@okiba/component'
import EventManager from '@okiba/event-manager'
import SizesCache from '@okiba/sizes-cache'
import { cap } from '@okiba/math'

export default class ScrollElement extends Component {
  constructor({el, options = {}}) {
    const { enabled, ...restOptions } = options
    super({ el, options: restOptions })
    this.sizes = SizesCache.get(this.el)
    enabled && this.enable()
    this.onResize()
    this.listen()
  }
  /**
   * Disable component feature and reset the dom element transform
   */
  disable() {
    if (!this.isEnabled) return
    this.isEnabled = false
    this.el.style.transform = ''
  }
  /**
   * Enable component feature
   */
  enable() {
    if (this.isEnabled) return
    this.isEnabled = true
  }
  /**
   * Update the target Y to reach and request an animation frame if component is enabled
   * * Accepts an __hash__ whose properties can be:
   * @param {Object} args Arguments to create a component
   * @param   {Number}   {y}  Y to reach
   */
  update({ y }) {
    this.targetY = cap(y, this.top, this.bottom)
    if (this.isEnabled && this.targetY !== this.y) {
      EventManager.on('raf', this.onRaf)
      this.hasRafRequest = true
    }
  }
  /**
   * Update the translate Y of the element like to target Y
   */
  onRaf = () => {
    this.y = this.targetY
    this.el.style.transform = `translate3d(0, -${this.y}px, 0)`
    this.hasRafRequest = false
    EventManager.off('raf', this.onRaf)
  }
  /**
   * Update element bounds after a resize (top and bottom)
   */
  onResize = () => {
    this.top = this.sizes.top - SizesCache.window.height + (this.options.thresholdTop || 0)
    this.bottom = this.sizes.bottom + (this.options.thresholdBottom || 0)
  }
  /**
   * Adds event listeners
   */
  listen() {
    EventManager.on('resize', this.onResize)
  }
  /**
   * Removes event listeners
   */
  unlisten() {
    EventManager.off('resize', this.onResize)

    if (this.hasRafRequest) {
      EventManager.off('raf', this.onRaf)
    }
  }
  /**
   * Destroy component removing event listeners
   */
  onDestroy() {
    this.unlisten()
  }
}
