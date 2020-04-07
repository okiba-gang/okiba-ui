/**
 * @module RAFHandler
 * @extends AbstractHandler
 * @package event-manager
 * @description An handler class aimed to centralize a requestAnimationFrame
 */

import AbstractHandler from '../AbstractHandler'

export default class RAFHandler extends AbstractHandler {
  /**
   * Recursively requires animation frame
   * @param {Number} timestamp The timestamp returned by requestAnimationFrame
   */
  nextFrame = timestamp => {
    !!timestamp && this.onEvent(timestamp) // preventing dispatching global raf on subscription (because of missing timestamp)
    this.requestId = window.requestAnimationFrame(this.nextFrame)
  }

  /**
   * @override
   */
  listen() {
    if (!super.listen()) {
      return false
    }

    this.nextFrame()

    return true
  }

  /**
   * @override
   */
  unlisten() {
    if (!super.unlisten()) {
      return false
    }

    window.cancelAnimationFrame(this.requestId)

    return true
  }
}
