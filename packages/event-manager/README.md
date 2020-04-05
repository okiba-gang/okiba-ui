

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







