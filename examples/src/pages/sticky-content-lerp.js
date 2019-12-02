import { qs } from '@okiba/dom'
import Component from '@okiba/component'
import StickyContent from '@okiba/sticky-content'
import ScrollManager from '@okiba/scroll-manager'
import { hasTouch } from '@okiba/detect'

class StickyComponent extends StickyContent {
  constructor(args) {
    super(args)
    !hasTouch && ScrollManager.enable()
    ScrollManager.on('scroll', this.update)
  }
}

const app = new Component({
  el: qs('#app'),
  components: [
    {
      selector: '#sticky',
      type: StickyComponent
    }
  ]
})
