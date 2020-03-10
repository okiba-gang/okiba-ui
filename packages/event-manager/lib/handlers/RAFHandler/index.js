import EventHandler from '../EventHandler'

/**
 * @module RAFHandler
 * @extends EventHandler
 * @package event-manager
 * @description An handler class to manage global requestAnimationFrame (un)subscription
 */
export default class RAFHandler extends EventHandler {
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
    if (this.listening) return

    this.nextFrame()
    this.listening = true
  }

  /**
   * @override
   */
  unlisten() {
    if (this.config.forceListening) return

    window.cancelAnimationFrame(this.requestId)

    this.listening = false
  }
}
