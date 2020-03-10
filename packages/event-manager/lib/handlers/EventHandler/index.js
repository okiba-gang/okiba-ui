import { hasPassiveEvents } from '@okiba/detect'
import { on, off } from '@okiba/dom'
import { debounce } from '../../helpers'

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
   *    alias: The global event type (native event type as default)
   *    target: The native event target
   *    debounce: The event callback debounce time
   *    payloadFilter: A function to manipulate event data before passing it to the event callback
   *  }
   */
  constructor({ type, alias = type, ...config }) {
    this.config = { type, alias, ...config }
    this.onEvent = config.debounce ? debounce(this.eventCallback, config.debounce) : this.eventCallback

    if (this.config.forceListening) {
      this.listen()
    }
  }

  /**
   * A callback that dispatches the subscribed global event when the related native event occurs
   * @param {*} nativePayload The original payload returned by native event
   */
  eventCallback = nativePayload => {
    const { alias, payloadFilter, dispatch } = this.config
    const payload = typeof payloadFilter === 'function' ? payloadFilter(nativePayload) : nativePayload

    dispatch(alias, payload)
  }

  /**
   * The interface method (required) that switches on the global event listener
   */
  listen() {
    if (this.listening) return

    const { type, target, passive = true, capture = false } = this.config
    const options = hasPassiveEvents ? { passive, capture } : capture

    if (Array.isArray(type)) {
      type.forEach(entry => on(target, entry, this.onEvent, options))
    } else {
      on(target, type, this.onEvent, options)
    }

    this.listening = true
  }

  /**
   * The interface method (required) that switches off the global event listener
   */
  unlisten() {
    if (this.config.forceListening) return

    const { type, target, passive = true, capture = false } = this.config
    const options = hasPassiveEvents ? { passive, capture } : capture

    if (Array.isArray(type)) {
      type.forEach(entry => off(target, entry, this.onEvent, options))
    } else {
      off(target, type, this.onEvent, options)
    }

    this.listening = false
  }
}
