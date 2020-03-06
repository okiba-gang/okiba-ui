import EventHandler from '../EventHandler'

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
    this.nextFrame()
  }

  /**
   * @override
   */
  unlisten() {
    window.cancelAnimationFrame(this.requestId)
  }
}
