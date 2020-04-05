

# Okiba / SmoothScroll
Makes elements scroll smoothly with lerped translations
Can be extended or instantiated




```javascript
import { qs } from '@okiba/dom'
import Component from '@okiba/component'
import SmoothScroll from '@okiba/smooth-scroll'

const app = new Component({
  el: qs('#app'),
  components: [
    {
      ghost: true,
      type: SmoothScroll
    }
  ]
})
```



### Installation

```bash
npm i --save @okiba/smooth-scroll
```

Or import it directly in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/smooth-scroll/index.js"></script>
```

## Usage

```javascript
import SmoothScroll from '@okiba/smooth-scroll'
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







## constructor(args, args.el, args.options, args.options.elements, args.options.enabled)









#### Arguments


##### + `args`: `Object`

Arguments to create a component


##### + `args.el`: `Element`

DOM Element to be bound


##### + `args.options`: `Object`

Custom options passed to the component


##### + `args.options.elements`: `String` | _optional_ - _default_: `'.js-scroll-element'`

The css selector of element to be translated


##### + `args.options.enabled`: `Boolean` | _optional_ - _default_: `true`

Defines if smooth scroll is enabled





## enable()


Enables component's features







## disable()


Disables component's features







## onScroll(data)


Updates inner elements on scroll







#### Arguments


##### + `data`: `Object`

Scroll event's data





## listen()


Adds scroll event listener to ScrollManager







## unlisten()


Removes scroll event listener from ScrollManager







## onDestroy()


Removes all event listeners on destroy from ScrollManager






