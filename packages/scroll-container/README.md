

# Okiba / ScrollContainer
A class that extends Component (@okiba/component). When is enabled, it set the height of body with the element body, and set the element in fixed position so you can use the native scroll to animate what you want.




```javascript
import qs from '@okiba/dom'
import ScrollContainer from '@okiba/scroll-container'

const scrollContainer new ScrollContainer({el: qs('#app'), options: {enabled: true}})
```



### Installation

You can grab it as an `npm` package
```bash
npm i --save @okiba/scroll-container
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/scroll-container/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/scroll-container/dist/index.js"></script>
```







## disable()


Disable component feature and reset the dom element to initial style







## enable()


Enable component feature, set the body height to element height and set the element in position fixed







## onResize()


Resize handler







## updateBodyHeight()


Update the body height like the element height







## listen()


Adds event listeners







## unlisten()


Removes event listeners







## onDestroy()


Disable all component feature and remove all listeners






