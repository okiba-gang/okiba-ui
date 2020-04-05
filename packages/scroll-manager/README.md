

# Okiba / ScrollManager
A class that extends EventEmitter (@okiba/event-emitter). Basically emits `scroll` events in two different ways, when enabled it lerp the scroll position and emits `scroll` events on request animation frame, when disable is like a proxy of native scroll events.




```javascript
import ScrollManager from '@okiba/scroll-manager'
import {hasTouch} from '@okiba/detect'

// Enable lerped scroll if device is not touch
hasTouch ? ScrollManager.disable() : ScrollManager.enable()
// Listen scroll events
ScrollManager.on('scroll', ({y, delta, acceleration, progress}) => console.log(y, delta, acceleration, progress))
```



### Installation

You can grab it as a `npm` package
```bash
npm i --save @okiba/scroll-manager
```
or you can grab it from UI
```bash
npm i --save @okiba/ui
```
```javascript
import ScrollManager from '@okiba/ui/scroll-manager'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/scroll-manager/index.js"></script>
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







## disable()


Disable lerped scroll calculation and remove the raf listener







## enable()


Enable lerped scroll calculation and add the raf listener







## onRaf()


Calculate the lerped scroll position and emit a scroll event.
The emitted scroll event pass an Object like:
```javascript
{
 y // Lerped Y
 delta // Difference between actual y and the last emitted y
 acceleration // The accelleration of the scroll
 progress // The global progress of the page
}
```







## onChange()


Callback of scroll event and update the target Y. If component is disable it emits a `scroll` event







## listen()


Adds event listeners







## unlisten()


Removes event listeners







## trigger()


Update the scroll based on the page scroll and trigger a `scroll` event






