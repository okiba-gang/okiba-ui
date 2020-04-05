

# Okiba / ScrollContainer
A class that extends Component (@okiba/component). When is enabled, it set the height of body with the element body, and set the element in fixed position so you can use the native scroll to animate what you want.




```javascript
import qs from '@okiba/dom'
import ScrollContainer from '@okiba/scroll-container'

const scrollContainer new ScrollContainer({el: qs('#app'), options: {enabled: true}})
```



### Installation

```bash
npm i --save @okiba/scroll-container
```

Or import it directly in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/scroll-container/index.js"></script>
```

## Usage

```javascript
import ScrollContainer from '@okiba/scroll-container'
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


Disable component feature and reset the dom element to initial style







## enable()


Enable component feature, set the body height to element height and set the element in position fixed







## onResize()


Resize handler







## updateBodyHeight()


Update the body height like the element height







## listen()


Adds event listeners







## unlisten()


Removes event listeners







## onDestroy()


Disable all component feature and remove all listeners






