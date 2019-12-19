

# Okiba / SmoothScroll
Makes elements scroll smoothly with lerped translations
Can be extended or instantiated




```javascript
import { qs } from '@okiba/dom'
import Component from '@okiba/component'
import SmoothScroll from '@okiba/smooth-scroll'

const app = new Component({
  el: qs('#app'),
  components: [
    {
      ghost: true,
      type: SmoothScroll
    }
  ]
})
```



### Installation

You can grab it as an `npm` package 
```bash
npm i --save @okiba/smooth-scroll
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/smooth-scroll@1.0.3/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/smooth-scroll@1.0.3/dist/index.js"></script>
```




## enable()


Enables component's features







## disable()


Disables component's features







## onScroll(data)


Updates inner elements on scroll







#### Arguments


##### + `data`: `Object`

Scroll event's data





## listen()


Adds scroll event listener to ScrollManager







## unlisten()


Removes scroll event listener from ScrollManager







## onDestroy()


Removes all event listeners on destroy from ScrollManager






