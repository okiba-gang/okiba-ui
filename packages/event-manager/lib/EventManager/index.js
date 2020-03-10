import EventEmitter from '@okiba/event-emitter'
import { EventHandler } from '../handlers'

/**
 * The global event emitter
 * @type {EventEmitter}
 * @private
 */
const emitter = new EventEmitter()

/**
 * The collection of global events handlers
 * @type {Object}
 * @private
 */
const handlers = {}

/**
 * Handles global event subscription
 * @private
 * @param {Object} config The event handling configuration
 *  @schema
 *  {
 *    handler: EventHandler (default) or an extension of it (must implement subscribe/unsubscribe interface)
 *    type: The (native) event type to be listened
 *    alias: The global event type (native event type as default)
 *    target: The (native) event target
 *    debounce: The callback debounce time
 *    payloadFilter: A function to manipulate event data before passing it to the event callback
 *  }
 */
function subscribe({ handler: Handler = EventHandler, type, alias = type, ...config }) {
  if (handlers.hasOwnProperty(alias)) {
    console.warn(`[EventManager error]: a global event "${alias}" has been already subscribed. Skipping...`)
    return
  }

  handlers[alias] = new Handler({
    ...config,
    type,
    alias,
    dispatch: (alias, payload) => emitter.emit(alias, payload)
  })
}

/**
 * @module EventManager
 * @package event-manager
 * @description A singleton to manage global (centralized) events
 */
export default class EventManager {
  /**
   * Global events list getter
   */
  static get subscribedEvents() {
    return Object.keys(handlers)
  }

  /**
   * Checks if global event has registered callbacks
   * @param {String} type The event type
   */
  static hasListeners(type) {
    return !!emitter.hs[type] && !!emitter.hs[type].length
  }

  /**
   * Adds a global event(s)
   * @param {Object|Object[]} config Event(s) configuration(s)
   */
  static subscribe(config) {
    if (Array.isArray(config)) {
      config.forEach(entry => subscribe(entry))
      return
    }

    subscribe(config)
  }

  /**
   * Removes a global event
   * @param {String} type The event (alias) to be removed from global events
   */
  static unsubscribe(type) {
    if (!handlers.hasOwnProperty(type)) return

    if (handlers[type].listening) {
      handlers[type].unlisten()
    }

    delete handlers[type]
  }

  /**
   * Adds a global event listener
   * @param {String} type The event type
   * @param {Function} callback The event callback
   */
  static on(type, callback) {
    if (!handlers.hasOwnProperty(type)) return

    if (!handlers[type].listening) {
      handlers[type].listen()
    }

    emitter.on(type, callback)
  }

  /**
   * Removes a global event listener
   * @param {String} type The event type
   * @param {Function} callback The event callback
   */
  static off(type, callback) {
    if (!handlers.hasOwnProperty(type) || !handlers[type].listening) return

    emitter.off(type, callback)

    if (EventManager.hasListeners(type)) {
      handlers[type].unlisten()
    }
  }

  /**
   * Proxies event dispatching
   * @param {String} type The event type
   * @param {*} payload The event payload
   */
  static emit(type, payload) {
    if (!handlers.hasOwnProperty(type)) return

    emitter.emit(type, payload)
  }
}
