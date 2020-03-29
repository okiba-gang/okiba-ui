

# Okiba / detect
Utilities to check some browser features




### Installation

You can grab it as an `npm` package
```bash
npm i --save @okiba/detect
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/detect@1.0.5/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/detect@1.0.5/dist/index.js"></script>
```







## hasPassiveEvents()


Check if browser supports passive events






```javascript
import {hasPassiveEvents} from '@okiba/detect'

console.log(hasPassiveEvents) // true
```




#### Returns

`Boolean` true if browser supports passive events
## hasTouch()


Check if browser has touch support






```javascript
import {hasTouch} from '@okiba/detect'

console.log(hasTouch) // true
```




#### Returns

`Boolean` true if browser has touch support