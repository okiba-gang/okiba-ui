

# Okiba / Cursor
A base component aimed to handle a custom html cursor




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
npm i --save @okiba/lib/Cursor
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/lib/Cursor/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/lib/Cursor/dist/index.js"></script>
```







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







## defaultTriggers()


Default triggers selectors






