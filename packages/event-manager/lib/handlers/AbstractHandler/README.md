

# Okiba / AbstractHandler
A base class that defines a global event handler interface




### Installation

You can grab it as an `npm` package
```bash
npm i --save @okiba/lib/handlers/AbstractHandler
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/lib/handlers/AbstractHandler@2.0.0/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/lib/handlers/AbstractHandler@2.0.0/dist/index.js"></script>
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






