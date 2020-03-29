

# Okiba / EventManager / AbstractHandler
A base class that defines the global event handler interface




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







## unlisten()


The unlisten interface method (must be extended)






