

# Okiba / detect
Utilities to check some browser features




### Installation

You can grab it as a `npm` package
```bash
npm i --save @okiba/detect
```
or you can grab it from UI
```bash
npm i --save @okiba/ui
```
```javascript
import detect from '@okiba/ui/detect'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/detect/index.js"></script>
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