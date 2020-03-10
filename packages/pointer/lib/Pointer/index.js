import EventManager from '@okiba/event-manager'
import { matches } from '@okiba/dom'
import { ensurePointerEvents } from '../helpers'

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

// auto-init
ensurePointerEvents()
EventManager.on('pointermove', update)
EventManager.on('pointerinview', update)

// public export
export default {
  get coords() {
    return state.coords || {}
  },
  get target() {
    return state.event ? state.event.target : null
  },
  get inview() {
    return state.inview
  },
  get lastEvent() {
    return state.event
  },
  matches(selectors, testAncestors) {
    return matches(state.target, selectors, testAncestors)
  }
}
