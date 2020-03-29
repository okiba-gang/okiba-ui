

# Okiba / Pointer / Cursor
Custom cursor base class




```javascript
import { Cursor } from '@okiba/pointer'

const cursor = new Cursor({
 el: document.getElementById('my-custom-cursor'),
 options: {
   inertia: 0.25
 }
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







## defaultTriggers()


Default triggers selectors







## constructor(props)









#### Arguments


##### + `props`: `Object`







## setup()


Sets cursor base styles (can be extended/overwritten)







## show()


Reveals cursor (can be extended)







## hide()


Unveils cursor (can be extended)







## move(inertia)


Animates cursor to pointer position (can be overwritten)







#### Arguments


##### + `inertia`: `Number`

The lerping factor





## hover(matchedSelector)


Handles hover event







#### Arguments


##### + `matchedSelector`: `Object`

The trigger selector





## reset()


Restores the cursor default state (should be implemented)







## onPointerInView(payload)


Handles pointer entering/leaving viewport callback







#### Arguments


##### + `payload`: `Object`

The pointer inview event payload





## onPointerMove(payload)


Updates cursor position







#### Arguments


##### + `payload`: `Object`

The pointermove event payload





## onPointerOver(e)


Handles pointer hover







#### Arguments


##### + `e`: `Event`

The mouseover/touchmove event





## onRAF()


Handles request animation frame







## onResize()


Handles resize







## listen()


Initializes listeners (can be extended)







## onDestroy()


Kills listeners (can be extended)






