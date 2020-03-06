import { hasTouch } from '@okiba/detect'
import { eventCoords } from '@okiba/dom'
import EventManager from '@okiba/event-manager'

/*=======================*/
/* Pointer global events */
/*=======================*/
EventManager.subscribe('pointermove', {
  type: hasTouch ? 'touchmove' : 'mousemove',
  target: window
})

EventManager.subscribe('pointerinview', {
  type: hasTouch ? ['touchstart', 'touchend'] : ['mouseenter', 'mouseleave'],
  target: document,
  payloadFilter: ({ type }) => ['touchstart', 'mouseenter'].includes(type)
})

EventManager.subscribe('pointerover', {
  type: hasTouch ? 'touchmove' : 'mouseover',
  target: document.body
})

if (!hasTouch) {
  EventManager.subscribe('pointerdown', {
    type: 'mousedown',
    target: window
  })

  EventManager.subscribe('pointerup', {
    type: 'mouseup',
    target: window
  })
}

/**
 * Global pointer coords
 * @private
 */
let _coords = {}

EventManager.on('pointermove', e => {
  const { clientX: x, clientY: y } = eventCoords(e)
  _coords = { x, y }
})

/*================*/
/* Public exports */
/*================*/
export default {
  get coords() {
    return _coords
  }
}
