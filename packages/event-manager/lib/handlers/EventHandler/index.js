/**
 * @module EventHandler
 * @extends AbstractHandler
 * @package event-manager
 * @description An handler class aimed to centralize a native browser event listener
 */

import { on, off, createCustomEvent } from '@okiba/dom'
import { hasPassiveEvents } from '@okiba/detect'
import AbstractHandler from '../AbstractHandler'

export default class EventHandler extends AbstractHandler {
  /**
   * @override
   */
  listen() {
    if (!super.listen()) {
      return false
    }

    const { type, target, passive = true, capture = false } = this.config
    const options = hasPassiveEvents
      ? { passive, capture }
      : capture

    if (Array.isArray(type)) {
      type.forEach(entry => on(target, entry, this.onEvent, options))
    } else {
      on(target, type, this.onEvent, options)
    }

    return true
  }

  /**
   * @override
   */
  unlisten() {
    if (!super.unlisten()) {
      return false
    }

    const { type, target, passive = true, capture = false } = this.config
    const options = hasPassiveEvents
      ? { passive, capture }
      : capture

    if (Array.isArray(type)) {
      type.forEach(entry => off(target, entry, this.onEvent, options))
    } else {
      off(target, type, this.onEvent, options)
    }

    return true
  }

  /**
   * Event dispatcher
   * @param {any} payload The event detail
   */
  dispatch = payload => {
    const { type, target } = this.config
    const options = payload ? { detail: payload } : null
    const event = createCustomEvent(type, options)
    target.dispatchEvent(event)
  }
}
