

# Okiba / EventHandler
An handler class aimed to centralize a native browser event listener




### Installation

```bash
npm i --save @okiba/lib/handlers/EventHandler
```

Or import it directly in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/lib/handlers/EventHandler/index.js"></script>
```

## Usage

```javascript
import EventHandler from '@okiba/lib/handlers/EventHandler'
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







## listen()









## unlisten()








