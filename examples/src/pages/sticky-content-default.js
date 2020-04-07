import { qs } from '@okiba/dom'
import Component from '@okiba/component'
import StickyContent from '../../../packages/sticky-content'
import EventManager from '../../../packages/event-manager'

class StickyComponent extends StickyContent {
  constructor(args) {
    super(args)
    EventManager.on('scroll', () => this.update({ y: window.scrollY }))
  }
}

const app = new Component({
  el: qs('#app'),
  components: [
    {
      selector: '#sticky',
      type: StickyComponent,
      options: {
        thresholdTop: 200,
        overflow: true
      }
    }
  ]
})
