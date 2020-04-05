

# Okiba / Pointer
A wrapper class that collects normalized (both mouse and touch) pointer information




```javascript
import Pointer from '@okiba/pointer'
import { MyCanvasApp } from '../path/to/my/components'

window.requestAnimationFrame(() => {
 MyCanvasApp.update(Pointer.coords, Pointer.target)
})
```



### Installation

You can grab it as a `npm` package
```bash
npm i --save @okiba/pointer
```
or you can grab it from UI
```bash
npm i --save @okiba/ui
```
```javascript
import Pointer from '@okiba/ui/pointer'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/pointer/index.js"></script>
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







## coords()


Coords getter







#### Returns

`Object` {x, y}
## target()


Last event target getter







#### Returns

`Event` 
## inview()


Returns pointer inview status







#### Returns

`Boolean` 
## lastEvent()


Last event getter







#### Returns

`Event` 
## matches(selectors, testAncestors)


Checks if last event target matches with given selectors







#### Arguments


##### + `selectors`: `Array.<String>`

The selectors list


##### + `testAncestors`: `Boolean`

If true, extends match test upward in the ancestors





#### Returns

`String` 