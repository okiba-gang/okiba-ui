import AbstractHandler from '../AbstractHandler'

/**
 * @module RAFHandler
 * @extends AbstractHandler
 * @package event-manager
 * @description An handler class to manage global requestAnimationFrame (un)subscription
 */
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
    super.listen()
    this.nextFrame()
  }

  /**
   * @override
   */
  unlisten() {
    super.unlisten()
    window.cancelAnimationFrame(this.requestId)
  }
}
