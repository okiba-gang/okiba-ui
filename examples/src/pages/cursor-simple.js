import { qs } from '@okiba/core/dom'
import { Cursor } from '@okiba/pointer'

const cursor = new Cursor({
  el: qs('.Cursor'),
  options: {
    inertia: 0.25
  }
})
