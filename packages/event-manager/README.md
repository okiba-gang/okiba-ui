

# Okiba / EventManager
A custom events management system




### Installation

```bash
npm i --save @okiba/event-manager
```

Or import it directly in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/event-manager/index.js"></script>
```

## Usage

```javascript
import EventManager from '@okiba/event-manager'
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


### Submodules:

#### [EventManager]()
A singleton to manage centralized event listeners

###### [`subscribedEvents`](), [`hasListeners`](), [`subscribe`](), [`unsubscribe`](), [`update`](), [`on`](), [`off`](), [`emit`](), [`clear`](), [`destroy`]()


#### [AbstractHandler]()
A base class that defines a global event handler interface

###### [`module:AbstractHandler`](), [`eventCallback`](), [`listen`](), [`unlisten`]()


#### [EventHandler]()
An handler class aimed to centralize a native browser event listener

###### [`listen`](), [`unlisten`]()


#### [RAFHandler]()
An handler class aimed to centralize a requestAnimationFrame

###### [`nextFrame`](), [`listen`](), [`unlisten`]()







