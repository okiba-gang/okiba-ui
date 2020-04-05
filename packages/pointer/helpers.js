import EventManager from '@okiba/event-manager'
import * as events from './events'

/**
 * Ensures global pointer events subscription
 */
export function ensurePointerEvents() {
  events.default.forEach(type => EventManager.subscribe(events[type], true))
}
