

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
<script src="https://unpkg.com/@okiba/smooth-scroll@1.0.6/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/smooth-scroll@1.0.6/dist/index.js"></script>
```







## constructor(args, args.el, args.options, args.options.elements, args.options.enabled)









#### Arguments


##### + `args`: `Object`

Arguments to create a component


##### + `args.el`: `Element`

DOM Element to be bound


##### + `args.options`: `Object`

Custom options passed to the component


##### + `args.options.elements`: `String` | _optional_ - _default_: `'.js-scroll-element'`

The css selector of element to be translated


##### + `args.options.enabled`: `Boolean` | _optional_ - _default_: `true`

Defines if smooth scroll is enabled





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






