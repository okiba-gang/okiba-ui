import { qsa } from '@okiba/dom'
import Cursor from '../../../packages/cursor'

const circles = qsa('.Cursor_circle')
const cursor = circles.map((circle, i) => new Cursor({
  el: circle,
  options: {
    inertia: 0.36 / (circles.length - i)
  }
}))
