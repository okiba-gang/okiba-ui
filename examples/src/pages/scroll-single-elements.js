import { qs } from '@okiba/dom'
import Component from '@okiba/component'
import ScrollContainer from '@okiba/scroll-container'
import ScrollElement from '@okiba/scroll-element'

const app = new Component({
  el: qs('#app'),
  components: [
    {
      selector: '.js-scroll-container',
      type: ScrollContainer
    },
    {
      selector: '.js-scroll-element',
      type: ScrollElement
    }
  ]
})