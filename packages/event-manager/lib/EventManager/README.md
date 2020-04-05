

# Okiba / EventManager
A singleton to manage centralized event listeners




### Installation

You can grab it as a `npm` package
```bash
npm i --save @okiba/lib/EventManager
```
or you can grab it from UI
```bash
npm i --save @okiba/ui
```
```javascript
import EventManager from '@okiba/ui/lib/EventManager'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/lib/EventManager/index.js"></script>
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







## subscribedEvents()


Global events list getter







## hasListeners(type)


Checks if global event has registered callbacks







#### Arguments


##### + `type`: `String`

The event type





## subscribe(config)


Adds a global event(s)







#### Arguments


##### + `config`: `Object` or  `Array.<Object>`

Event(s) configuration(s)





## unsubscribe(types)


Removes a global event







#### Arguments


##### + `types`: `String` or  `Array.<String>`

The event(s) to be removed





## update(type, config)


Updates an existing global event







#### Arguments


##### + `type`: `String`

The event to be removed


##### + `config`: `Object` or  `Array.<Object>`

Event(s) configuration(s)





## on(type, callback)


Adds a global event listener







#### Arguments


##### + `type`: `String`

The event type


##### + `callback`: `function`

The event callback





## off(type, callback)


Removes a global event listener







#### Arguments


##### + `type`: `String`

The event type


##### + `callback`: `function`

The event callback





## emit(type, payload)


Proxies event dispatching







#### Arguments


##### + `type`: `String`

The event type


##### + `payload`: `*`

The event payload





## clear(events)


Clears all registered callbacks







#### Arguments


##### + `events`: `Array`

The global events to clear





## destroy(events)


Destroys all listeners, callbacks and handlers







#### Arguments


##### + `events`: `Array`

The global events to destroy




