import { qs } from '@okiba/dom'
import Component from '@okiba/component'
import { hasTouch } from '../../../packages/detect'
import StickyContent from '../../../packages/sticky-content'
import ScrollManager from '../../../packages/scroll-manager'

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
