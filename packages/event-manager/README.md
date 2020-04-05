

# Okiba / EventManager
A custom events management system




### Installation

You can grab it as a `npm` package
```bash
npm i --save @okiba/event-manager
```
or you can grab it from UI
```bash
npm i --save @okiba/ui
```
```javascript
import EventManager from '@okiba/ui/event-manager'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/event-manager/index.js"></script>
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


### Submodules:

#### [EventManager]()
A singleton to manage centralized event listeners

###### [`subscribedEvents`](), [`hasListeners`](), [`subscribe`](), [`unsubscribe`](), [`update`](), [`on`](), [`off`](), [`emit`](), [`clear`](), [`destroy`]()


#### [AbstractHandler]()
A base class that defines a global event handler interface

###### [`eventCallback`](), [`listen`](), [`unlisten`]()


#### [EventHandler]()
An handler class aimed to centralize a native browser event listener

###### [`listen`](), [`unlisten`]()


#### [RAFHandler]()
An handler class aimed to centralize a requestAnimationFrame

###### [`nextFrame`](), [`listen`](), [`unlisten`]()







