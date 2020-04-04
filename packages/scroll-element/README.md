

# Okiba / ScrollElement
A class that extends Component (@okiba/component). When enabled, this component translate the dom element to the last Y passed to `onScroll` function




```javascript
import qs from '@okiba/dom'
import ScrollElement from '@okiba/scroll-element'

const scrollElement new ScrollElement({el: qs('#app'), options: {enabled: true}})
```



### Installation

You can grab it as an `npm` package
```bash
npm i --save @okiba/scroll-element
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/scroll-element/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/scroll-element/dist/index.js"></script>
```







## disable()


Disable component feature and reset the dom element transform







## enable()


Enable component feature







## update(args: {y})


Update the target Y to reach and request an animation frame if component is enabled
* Accepts an __hash__ whose properties can be:







#### Arguments


##### + `args`: `Object`

Arguments to create a component



###### + `y`: `Number`

Y to reach







## onRaf()


Update the translate Y of the element like to target Y







## onResize()


Update element bounds after a resize (top and bottom)







## listen()


Adds event listeners







## unlisten()


Removes event listeners







## onDestroy()


Destroy component removing event listeners






