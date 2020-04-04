

# Okiba / EventManager
A custom events management system




### Installation

You can grab it as an `npm` package
```bash
npm i --save @okiba/event-manager
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/event-manager/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/event-manager/dist/index.js"></script>
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







