# Okiba Components

______

## Full Components List:


#### [detect](https://github.com/okiba-gang/okiba-components/tree/master/packages/detect)
Utilities to check some browser features

###### [`hasPassiveEvents`](https://github.com/okiba-gang/okiba-components/tree/master/packages/detect#haspassiveevents), [`hasTouch`](https://github.com/okiba-gang/okiba-components/tree/master/packages/detect#hastouch)
---

#### [event-manager](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager)
A class that extends EventEmitter (@okiba/event-emitter) to centralize resize and scroll events and RequestAnimationFrame handler

###### [`dispatchScroll`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager#dispatchscroll), [`onResize`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager#onresize), [`onScroll`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager#onscroll), [`listen`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager#listen), [`unlisten`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager#unlisten)
---

#### [scroll-container](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-container)
A class that extends Component (@okiba/component). When is enabled, it set the height of body with the element body, and set the element in fixed position so you can use the native scroll to animate what you want.

###### [`disable`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-container#disable), [`enable`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-container#enable), [`onResize`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-container#onresize), [`updateBodyHeight`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-container#updatebodyheight), [`listen`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-container#listen), [`unlisten`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-container#unlisten), [`onDestroy`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-container#ondestroy)
---

#### [scroll-element](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-element)
A class that extends Component (@okiba/component). When enabled, this component translate the dom element to the last Y passed to `onScroll` function

###### [`disable`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-element#disable), [`enable`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-element#enable), [`update`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-element#updateargs-y), [`onRaf`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-element#onraf), [`onResize`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-element#onresize), [`listen`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-element#listen), [`unlisten`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-element#unlisten), [`onDestroy`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-element#ondestroy)
---

#### [scroll-manager](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-manager)
A class that extends EventEmitter (@okiba/event-emitter). Basically emits `scroll` events in two different ways, when enabled it lerp the scroll position and emits `scroll` events on request animation frame, when disable is like a proxy of native scroll events.

###### [`disable`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-manager#disable), [`enable`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-manager#enable), [`onRaf`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-manager#onraf), [`onChange`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-manager#onchange), [`listen`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-manager#listen), [`unlisten`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-manager#unlisten), [`trigger`](https://github.com/okiba-gang/okiba-components/tree/master/packages/scroll-manager#trigger)
---

#### [sizes-cache](https://github.com/okiba-gang/okiba-components/tree/master/packages/sizes-cache)
A class to compute and cache element sizes.

###### [`get`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sizes-cache#getel), [`compute`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sizes-cache#computeel), [`onResize`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sizes-cache#onresize), [`listen`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sizes-cache#listen), [`unlisten`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sizes-cache#unlisten), [`reset`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sizes-cache#reset)
---

#### [smooth-scroll](https://github.com/okiba-gang/okiba-components/tree/master/packages/smooth-scroll)
Makes elements scroll smoothly with lerped translations
Can be extended or instantiated

###### [`enable`](https://github.com/okiba-gang/okiba-components/tree/master/packages/smooth-scroll#enable), [`disable`](https://github.com/okiba-gang/okiba-components/tree/master/packages/smooth-scroll#disable), [`onScroll`](https://github.com/okiba-gang/okiba-components/tree/master/packages/smooth-scroll#onscrolldata), [`listen`](https://github.com/okiba-gang/okiba-components/tree/master/packages/smooth-scroll#listen), [`unlisten`](https://github.com/okiba-gang/okiba-components/tree/master/packages/smooth-scroll#unlisten), [`onDestroy`](https://github.com/okiba-gang/okiba-components/tree/master/packages/smooth-scroll#ondestroy)
---

#### [sticky-content](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content)
Makes an element sticky according to page scroll
Can be extended or instantiated

###### [`module:StickyContent`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content#module:stickycontentargs-args.el-args.options-args.options.targetSelector-args.options.overflow), [`enable`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content#enable), [`disable`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content#disable), [`update`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content#updateargs-args.y), [`onResize`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content#onresize), [`listen`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content#listen), [`unlisten`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content#unlisten), [`onDestroy`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content#ondestroy)
---

#### [view-progress](https://github.com/okiba-gang/okiba-components/tree/master/packages/view-progress)
Retrieves the percentage (0 to 1) of element's in-view portion according to page scroll
Can be extended or instantiated

###### [`update`](https://github.com/okiba-gang/okiba-components/tree/master/packages/view-progress#updateargs-args.y), [`onResize`](https://github.com/okiba-gang/okiba-components/tree/master/packages/view-progress#onresize), [`listen`](https://github.com/okiba-gang/okiba-components/tree/master/packages/view-progress#listen), [`unlisten`](https://github.com/okiba-gang/okiba-components/tree/master/packages/view-progress#unlisten), [`onDestroy`](https://github.com/okiba-gang/okiba-components/tree/master/packages/view-progress#ondestroy)



