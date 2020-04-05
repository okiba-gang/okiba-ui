/**
 * @module ScrollContainer
 * @description A class that extends Component (@okiba/component). When is enabled, it set the height of body with the element body, and set the element in fixed position so you can use the native scroll to animate what you want.
 * @example
 * import qs from '@okiba/dom'
 * import ScrollContainer from '@okiba/scroll-container'
 *
 * const scrollContainer new ScrollContainer({el: qs('#app'), options: {enabled: true}})
 */
import Component from '@okiba/component'
import EventManager from '@okiba/event-manager'
import SizesCache from '@okiba/sizes-cache'

export default class ScrollContainer extends Component {
  constructor({ el, options = {}, ...args }) {
    super({ el, options, ...args })
    this.sizes = SizesCache.get(el)
    this.onResize()
    this.listen()
    options.enabled && this.enable()
  }
  /**
   * Disable component feature and reset the dom element to initial style
   */
  disable() {
    if (!this.isEnabled) return
    this.isEnabled = false
    document.body.style.height = ''
    SizesCache.onResize()
    Object.assign(this.el.style, {
      position: '',
      top: '',
      left: '',
      width: ''
    })
  }
  /**
   * Enable component feature, set the body height to element height and set the element in position fixed
   */
  enable() {
    if (this.isEnabled) return
    this.isEnabled = true
    this.updateBodyHeight()
    Object.assign(this.el.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%'
    })
  }
  /**
   * Resize handler
   */
  onResize = () => {
    if (this.isEnabled) {
      this.updateBodyHeight()
    }
  }
  /**
   * Update the body height like the element height
   */
  updateBodyHeight() {
    SizesCache.body.height = this.sizes.height
    SizesCache.body.scrollArea = this.sizes.height - SizesCache.window.height
    document.body.style.height = `${this.sizes.height}px`
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
  }
  /**
   * Disable all component feature and remove all listeners
   */
  onDestroy() {
    if (this.isEnabled) {
      this.disable()
    }

    this.unlisten()
  }
}
