import EventEmitter from '@okiba/event-emitter'
import EventManager from './event-manager'
import SizesCache from './sizes-cache'
import {hasTouch} from '@okiba/detect'
import {lerp, cap} from '@okiba/math'


export default new class ScrollManager extends EventEmitter {
  constructor() {
    super()

    hasTouch ? this.disable() : this.enable()
    this.listen()
    this.trigger()
  }

  disable() {
    this.isEnabled = false
    EventManager.off('raf', this.onRaf)
  }

  enable() {
    this.isEnabled = true
    EventManager.on('raf', this.onRaf)
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
      y: this.lerpY,
      delta: this.deltaLerpY,
      acceleration: this.deltaLerpY / SizesCache.window.height,
      progress: cap(this.lerpY / SizesCache.body.scrollArea, 0, 1)
    })
  }

  onChange = () => {
    this.deltaY = (window.scrollY || window.pageYOffset) - this.targetY
    this.targetY += this.deltaY

    if (!this.isEnabled) {
      this.emit('scroll', {
        y: this.targetY,
        delta: this.deltaY,
        acceleration: this.deltaY / SizesCache.window.height,
        progress: this.targetY / SizesCache.body.scrollArea
      })
    }
  }

  listen() {
    EventManager.on('scroll', this.onChange)
    EventManager.on('resize', this.onChange)
  }

  unlisten() {
    if (this.isEnabled) {
      EventManager.off('raf', this.onRaf)
    }
    EventManager.off('scroll', this.onChange)
    EventManager.off('resize', this.onChange)
  }

  trigger() {
    this.targetY = window.scrollY || window.pageYOffset
    this.lerpY = this.lerpY ? this.lerpY - 1 : this.targetY - 1
    this.emit('scroll', {
      y: this.targetY, delta: 0, acceleration: 0,
      progress: cap(this.targetY / SizesCache.body.scrollArea, 0, 1)
    })
  }
}
