

# Okiba / StickyContent
Makes an element sticky according to page scroll
Can be extended or instantiated




```javascript
import { qs } from '@okiba/dom'
import Component from '@okiba/component'
import StickyContent from '@okiba/sticky-content'
import EventManager from '@okiba/event-manager'

class StickyComponent extends StickyContent {
  constructor(args) {
    super(args)
    EventManager.on('scroll', () => this.update({ y: window.scrollY }))
  }
}

const app = new Component({
  el: qs('#app'),
  components: [
    {
      selector: '.sticky',
      type: StickyComponent
    }
  ]
})
```



### Installation

You can grab it as an `npm` package 
```bash
npm i --save @okiba/sticky-content
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/sticky-content@1.0.1/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/sticky-content@1.0.1/dist/index.js"></script>
```




## constructor(args, args.el, args.options, args.options.targetSelector, args.options.overflow)









#### Arguments


##### + `args`: `Object`

Arguments to create a component


##### + `args.el`: `Element`

DOM Element to be bound


##### + `args.options`: `Object`

Custom options passed to the component


##### + `args.options.targetSelector`: `String`

The css selector of element to be made sticky


##### + `args.options.overflow`: `Boolean`

Keeps element sticky even if its limitY has been reached





## enable()


Enables component's features







## disable()


Disables component's features







## update(args, args.y)


Updates element's position according to passed scroll position







#### Arguments


##### + `args`: `Object`




##### + `args.y`: `Number`

The current scrollY





## onResize()


Updates element's boundaries according to current viewport sizes







## listen()


Adds resize event listener to EventManager







## unlisten()


Removes resize event listener from EventManager







## onDestroy()


Removes all event listeners on destroy from EventManager






