import { hasPassiveEvents } from '@okiba/detect'
import { on, off } from '@okiba/dom'
import { debounce } from '../../utils'

/**
 * @module EventHandler
 * @package event-manager
 * @description An handler class to manage global event (un)subscription
 */
export default class EventHandler {
  /**
   * @constructor
   * @param {Object} config The handler configuration
   *  @schema
   *  {
   *    type: The native event type
   *    alias: The global event type (native type as default)
   *    target: The native event target
   *    debounce: The event callback debounce time
   *    payloadFilter: A function to manipulate event data before passing it to the event callback
   *  }
   */
  constructor(config) {
    this.config = config
    this.onEvent = config.debounce ? debounce(this.eventCallback, config.debounce) : this.eventCallback
  }

  /**
   * A callback that dispatches the subscribed global event when the related native event occurs
   * @param {*} nativePayload The original payload returned by native event
   */
  eventCallback = nativePayload => {
    const { type, alias = type, payloadFilter, dispatch } = this.config
    const payload = typeof payloadFilter === 'function' ? payloadFilter(nativePayload) : nativePayload
    dispatch(alias, payload)
  }

  /**
   * The interface method (required) that switches on the global event listener
   */
  listen() {
    const { type, target, passive = true, capture = false } = this.config
    const options = hasPassiveEvents ? { passive, capture } : capture

    if (Array.isArray(type)) {
      type.forEach(entry => on(target, entry, this.onEvent, options))
    } else {
      on(target, type, this.onEvent, options)
    }
  }

  /**
   * The interface method (required) that switches off the global event listener
   */
  unlisten() {
    const { type, target, passive = true, capture = false } = this.config
    const options = hasPassiveEvents ? { passive, capture } : capture

    if (Array.isArray(type)) {
      type.forEach(entry => off(target, entry, this.onEvent, options))
    } else {
      off(target, type, this.onEvent, options)
    }
  }
}
