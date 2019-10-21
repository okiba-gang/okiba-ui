import EventEmitter from '@okiba/event-emitter'
import EventManager from '@okiba/event-manager'
import SizesCache from '@okiba/sizes-cache'
import {lerp} from '@okiba/math'


export default new class ScrollManager extends EventEmitter {
  constructor() {
    super()

    this.targetY = this.lerpY =  window.scrollY || window.pageYOffset

    this.emit('scroll', {y: this.targetY, delta: 0, acceleration: 0})
    this.listen()
  }

  // Puo essere tolto metodo
  disable() {
    if (!this.isEnabled) return
    this.isEnabled = false
  }

  enable() {
    if (this.isEnabled) return
    this.isEnabled = true
  }

  onRaf = () => {
    if (!this.isEnabled || this.lerpY === this.targetY) return

    this.deltaLerpY = this.lerpY
    this.lerpY = lerp(this.lerpY, this.targetY, 0.1)
    this.deltaLerpY -= this.lerpY

    if (Math.abs(this.deltaLerpY) < 0.02) {
      this.lerpY = this.targetY
      this.deltaLerpY = 0
    }

    this.emit('scroll', {
      y: ~~this.lerpY,
      delta: this.deltaLerpY,
      acceleration: this.deltaLerpY / SizesCache.window.height
    })
  }

  onChange = () => {
    this.deltaY = (window.scrollY || window.pageYOffset) - this.targetY
    this.targetY += this.deltaY

    if (!this.isEnabled) {
      this.emit('scroll', {
        y: this.targetY,
        delta: this.deltaY,
        acceleration: this.deltaY / SizesCache.window.height
      })
    }
  }

  listen() {
    EventManager.on('raf', this.onRaf)
    EventManager.on('scroll', this.onChange)
    EventManager.on('resize', this.onChange)
  }
}
