

# Okiba / ViewProgress
Retrieves the percentage (0 to 1) of element's in-view portion according to page scroll
Can be extended or instantiated




```javascript
import { qs, qsa, on } from '@okiba/dom'
import Component from '@okiba/component'
import ViewProgress from '@okiba/view-progress'

class ViewProgressComponent extends ViewProgress {
  constructor(args) {
    super(args)
    this.on('enter', this.onEnter)
    this.on('progress', this.onProgress)
    this.on('exit', this.onExit)
    this.update({ y: window.scrollY })
    on(window, 'scroll', () => this.update({ y: window.scrollY }))
  }

  onEnter = () => console.log()(`${this.el} entered`)
  onProgress = ({ progress }) => console.log(progress)
  onExit = () => console.log()(`${this.el} exited`)
}

const app = new Component({
  el: qs('#app'),
  components: [
    {
      selector: '.view-progress-element',
      type: ViewProgress
    }
  ]
})
```



### Installation

You can grab it as an `npm` package 
```bash
npm i --save @okiba/view-progress
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/view-progress@1.0.0/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/view-progress@1.0.0/dist/index.js"></script>
```




## update(args, args.y)


Updates element's progress and emits enter, exit and progress events according to passed scroll position







#### Arguments


##### + `args`: `Object`




##### + `args.y`: `Number`

The current scrollY





## onResize()


Updates element's boundaries according to current viewport sizes and page scrollable area







## listen()


Adds resize event listener to EventManager







## unlisten()


Removes resize event listener from EventManager







## onDestroy()


Removes all event listeners on destroy from EventManager






