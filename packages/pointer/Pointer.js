/**
 * @module Pointer
 * @description Handles pointer movements and interceptions
 * @example
 * import Pointer from '@okiba/pointer'
 *
 * function onMoveCallback({ x, y }, target) {...}
 * function onViewportEnterCallback() {...}
 * function onViewportLeavesCallback() {...}
 * function onLinkEnter({ x, y }, target) {...}
 * function onLinkLeave({ x, y }, target) {...}
 *
 * Pointer.on('move', onMoveCallback)
 * Pointer.on('viewportEnter', onViewportEnterCallback)
 * Pointer.on('viewportLeave', onViewportLeaveCallback)
 * Pointer.addInterceptors({
 *  'a': {
 *    onEnter: onLinkEnter
 *    onLeave: onLinkLeave
 *  }
 * })
 *
 */
import { on, off, eventCoords } from '@okiba/dom'
import EventEmitter from '@okiba/event-emitter'

export default new class Pointer extends EventEmitter {
  /**
   * @constructor
   */
  constructor() {
    super()
    this.coords = { x: 0, y: 0 }
    this.interceptors = {}
    this.interception = null
    this.listen()
  }

  /**
   * Triggers viewportEnter event
   * @param {Event} e The mouseenter event
   */
  onViewportEnter = ({ target }) => {
    this.emit('viewportEnter', { coords: this.coords, target })
  }

  /**
   * Triggers viewportLeave event
   * @param {Event} e The mouseleave event
   */
  onViewportLeave = ({ target }) => {
    this.emit('viewportLeave', { coords: this.coords, target })
  }

  /**
   * Handles pointer overing
   * @param {Event} e The mouseover event
   */
  onOver = ({ target }) => {
    const callbacks = this.getInterceptionCallbacks(target)

    if (callbacks) {
      this.onTargetEnter(target, callbacks)
    }
  }

  /**
   * Handles pointer down
   * @param {Event} e The mousedown event
   */
  onDown = ({ target }) => {
    this.emit('down', { coords: this.coords, target })
  }

  /**
   * Handles pointer up
   * @param {Event} e The mouseup event
   */
  onUp = ({ target }) => {
    this.emit('up', { coords: this.coords, target })
  }

  /**
   * Handles pointer moving
   * @param {Event} e The mousemove event
   */
  onMove = e => {
    const { clientX: x, clientY: y } = eventCoords(e)
    this.coords = { x, y }
    this.emit('move', { coords: this.coords, target: e.target })
  }

  /**
   * Handles interception start
   * @param {HTMLElement} target The element that pointer has entered in
   * @param {Object} callbacks The interception callbacks
   */
  onTargetEnter = (target, { onEnter, onLeave } = {}) => {
    this.interception = { target, onEnter, onLeave }

    if (typeof onEnter === 'function') {
      onEnter({ coords: this.coords, target })
    }

    on(target, 'mouseleave', this.onTargetLeave)
  }

  /**
   * Handles interception end
   */
  onTargetLeave = () => {
    const { target, onLeave } = this.interception

    off(target, 'mouseleave', this.onTargetLeave)

    if (typeof onLeave === 'function') {
      onLeave({ coords: this.coords, target })
    }

    this.interception = null
  }

  /**
   * Retrieves interception callbacks by event target
   * @param {HTMLElement} target The event target
   * @returns {Object}
   */
  getInterceptionCallbacks(target) {
    const selectors = Object.keys(this.interceptors)
    if (!selectors.length) return undefined
    const key = selectors.find((selector => target.matches(selector)))
    return !!key && this.interceptors[key]
  }

  /**
   * Adds interceptors
   * @param {Object} interceptors The interceptors collection
   */
  addInterceptors(interceptors = {}) {
    Object.entries(interceptors).forEach(([selector, callbacks = {}]) => {
      if (this.interceptors.hasOwnProperty(selector)) {
        console.warn(`An interceptor for selector ${selector} already exists`)
      } else {
        this.interceptors[selector] = callbacks
      }
    })
  }

  /**
   * Removes interceptors
   * @param {String[]} selectors The interception target selectors
   */
  removeInterceptors(selectors = []) {
    selectors.forEach(selector => {
      if (this.interceptors.hasOwnProperty(selector)) {
        delete this.interceptors[selector]
      } else {
        console.warn(`Trying to remove an undefined interceptor for selector ${selector}`)
      }
    })
  }

  listen() {
    on(document, 'mouseenter', this.onViewportEnter)
    on(document, 'mouseleave', this.onViewportLeave)
    on(document, 'mouseover', this.onOver)
    on(document, 'mousedown', this.onDown)
    on(document, 'mouseup', this.onUp)
    on(window, 'mousemove', this.onMove)
  }

  /**
   * Destroys pointer
   */
  unlisten() {
    off(document, 'mouseenter', this.onViewportEnter)
    off(document, 'mouseleave', this.onViewportLeave)
    off(document, 'mouseover', this.onOver)
    off(document, 'mousedown', this.onDown)
    off(document, 'mouseup', this.onUp)
    off(window, 'mousemove', this.onMove)
  }
}
