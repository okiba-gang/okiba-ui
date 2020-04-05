import { qs } from '@okiba/core/dom'
import Cursor from '@okiba/ui/cursor'

const cursor = new Cursor({
  el: qs('.Cursor'),
  options: {
    inertia: 0.25
  }
})
