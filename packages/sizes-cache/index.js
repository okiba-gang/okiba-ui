/**
 * @module SizesCache
 * @description A class to compute and cache element sizes.
 * @example
 * import { qs } from '@okiba/dom'
 * import SizesCache from '@okiba/size-cache'
 *
 * const sizes = SizesCache.get(qs('#app'))
 * console.log(sizes)
 */
import { offset } from '@okiba/dom'
import EventManager from '@okiba/event-manager'

export default new class SizesCache {
  constructor() {
    this.map = new Map()
    this.onResize()
    this.listen()
  }

  /**
   * Element's sizes getter
   * @param {Element} el
   */
  get(el) {
    if (!this.map.has(el)) {
      this.map.set(el, {})
      this.compute(el)
    }

    return this.map.get(el)
  }

  /**
   * Computes element's sizes
   * @param {Element} el
   */
  compute(el) {
    const sizes = this.map.get(el)

    const {top, left} = offset(el)
    const width = el.offsetWidth
    const height = el.offsetHeight

    sizes.top = top
    sizes.left = left
    sizes.width = width
    sizes.height = height
    sizes.right = left + width
    sizes.bottom = top + height
  }

  /**
   * Updates elements' sizes on resize
   */
  onResize = () => {
    this.window = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    this.body = {
      width: document.body.offsetWidth,
      height: document.body.offsetHeight,
      scrollArea: document.body.offsetHeight - window.innerHeight
    }

    for (const el of this.map.keys()) {
      this.compute(el)
    }
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
   * Resets component's data
   */
  reset = () => {
    this.map.clear()
  }
}
