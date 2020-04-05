

# Okiba / RAFHandler
An handler class aimed to centralize a requestAnimationFrame




### Installation

You can grab it as a `npm` package
```bash
npm i --save @okiba/lib/handlers/RAFHandler
```
or you can grab it from UI
```bash
npm i --save @okiba/ui
```
```javascript
import RAFHandler from '@okiba/ui/lib/handlers/RAFHandler'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/lib/handlers/RAFHandler/index.js"></script>
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







## nextFrame(timestamp)


Recursively requires animation frame







#### Arguments


##### + `timestamp`: `Number`

The timestamp returned by requestAnimationFrame





## listen()









## unlisten()








