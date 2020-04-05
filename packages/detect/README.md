

# Okiba / detect
Utilities to check some browser features




### Installation

```bash
npm i --save @okiba/detect
```

Or import it directly in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/detect/index.js"></script>
```

## Usage

```javascript
import detect from '@okiba/detect'
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







## hasPassiveEvents()


Check if browser supports passive events






```javascript
import {hasPassiveEvents} from '@okiba/detect'

console.log(hasPassiveEvents) // true
```




#### Returns

`Boolean` true if browser supports passive events
## hasTouch()


Check if browser has touch support






```javascript
import {hasTouch} from '@okiba/detect'

console.log(hasTouch) // true
```




#### Returns

`Boolean` true if browser has touch support