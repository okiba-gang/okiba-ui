/**
 * @module AbstractHandler
 * @package event-manager
 * @description A base class that defines a global event handler interface
 */

import { debounce } from '@okiba/functions'

export default class AbstractHandler {
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
   *    forceListening: Defines if global listeners have to be enabled regardless of registered callbacks
   *  }
   */
  constructor({ type, alias = type, ...config }) {
    this.config = { type, alias, ...config }
    this.onEvent = config.debounce
      ? debounce(this.eventCallback, config.debounce)
      : this.eventCallback

    if (this.config.forceListening) {
      this.listen()
    }
  }

  /**
   * A callback that dispatches the subscribed global event when the related native event occurs
   * @param {Event} nativePayload The original payload returned by native event
   */
  eventCallback = nativePayload => {
    const { alias, payloadFilter, dispatch } = this.config
    const payload = typeof payloadFilter === 'function'
      ? payloadFilter(nativePayload)
      : nativePayload

    dispatch(alias, payload)
  }

  /**
   * The listen interface method (must be extended)
   *
   * @returns {Boolean} Operation success
   */
  listen() {
    if (this.listening) {
      return false
    }

    this.listening = true

    return true
  }

  /**
   * The unlisten interface method (must be extended)
   *
   * @returns {Boolean} Operation success
   */
  unlisten() {
    if (!this.listening || this.config.forceListening) {
      return false
    }

    this.listening = false

    return true
  }

  /**
   * Event dispatcher
   * @param {any} payload The event payload
   */
  dispatch = payload => this.eventCallback(payload)
}
