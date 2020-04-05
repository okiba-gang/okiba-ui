

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

You can grab it as a `npm` package
```bash
npm i --save @okiba/view-progress
```
or you can grab it from UI
```bash
npm i --save @okiba/ui
```
```javascript
import ViewProgress from '@okiba/ui/view-progress'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/view-progress/index.js"></script>
```

## Usage

#### Untranspiled code 🛑
Okiba UI packages are not transpiled, so __don't forget to transpile them with your favourite bundler__.
For example, using Babel with Webpack, you should prevent imports from okiba to be excluded from transpilation, like follows:
```javascript
{
  test: /\.js$/,
  exclude: /node_modules\/(?!(@okiba)\/).*/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
}
```







## constructor(args, args.el, args.options, args.options.overflow, args.options.thresholdTop, args.options.thresholdBottom)









#### Arguments


##### + `args`: `Object`

Arguments to create a component


##### + `args.el`: `Element`

DOM Element to be bound


##### + `args.options`: `Object`

Custom options passed to the component


##### + `args.options.overflow`: `Boolean`

Keeps emitting progress even if elements is out of viewport


##### + `args.options.thresholdTop`: `Number`

A value added to element's top position to adjust its bounding area


##### + `args.options.thresholdBottom`: `Number`

A value added to element's bot position to adjust its bounding area





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






