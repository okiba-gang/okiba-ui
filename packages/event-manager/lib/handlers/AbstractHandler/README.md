

# Okiba / AbstractHandler
A base class that defines a global event handler interface




### Installation

```bash
npm i --save @okiba/lib/handlers/AbstractHandler
```

Or import it directly in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/lib/handlers/AbstractHandler/index.js"></script>
```

## Usage

```javascript
import AbstractHandler from '@okiba/lib/handlers/AbstractHandler'
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







## constructor(config)









#### Arguments


##### + `config`: `Object`

The handler configuration





## eventCallback(nativePayload)


A callback that dispatches the subscribed global event when the related native event occurs







#### Arguments


##### + `nativePayload`: `Event`

The original payload returned by native event





## listen()


The listen interface method (must be extended)







#### Returns

`Boolean` Operation success
## unlisten()


The unlisten interface method (must be extended)







#### Returns

`Boolean` Operation success
## dispatch(payload)


Event dispatcher







#### Arguments


##### + `payload`: `any`

The event payload




