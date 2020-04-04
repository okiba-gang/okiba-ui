/**
 * @module ViewProgress
 * @description Retrieves the percentage (0 to 1) of element's in-view portion according to page scroll
 * Can be extended or instantiated
 * @example
 * import { qs, qsa, on } from '@okiba/dom'
 * import Component from '@okiba/component'
 * import ViewProgress from '@okiba/view-progress'
 *
 * class ViewProgressComponent extends ViewProgress {
 *   constructor(args) {
 *     super(args)
 *     this.on('enter', this.onEnter)
 *     this.on('progress', this.onProgress)
 *     this.on('exit', this.onExit)
 *     this.update({ y: window.scrollY })
 *     on(window, 'scroll', () => this.update({ y: window.scrollY }))
 *   }
 *
 *   onEnter = () => console.log()(`${this.el} entered`)
 *   onProgress = ({ progress }) => console.log(progress)
 *   onExit = () => console.log()(`${this.el} exited`)
 * }
 *
 * const app = new Component({
 *   el: qs('#app'),
 *   components: [
 *     {
 *       selector: '.view-progress-element',
 *       type: ViewProgress
 *     }
 *   ]
 * })
 */
import EventedComponent from '@okiba/core/evented-component'
import { map } from '@okiba/core/math'
import SizesCache from '@okiba/sizes-cache'
import EventManager from '@okiba/event-manager'

/**
 * Accepts an __hash__ whose properties can be:
 * @param {Object}  args                          Arguments to create a component
 * @param {Element} args.el                       DOM Element to be bound
 * @param {Object}  args.options                  Custom options passed to the component
 * @param {Boolean} args.options.overflow         Keeps emitting progress even if elements is out of viewport
 * @param {Number}  args.options.thresholdTop     A value added to element's top position to adjust its bounding area
 * @param {Number}  args.options.thresholdBottom  A value added to element's bot position to adjust its bounding area
 */
export default class ViewProgress extends EventedComponent {
  constructor({ el, options = {}, ...args }) {
    super({ el, options, ...args })

    this.sizes = SizesCache.get(el)
    this.isInside = false
    this.onResize()
    this.listen()
  }

  /**
   * Updates element's progress and emits enter, exit and progress events according to passed scroll position
   * @param {Object} args
   * @param {Number} args.y The current scrollY
   */
  update = ({ y, ...rest }) => {
    const adjustedY = Math.min(y, SizesCache.body.scrollArea);
    if (!this.options.overflow && !this.isInside) {
      if (adjustedY < this.startY || adjustedY > this.endY) {
        return
      }
    }

    const progress = map(adjustedY, this.startY, this.endY, 0, 1)
    const isInside = progress >= 0 && progress <= 1
    if (isInside !== this.isInside) {
      if (isInside) {
        this.emit('enter')
      } else {
        this.emit('exit')
      }
    }

    this.isInside = isInside
    this.emit('progress', {...rest, progress, isInside, adjustedY})
  }

  /**
   * Updates element's boundaries according to current viewport sizes and page scrollable area
   */
  onResize = () => {
    const { top, height } = this.sizes
    this.startY = top - SizesCache.window.height + (this.options.thresholdTop || 0)
    this.endY = Math.min(SizesCache.body.scrollArea, this.startY + height + SizesCache.window.height + (this.options.thresholdBottom || 0))
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
