import EventEmitter from '@okiba/event-emitter'
import { EventHandler } from '../handlers'

/**
 * The global event emitter
 * @type {EventEmitter}
 * @private
 */
const eventEmitter = new EventEmitter()

/**
 * The collection of global events handlers
 * @type {Object}
 * @private
 */
const eventsHandlers = {}

/**
 * The list of enabled global events
 * @type {Array}
 * @private
 */
let listeningEvents = []

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
    return Object.keys(eventsHandlers)
  }

  /**
   * Adds a global event
   * @param {String} type The event (alias) to be added to global events
   * @param {Object} config The event handling configuration
   *  @schema
   *  {
   *    handler: EventHandler (default) or an extension of it (must implement subscribe/unsubscribe interface)
   *    type: The (native) event type to be listened
   *    target: The (native) event target
   *    debounce: The callback debounce time
   *    payloadFilter: A function to manipulate event data before passing it to the event callback
   *  }
   */
  static subscribe(type, { handler: Handler = EventHandler, ...config } = {}) {
    if (eventsHandlers.hasOwnProperty(type)) {
      console.warn(`[EventManager error]: a global event "${type}" has been already subscribed. Skipping...`)
      return
    }

    eventsHandlers[type] = new Handler({
      ...config,
      alias: type,
      dispatch: (type, payload) => eventEmitter.emit(type, payload)
    })
  }

  /**
   * Removes a global event
   * @param {String} type The event (alias) to be removed from global events
   */
  static unsubscribe(type) {
    if (!eventsHandlers.hasOwnProperty(type)) return

    if (listeningEvents.includes(type)) {
      eventsHandlers[type].unlisten()
      listeningEvents = listeningEvents.filter(event => (event !== type))
    }

    delete eventsHandlers[type]
  }

  /**
   * Adds a global event listener
   * @param {String} type The event type
   * @param {Function} callback The event callback
   */
  static on(type, callback) {
    if (!eventsHandlers.hasOwnProperty(type)) return

    if (!listeningEvents.includes(type)) {
      listeningEvents.push(type)
      eventsHandlers[type].listen()
    }

    eventEmitter.on(type, callback)
  }

  /**
   * Removes a global event listener
   * @param {String} type The event type
   * @param {Function} callback The event callback
   */
  static off(type, callback) {
    if (!eventsHandlers.hasOwnProperty(type) || !listeningEvents.includes(type)) return
    eventEmitter.off(type, callback)

    if (eventEmitter.hs[type].length < 1) {
      eventsHandlers[type].unlisten()
      listeningEvents = listeningEvents.filter(event => (event !== type))
    }
  }

  /**
   * Proxies event dispatching
   * @param {String} type The event type
   * @param {*} payload The event payload
   */
  static emit(type, payload) {
    if (!eventsHandlers.hasOwnProperty(type)) return

    eventEmitter.emit(type, payload)
  }
}
