

# Okiba / ScrollElement
A class that extends Component (@okiba/component). When enabled, this component translate the dom element to the last Y passed to `onScroll` function




```javascript
import qs from '@okiba/dom'
import ScrollElement from '@okiba/scroll-element'

const scrollElement new ScrollElement({el: qs('#app'), options: {enabled: true}})
```



### Installation

```bash
npm i --save @okiba/scroll-element
```

Or import it directly in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/scroll-element/index.js"></script>
```

## Usage

```javascript
import ScrollElement from '@okiba/scroll-element'
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







## disable()


Disable component feature and reset the dom element transform







## enable()


Enable component feature







## update(args: {y})


Update the target Y to reach and request an animation frame if component is enabled
* Accepts an __hash__ whose properties can be:







#### Arguments


##### + `args`: `Object`

Arguments to create a component



###### + `y`: `Number`

Y to reach







## onRaf()


Update the translate Y of the element like to target Y







## onResize()


Update element bounds after a resize (top and bottom)







## listen()


Adds event listeners







## unlisten()


Removes event listeners







## onDestroy()


Destroy component removing event listeners






