import EventManager from './lib/EventManager'
import { EventHandler, RAFHandler } from './lib/handlers'
import { dispatchEvent } from './lib/utils'

/*= =======================*/
/* Built-in global events */
/*= =======================*/
EventManager.subscribe('resize', {
  type: 'resize',
  target: window,
  debounce: 200,
  payloadFilter: () => ({
    width: window.innerWidth,
    height: window.innerHeight
  })
})

EventManager.subscribe('scroll', {
  type: 'scroll',
  target: window
})

EventManager.subscribe('raf', {
  handler: RAFHandler
})

EventManager.on('resize', () => dispatchEvent('scroll'))

/*= ===============*/
/* Public exports */
/*= ===============*/
export default EventManager
export { EventHandler, RAFHandler }
