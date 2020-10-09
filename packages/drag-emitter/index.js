/**
 * @module  DragEmitter
 * @description Emits drag events for all common pointers kinds (touch & mouse)
 */
import EventEmitter from '@okiba/event-emitter'
import {on, off} from '@okiba/dom'
import {hasPassiveEvents} from '@okiba/detect'

/**
 * @param {Element} el Element whose surface is used for drag events
 * @example
 * import {DragEmitter} from '@okiba/drag-emitter'
 * import {qs} from '@okiba/dom'
 *
 * const dragEmitter = new DragEmitter(qs('.container'))
 * dragEmitter.on(
 *   'drag',
 *   ({deltaX, clientX, deltaY, clientY}) => {
 *     console.log(deltaX, clientX, deltaY, clientY)
 *   }
 */
class DragEmitter extends EventEmitter {
  constructor(el) {
    super()
    this.el = el
    this.autoBind()
    this.listen()
  }

  /**
   * Unbinds events from the element and deletes the reference.
   * To be called when the instance is not needed anymore for cleanup.
   */
  destroy() {
    this.unlisten()
    this.el = null
  }

  setPointerDown({clientX, clientY}) {
    this.pointerX = clientX
    this.pointerY = clientY

    this.isPointerDown = true
    this.el.classList.add('is-pointer-down')
  }

  setPointerUp() {
    if (!this.isPointerDown) return

    this.isPointerDown = false
    this.pointerX = this.pointerY = null
    this.el.classList.remove('is-pointer-down')
    this.emit('dragend')
  }

  setPointerPos(xCoord, yCoord) {
    if (this.isPointerDown) {
      this.emitDrag(xCoord, yCoord)
    }

    this.pointerX = xCoord
    this.pointerY = yCoord
  }

  emitDrag(xCoord, yCoord) {
    this.emit('drag', {
      deltaX: this.pointerX - xCoord,
      clientX: xCoord,
      deltaY: this.pointerY - yCoord,
      clientY: yCoord
    })
  }

  onTouchStart(e) {
    this.setPointerDown(e.touches[0])
  }

  onTouchMove(e) {
    this.setPointerPos(
      e.touches[0].clientX,
      e.touches[0].clientY,
    )
  }

  onTouchEnd() {
    this.setPointerUp()
  }

  onMouseDown(e) {
    this.setPointerDown(e)
  }

  onMouseMove(e) {
    this.setPointerPos(
      e.clientX,
      e.clientY
    )
  }

  onMouseUp() {
    this.setPointerUp()
  }

  listen() {
    on(this.el, 'touchstart', this.onTouchStart, {passive: hasPassiveEvents})
    on(window, 'touchmove', this.onTouchMove, {passive: hasPassiveEvents})
    on(window, 'touchend', this.onTouchEnd, {passive: hasPassiveEvents})

    on(this.el, 'mousedown', this.onMouseDown)
    on(window, 'mousemove', this.onMouseMove)
    on(window, 'mouseup', this.onMouseUp)
  }

  unlisten() {
    off(this.el, 'touchstart', this.onTouchStart)
    off(window, 'touchmove', this.onTouchMove)
    off(window, 'touchend', this.onTouchEnd)

    off(this.el, 'mousedown', this.onMouseDown)
    off(window, 'mousemove', this.onMouseMove)
    off(window, 'mouseup', this.onMouseUp)
  }

  autoBind() {
    this.onTouchStart = this.onTouchStart.bind(this)
    this.onTouchMove = this.onTouchMove.bind(this)
    this.onTouchEnd = this.onTouchEnd.bind(this)

    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
  }
}

export default DragEmitter
