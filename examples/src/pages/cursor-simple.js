import { qs } from '@okiba/dom'
import Cursor from '@okiba/cursor'

const cursor = new Cursor({
  el: qs('.Cursor'),
  options: {
    inertia: 0.25
  }
})
