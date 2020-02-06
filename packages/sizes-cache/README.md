

# Okiba / SizesCache
A class to compute and cache element sizes.




```javascript
import { qs } from '@okiba/dom'
import SizesCache from '@okiba/size-cache'

const sizes = SizesCache.get(qs('#app'))
console.log(sizes)
```



### Installation

You can grab it as an `npm` package 
```bash
npm i --save @okiba/sizes-cache
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/sizes-cache@1.0.5/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/sizes-cache@1.0.5/dist/index.js"></script>
```




## get(el)


Element's sizes getter







#### Arguments


##### + `el`: `Element`







## compute(el)


Computes element's sizes







#### Arguments


##### + `el`: `Element`







## onResize()


Updates elements' sizes on resize







## listen()


Adds resize event listener to EventManager







## unlisten()


Removes resize event listener from EventManager







## reset()


Resets component's data






