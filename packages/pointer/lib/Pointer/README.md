

# Okiba / Pointer / Pointer
A class that wraps pointer information




```javascript
import { Pointer } from '@okiba/pointer'
import { MyCanvasApp } from '../path/to/my/components'

window.requestAnimationFrame(() => {
 MyCanvasApp.update(Pointer.coords, Pointer.target)
})
```



### Installation

You can grab it as an `npm` package
```bash
npm i --save @okiba/pointer
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/pointer@1.0.0/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/pointer@1.0.0/dist/index.js"></script>
```







## coords()


Coords getter







#### Returns

`Object` {x, y}
## target()


Last event target getter







#### Returns

`Event` 
## inview()


Returns pointer inview status







#### Returns

`Boolean` 
## lastEvent()


Last event getter







#### Returns

`Event` 
## matches(selectors, testAncestors)


Checks if last event target matches with given selectors







#### Arguments


##### + `selectors`: `Array.<String>`

The selectors list


##### + `testAncestors`: `Boolean`

If true, extends match test upward in the ancestors





#### Returns

`String` 