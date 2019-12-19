/**
 * @module SmoothScroll
 * @description Makes elements scroll smoothly with lerped translations
 * Can be extended or instantiated
 * @example
 * import { qs } from '@okiba/dom'
 * import Component from '@okiba/component'
 * import SmoothScroll from '@okiba/smooth-scroll'
 *
 * const app = new Component({
 *   el: qs('#app'),
 *   components: [
 *     {
 *       ghost: true,
 *       type: SmoothScroll
 *     }
 *   ]
 * })
 */
import Component from '@okiba/component'
import ScrollManager from '@okiba/scroll-manager'
import ScrollContainer from '@okiba/scroll-container'
import ScrollElement from '@okiba/scroll-element'
import { hasTouch } from '@okiba/detect'

/**
 * Accepts an __hash__ whose properties can be:
 * @param {Object}  args                                            Arguments to create a component
 * @param {Element} args.el                                         DOM Element to be bound
 * @param {Object}  args.options                                    Custom options passed to the component
 * @param {String}  [args.options.elements = '.js-scroll-element']  The css selector of element to be translated
 * @param {Boolean} [args.options.enabled = true]                   Defines if smooth scroll is enabled
 */
export default class SmoothScroll extends Component {
  constructor({ el, options = {}, ...args }) {
    const {
      elements = '.js-scroll-element',
      enabled = !hasTouch,
      ...restOptions
    } = options

    const components = {
      container: {
        ghost: true,
        type: ScrollContainer,
        options: { enabled }
      },
      elements: {
        selector: elements,
        type: ScrollElement,
        options: { enabled },
        asArray: true
      }
    }

    super({ el, options: restOptions, ...args, components })
    this.listen()

    enabled ? ScrollManager.enable() : ScrollManager.disable()
  }

  /**
   * Enables component's features
   */
  enable() {
    ScrollManager.enable()
    this.components.container.enable()
    this.components.elements.forEach((element) => element.enable())
  }

  /**
   * Disables component's features
   */
  disable() {
    ScrollManager.disable()
    this.components.container.disable()
    this.components.elements.forEach((element) => element.disable())
  }

  /**
   * Updates inner elements on scroll
   * @param {Object} data Scroll event's data
   */
  onScroll = data => {
    this.components.elements.forEach((element) => element.update(data))
  }

  /**
   * Adds scroll event listener to ScrollManager
   */
  listen() {
    ScrollManager.on('scroll', this.onScroll)
  }

  /**
   * Removes scroll event listener from ScrollManager
   */
  unlisten() {
    ScrollManager.off('scroll', this.onScroll)
  }

  /**
   * Removes all event listeners on destroy from ScrollManager
   */
  onDestroy() {
    this.unlisten()
  }
}
