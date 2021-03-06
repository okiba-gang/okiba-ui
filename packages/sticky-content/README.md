

# Okiba / StickyContent
Makes an element sticky according to page scroll
Can be extended or instantiated




```javascript
import { qs } from '@okiba/dom'
import Component from '@okiba/component'
import StickyContent from '@okiba/sticky-content'
import EventManager from '@okiba/event-manager'

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
      selector: '.sticky',
      type: StickyComponent
    }
  ]
})
```



### Installation

```bash
npm i --save @okiba/sticky-content
```

Or import it directly in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/sticky-content/index.js"></script>
```

## Usage

```javascript
import StickyContent from '@okiba/sticky-content'
```

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







## constructor(args, args.el, args.options, args.options.targetSelector, args.options.overflow, args.options.thresholdTop)









#### Arguments


##### + `args`: `Object`

Arguments to create a component


##### + `args.el`: `Element`

DOM Element to be bound


##### + `args.options`: `Object`

Custom options passed to the component


##### + `args.options.targetSelector`: `String`

The css selector of element to be made sticky


##### + `args.options.overflow`: `Boolean`

Keeps element sticky even if its limitY has been reached


##### + `args.options.thresholdTop`: `Number`

Adjusts start scroll position





## enable()


Enables component's features







## disable()


Disables component's features







## update(args, args.y)


Updates element's position according to passed scroll position







#### Arguments


##### + `args`: `Object`




##### + `args.y`: `Number`

The current scrollY





## onResize()


Updates element's boundaries according to current viewport sizes







## listen()


Adds resize event listener to EventManager







## unlisten()


Removes resize event listener from EventManager







## onDestroy()


Removes all event listeners on destroy from EventManager






