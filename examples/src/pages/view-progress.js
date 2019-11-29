import Component from '@okiba/component'
import { qs, on } from '@okiba/dom'
import ViewProgress from '@okiba/view-progress'

class ViewProgressComponent extends ViewProgress {
  constructor(args) {
    super(args)
    this.label = qs('.js-view-progress-label', this.el)
    this.on('enter', this.onEnter)
    this.on('progress', this.onProgress)
    this.on('exit', this.onExit)
    this.update({ y: window.scrollY })
    on(window, 'scroll', () => this.update({ y: window.scrollY }))
  }

  onEnter = () => this.el.classList.add('is-entered')

  onProgress = ({ progress }) => {
    this.label.innerText = progress
  }

  onExit = () => this.el.classList.remove('is-entered')
}

const app = new Component({
  el: qs('#app'),
  components: [
    {
      selector: '.js-view-progress-element',
      type: ViewProgressComponent
    }
  ]
})
