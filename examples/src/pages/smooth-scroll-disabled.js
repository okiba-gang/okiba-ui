
import { qs } from '@okiba/core/dom'
import Component from '@okiba/core/component'
import SmoothScroll from '@okiba/ui/smooth-scroll'

const app = new Component({
  el: qs('#app'),
  components: [
    {
      ghost: true,
      type: SmoothScroll,
      options: {
        enabled: false
      }
    }
  ]
})
