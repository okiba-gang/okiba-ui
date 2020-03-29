/**
 * @module EventManager
 * @description A custom events management system
 */

import EventManager from './lib/EventManager'
import { AbstractHandler, EventHandler, RAFHandler } from './lib/handlers'
import { debounce, createCustomEvent, dispatchCustomEvent } from './lib/helpers'
import { resize, scroll, raf } from './lib/events'

// built-in global events subscription
EventManager.subscribe([ resize, scroll, raf ])

export default EventManager
export {
  AbstractHandler,
  EventHandler,
  RAFHandler,
  debounce,
  createCustomEvent,
  dispatchCustomEvent
}
