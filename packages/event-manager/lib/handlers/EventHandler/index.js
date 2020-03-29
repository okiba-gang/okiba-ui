/**
 * @module EventManager / EventHandler
 * @extends AbstractHandler
 * @package event-manager
 * @description An handler class to manage global event (un)subscription
 */

import { hasPassiveEvents } from '@okiba/detect'
import { on, off } from '@okiba/dom'
import AbstractHandler from '../AbstractHandler'

export default class EventHandler extends AbstractHandler {
  /**
   * @override
   */
  listen() {
    super.listen()

    const { type, target, passive = true, capture = false } = this.config
    const options = hasPassiveEvents ? { passive, capture } : capture

    if (Array.isArray(type)) {
      type.forEach(entry => on(target, entry, this.onEvent, options))
    } else {
      on(target, type, this.onEvent, options)
    }
  }

  /**
   * @override
   */
  unlisten() {
    super.unlisten()

    const { type, target, passive = true, capture = false } = this.config
    const options = hasPassiveEvents ? { passive, capture } : capture

    if (Array.isArray(type)) {
      type.forEach(entry => off(target, entry, this.onEvent, options))
    } else {
      off(target, type, this.onEvent, options)
    }
  }
}
