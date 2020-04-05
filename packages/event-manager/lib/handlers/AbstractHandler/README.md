

# Okiba / AbstractHandler
A base class that defines a global event handler interface




### Installation

You can grab it as a `npm` package
```bash
npm i --save @okiba/lib/handlers/AbstractHandler
```
or you can grab it from UI
```bash
npm i --save @okiba/ui
```
```javascript
import AbstractHandler from '@okiba/ui/lib/handlers/AbstractHandler'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/lib/handlers/AbstractHandler/index.js"></script>
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







## eventCallback(nativePayload)


A callback that dispatches the subscribed global event when the related native event occurs







#### Arguments


##### + `nativePayload`: `Event`

The original payload returned by native event





## listen()


The listen interface method (must be extended)







## unlisten()


The unlisten interface method (must be extended)






