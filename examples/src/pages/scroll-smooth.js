import { qs } from '@okiba/dom'
import Component from '@okiba/component'
import SmoothScroll from '@okiba/smooth-scroll'

const app = new Component({
  el: qs('#app'),
  components: [
    {
      selector: '#scrollable',
      type: SmoothScroll
    }
  ]
})
