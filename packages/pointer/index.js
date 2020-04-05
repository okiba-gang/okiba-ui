/**
 * @module Pointer
 * @description A wrapper class that collects normalized (both mouse and touch) pointer information
 * @example
 * import Pointer from '@okiba/pointer'
 * import { MyCanvasApp } from '../path/to/my/components'
 *
 * window.requestAnimationFrame(() => {
 *  MyCanvasApp.update(Pointer.coords, Pointer.target)
 * })
 */

import { matches } from '@okiba/dom'
import EventManager from '@okiba/event-manager'
import { ensurePointerEvents } from './helpers'

/**
 * Pointer state
 * @type {Object}
 * @private
 */
let state = {}

/**
 * Pointer state updater
 * @param {Object} state The new state properties
 * @private
 */
function update(props) {
  state = { ...state, ...props }
}

class Pointer {
  /**
   * Coords getter
   * @return {Object} {x, y}
   */
  static get coords() {
    return state.coords || {}
  }

  /**
   * Last event target getter
   * @returns {Event}
   */
  static get target() {
    return state.event ? state.event.target : null
  }

  /**
   * Returns pointer inview status
   * @returns {Boolean}
   */
  static get inview() {
    return state.inview
  }

  /**
   * Last event getter
   * @returns {Event}
   */
  static get lastEvent() {
    return state.event
  }

  /**
   * Checks if last event target matches with given selectors
   * @param {String[]} selectors The selectors list
   * @param {Boolean} testAncestors If true, extends match test upward in the ancestors
   * @returns {String}
   */
  static matches(selectors = [], testAncestors) {
    return matches(state.target, selectors, testAncestors)
  }
}

// auto-init
ensurePointerEvents()
EventManager.on('pointermove', update)
EventManager.on('pointerinview', update)

// public export
export default Pointer
