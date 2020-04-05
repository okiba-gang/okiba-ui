

# Okiba / SizesCache
A class to compute and cache element sizes.




```javascript
import { qs } from '@okiba/dom'
import SizesCache from '@okiba/size-cache'

const sizes = SizesCache.get(qs('#app'))
console.log(sizes)
```



### Installation

You can grab it as a `npm` package
```bash
npm i --save @okiba/sizes-cache
```
or you can grab it from UI
```bash
npm i --save @okiba/ui
```
```javascript
import SizesCache from '@okiba/ui/sizes-cache'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/sizes-cache/index.js"></script>
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






