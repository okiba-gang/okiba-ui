# Okiba Components

______

## Full Components List:


#### [detect](https://github.com/okiba-gang/okiba-components/tree/master/packages/detect)
Utilities to check some browser features
###### [`hasPassiveEvents`](https://github.com/okiba-gang/okiba-components/tree/master/packages/detect#haspassiveevents), [`hasTouch`](https://github.com/okiba-gang/okiba-components/tree/master/packages/detect#hastouch)

---










#### [event-manager](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager)
A custom events management system
###### 
#### Submodules:

##### [EventManager](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/EventManager)
A singleton to manage centralized event listeners

###### [`subscribedEvents`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/EventManager), [`hasListeners`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/EventManager), [`subscribe`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/EventManager), [`unsubscribe`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/EventManager), [`on`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/EventManager), [`off`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/EventManager), [`emit`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/EventManager), [`clear`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/EventManager), [`destroy`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/EventManager)


##### [AbstractHandler](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/handlers/AbstractHandler)
A base class that defines a global event handler interface

###### [`eventCallback`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/handlers/AbstractHandler), [`listen`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/handlers/AbstractHandler), [`unlisten`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/handlers/AbstractHandler)


##### [EventHandler](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/handlers/EventHandler)
An handler class aimed to centralize a native browser event listener

###### [`listen`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/handlers/EventHandler), [`unlisten`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/handlers/EventHandler)


##### [RAFHandler](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/handlers/RAFHandler)
An handler class aimed to centralize a requestAnimationFrame

###### [`nextFrame`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/handlers/RAFHandler), [`listen`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/handlers/RAFHandler), [`unlisten`](https://github.com/okiba-gang/okiba-components/tree/master/packages/event-manager/lib/handlers/RAFHandler)



---






#### [pointer](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer)
A package that helps to manage custom cursors and pointer based implementations
###### 
#### Submodules:

##### [Pointer](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Pointer)
A wrapper class that collects normalized (both mouse and touch) pointer information

###### [`coords`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Pointer), [`target`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Pointer), [`inview`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Pointer), [`lastEvent`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Pointer), [`matches`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Pointer)


##### [Cursor](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Cursor)
A base component aimed to handle a custom html cursor

###### [`setup`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Cursor), [`show`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Cursor), [`hide`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Cursor), [`move`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Cursor), [`hover`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Cursor), [`reset`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Cursor), [`onPointerInView`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Cursor), [`onPointerMove`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Cursor), [`onPointerOver`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Cursor), [`onRAF`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Cursor), [`onResize`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Cursor), [`listen`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Cursor), [`onDestroy`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Cursor), [`defaultTriggers`](https://github.com/okiba-gang/okiba-components/tree/master/packages/pointer/lib/Cursor)



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
###### [`module:StickyContent`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content#module:stickycontentargs-args.el-args.options-args.options.targetSelector-args.options.overflow-args.options.thresholdTop), [`enable`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content#enable), [`disable`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content#disable), [`update`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content#updateargs-args.y), [`onResize`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content#onresize), [`listen`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content#listen), [`unlisten`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content#unlisten), [`onDestroy`](https://github.com/okiba-gang/okiba-components/tree/master/packages/sticky-content#ondestroy)

---


#### [view-progress](https://github.com/okiba-gang/okiba-components/tree/master/packages/view-progress)
Retrieves the percentage (0 to 1) of element's in-view portion according to page scroll
Can be extended or instantiated
###### [`update`](https://github.com/okiba-gang/okiba-components/tree/master/packages/view-progress#updateargs-args.y), [`onResize`](https://github.com/okiba-gang/okiba-components/tree/master/packages/view-progress#onresize), [`listen`](https://github.com/okiba-gang/okiba-components/tree/master/packages/view-progress#listen), [`unlisten`](https://github.com/okiba-gang/okiba-components/tree/master/packages/view-progress#unlisten), [`onDestroy`](https://github.com/okiba-gang/okiba-components/tree/master/packages/view-progress#ondestroy)





