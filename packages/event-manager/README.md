

# Okiba / event-manager
A class that extends EventEmitter (@okiba/event-emitter) to centralize resize and scroll events and RequestAnimationFrame handler




```javascript
// ./main.js

import EventManager from '@okiba/event-manager

EventManager.on('scroll', function(){ console.log(window.scrollY) })
EventManager.on('resize', ({ width, height }) => {
   this.el.innerHTML = `width: ${width}px<br>height: ${height}px`
})
EventManager.on('raf', (timestamp) => {
   this.el.innerText = `timestamp: ${timestamp}`
})
```



### Installation

You can grab it as an `npm` package 
```bash
npm i --save @okiba/event-manager
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/event-manager@1.0.0/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/event-manager@1.0.0/dist/index.js"></script>
```




## dispatchScroll()


Polyfilled custom event ie9+







## onResize()


Callback of window resize event. Automatically emit a 'resize' event passing the new window width and height and a native scroll event







## onScroll()


Callback of window scroll event. Automatically emit a 'scroll' event passing the native event







## listen()


Adds event listeners on window resize, window scroll and requestAnimationFrame







## unlisten()


Removes event listeners on window resize, window scroll and requestAnimationFrame






