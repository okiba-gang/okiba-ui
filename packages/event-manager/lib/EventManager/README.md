

# Okiba / EventManager
A singleton to manage global (centralized) events




### Installation

You can grab it as an `npm` package
```bash
npm i --save @okiba/event-manager
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/event-manager@1.0.5/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/event-manager@1.0.5/dist/index.js"></script>
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




