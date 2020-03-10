import { hasTouch } from '@okiba/detect'
import EventManager from '@okiba/event-manager'
import * as events from './events'

/**
 * Ensures global pointer events subscription
 */
export function ensurePointerEvents() {
  ['pointermove', 'pointerinview', 'pointerover'].forEach(type => {
    if (!EventManager.subscribedEvents.includes(type)) {
      EventManager.subscribe(events[type])
    }
  })

  if (!hasTouch) {
    ['pointerdown', 'pointerup'].forEach(type => {
      EventManager.subscribe(events[type])
    })
  }
}

