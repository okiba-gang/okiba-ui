import { qs } from '@okiba/dom'
import Component from '@okiba/component'
import SizesCache from '@okiba/sizes-cache'
import EventManager from '@okiba/event-manager'

/**
 * @module StickyContent
 * @description Makes an element sticky according to page scroll
 * Can be extended or instantiated
 * @example
 * import { qs } from '@okiba/dom'
 * import Component from '@okiba/component'
 * import StickyContent from '@okiba/sticky-content'
 * import EventManager from '@okiba/event-manager'
 *
 * class StickyComponent extends StickyContent {
 *   constructor(args) {
 *     super(args)
 *     EventManager.on('scroll', () => this.update({ y: window.scrollY }))
 *   }
 * }
 *
 * const app = new Component({
 *   el: qs('#app'),
 *   components: [
 *     {
 *       selector: '.sticky',
 *       type: StickyComponent
 *     }
 *   ]
 * })
 *
 * Accepts an __hash__ whose properties can be:
 * @param {Object}  args                          Arguments to create a component
 * @param {Element} args.el                       DOM Element to be bound
 * @param {Object}  args.options                  Custom options passed to the component
 * @param {String}  args.options.targetSelector   The css selector of element to be made sticky
 * @param {Boolean} args.options.overflow         Keeps element sticky even if its limitY has been reached
 */
export default class StickyContent extends Component {
  constructor({ el, options = {} }) {
    super({ el, options })
    this.target = qs(options.targetSelector || '.js-sticky-target')
    this.sizes = SizesCache.get(el)
    this.isEnabled = true
    this.onResize()
    this.listen()
  }

  /**
   * Enables component's features
   */
  enable() {
    if (this.isEnabled) return
    this.isEnabled = true
    this.target.style.transform = `translate3d(0, ${this.y}px, 0)`
  }

  /**
   * Disables component's features
   */
  disable() {
    this.isEnabled = false
    this.target.style.transform = ''
  }

  /**
   * Updates element's position according to passed scroll position
   * @param {Object} args
   * @param {Number} args.y The current scrollY
   */
  update = ({ y }) => {
    if (!this.isEnabled) return

    const deltaY = y - this.sizes.top

    if (deltaY <= 0) {
      this.y = 0
    } else if (!this.options.overflow && y > this.limitY)  {
      this.y = this.maxY
    } else {
      this.y = deltaY
    }

    this.target.style.transform = `translate3d(0, ${this.y}px, 0)`
  }

  /**
   * Updates element's boundaries according to current viewport sizes
   */
  onResize = () => {
    this.maxY = this.sizes.height - SizesCache.window.height
    this.limitY = this.sizes.bottom - SizesCache.window.height
  }

  /**
   * Adds resize event listener to EventManager
   */
  listen() {
    EventManager.on('resize', this.onResize)
  }

  /**
   * Removes resize event listener from EventManager
   */
  unlisten() {
    EventManager.off('resize', this.onResize)
  }

  /**
   * Removes all event listeners on destroy from EventManager
   */
  onDestroy() {
    this.unlisten()
  }
}
