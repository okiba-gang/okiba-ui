import { qs, qsa, on } from '@okiba/dom'
import Component from '@okiba/component'
import ViewProgress from '../../../packages/view-progress'

class ViewProgressComponent extends ViewProgress {
  constructor(args) {
    super(args)
    this.labels = qsa('.js-view-progress-label', this.el)
    this.on('enter', this.onEnter)
    this.on('progress', this.onProgress)
    this.on('exit', this.onExit)
    this.update({ y: window.scrollY })
    on(window, 'scroll', () => this.update({ y: window.scrollY }))
  }

  onEnter = () => this.el.classList.add('is-entered')

  onProgress = ({ progress }) => {
    this.labels.forEach(label => (label.innerText = progress))
  }

  onExit = () => this.el.classList.remove('is-entered')
}

const app = new Component({
  el: qs('#app'),
  components: [
    {
      selector: '.view-progress-element',
      type: ViewProgressComponent
    }
  ]
})
