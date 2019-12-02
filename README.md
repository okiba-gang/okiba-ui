# Okiba

[![Tests Status](https://github.com/okiba-gang/okiba/workflows/Run%20Tests/badge.svg)](https://github.com/okiba-gang/okiba/actions?workflow=Run+Tests)
[![Maintainability](https://api.codeclimate.com/v1/badges/29a8700f940f1019e52e/maintainability)](https://codeclimate.com/github/okiba-gang/okiba/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/29a8700f940f1019e52e/test_coverage)](https://codeclimate.com/github/okiba-gang/okiba/test_coverage)
🏅

Sharp collection of tools for front-end development, created with performance in mind.  🗡

Our primary concerns are: **maximum FPS** and **minimum bundle size** 🚀

You can visualize it as a bag full of **ninja tools** for you to pick and use to tackle your **front-end challenges**.

______


#### Okiba **is**:

##### A set of tools you can use separately.

It is meant to **level-up** and **ease-in** your web-development routines.

It's designed so that you can drop-in as much or as less you want, by importing just what you actually use, up to a single function level, so that your final bundle will stay slim.

It is always evolving and open to contributons from OSS peers.

#### Okiba **is not**:

##### A library, framework or language.

It is not meant to replace the tools you already have, but rather offer battle-tested solutions to common routine tasks; sometimes it offers a cheaper alternative.

It does not impose choiches and integrates smoothly with frameworks you already use.

______

We strive to achieve **affidability** and **affordability**.

#### Our granularity is *fine*

###### We `export` single units that you can `import` separately. ✨

This way **tree-shake** and **uglification** can work at their best.

Being **dependency-free** you always know what you're using and can look it up in our API, no surpises.


#### Our code is *DRY* and *minimal*

###### If something is common we abstract it away. 💡

We don't put something in until it is actually needed.

We strictly check for duplication and complexity, and take charge of some development pain in order to keep bundle size small.

#### Our seriousness level is *high*

###### Our quality checks are automated. 🤖

Metrics matter, so our CI tools help us by enforcing **100% coverage** and **A maintainability**.

No line makes it into `master` if the overall code quality gets degraded.

_We could state that our API is 100% documented, but we still have no tests in place to back this metric up... so we don't 🤡_

______

## Full API List:


#### [detect](https://github.com/okiba-gang/okiba/tree/master/packages/detect)
Utilities to check some browser features

###### [`hasPassiveEvents`](https://github.com/okiba-gang/okiba/tree/master/packages/detect#haspassiveevents), [`hasTouch`](https://github.com/okiba-gang/okiba/tree/master/packages/detect#hastouch)
---

#### [event-manager](https://github.com/okiba-gang/okiba/tree/master/packages/event-manager)
A class that extends EventEmitter (@okiba/event-emitter) to centralize resize and scroll events and RequestAnimationFrame handler

###### [`dispatchScroll`](https://github.com/okiba-gang/okiba/tree/master/packages/event-manager#dispatchscroll), [`onResize`](https://github.com/okiba-gang/okiba/tree/master/packages/event-manager#onresize), [`onScroll`](https://github.com/okiba-gang/okiba/tree/master/packages/event-manager#onscroll), [`listen`](https://github.com/okiba-gang/okiba/tree/master/packages/event-manager#listen), [`unlisten`](https://github.com/okiba-gang/okiba/tree/master/packages/event-manager#unlisten)
---

#### [scroll-container](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-container)
A class that extends Component (@okiba/component). When is enabled, it set the height of body with the element body, and set the element in fixed position so you can use the native scroll to animate what you want.

###### [`disable`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-container#disable), [`enable`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-container#enable), [`onResize`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-container#onresize), [`updateBodyHeight`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-container#updatebodyheight), [`listen`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-container#listen), [`unlisten`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-container#unlisten), [`onDestroy`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-container#ondestroy)
---

#### [scroll-element](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-element)
A class that extends Component (@okiba/component). When enabled, this component translate the dom element to the last Y passed to `onScroll` function

###### [`disable`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-element#disable), [`enable`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-element#enable), [`update`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-element#updateargs-y), [`onRaf`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-element#onraf), [`onResize`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-element#onresize), [`listen`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-element#listen), [`unlisten`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-element#unlisten), [`onDestroy`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-element#ondestroy)
---

#### [scroll-manager](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-manager)
A class that extends EventEmitter (@okiba/event-emitter). Basically emits `scroll` events in two different ways, when enabled it lerp the scroll position and emits `scroll` events on request animation frame, when disable is like a proxy of native scroll events.

###### [`disable`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-manager#disable), [`enable`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-manager#enable), [`onRaf`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-manager#onraf), [`onChange`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-manager#onchange), [`listen`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-manager#listen), [`unlisten`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-manager#unlisten), [`trigger`](https://github.com/okiba-gang/okiba/tree/master/packages/scroll-manager#trigger)
---

#### [sizes-cache](https://github.com/okiba-gang/okiba/tree/master/packages/sizes-cache)
A class to compute and cache element sizes.

###### [`get`](https://github.com/okiba-gang/okiba/tree/master/packages/sizes-cache#getel), [`compute`](https://github.com/okiba-gang/okiba/tree/master/packages/sizes-cache#computeel), [`onResize`](https://github.com/okiba-gang/okiba/tree/master/packages/sizes-cache#onresize), [`listen`](https://github.com/okiba-gang/okiba/tree/master/packages/sizes-cache#listen), [`unlisten`](https://github.com/okiba-gang/okiba/tree/master/packages/sizes-cache#unlisten), [`reset`](https://github.com/okiba-gang/okiba/tree/master/packages/sizes-cache#reset)
---

#### [smooth-scroll](https://github.com/okiba-gang/okiba/tree/master/packages/smooth-scroll)
Makes elements scroll smoothly with lerped translations
Can be extended or instantiated

###### [`enable`](https://github.com/okiba-gang/okiba/tree/master/packages/smooth-scroll#enable), [`disable`](https://github.com/okiba-gang/okiba/tree/master/packages/smooth-scroll#disable), [`onScroll`](https://github.com/okiba-gang/okiba/tree/master/packages/smooth-scroll#onscrolldata), [`listen`](https://github.com/okiba-gang/okiba/tree/master/packages/smooth-scroll#listen), [`unlisten`](https://github.com/okiba-gang/okiba/tree/master/packages/smooth-scroll#unlisten), [`onDestroy`](https://github.com/okiba-gang/okiba/tree/master/packages/smooth-scroll#ondestroy)
---

#### [sticky-content](https://github.com/okiba-gang/okiba/tree/master/packages/sticky-content)
Makes an element sticky according to page scroll
Can be extended or instantiated

###### [`module:StickyContent`](https://github.com/okiba-gang/okiba/tree/master/packages/sticky-content#module:stickycontentargs-args.el-args.options-args.options.targetSelector-args.options.overflow), [`enable`](https://github.com/okiba-gang/okiba/tree/master/packages/sticky-content#enable), [`disable`](https://github.com/okiba-gang/okiba/tree/master/packages/sticky-content#disable), [`update`](https://github.com/okiba-gang/okiba/tree/master/packages/sticky-content#updateargs-args.y), [`onResize`](https://github.com/okiba-gang/okiba/tree/master/packages/sticky-content#onresize), [`listen`](https://github.com/okiba-gang/okiba/tree/master/packages/sticky-content#listen), [`unlisten`](https://github.com/okiba-gang/okiba/tree/master/packages/sticky-content#unlisten), [`onDestroy`](https://github.com/okiba-gang/okiba/tree/master/packages/sticky-content#ondestroy)
---

#### [view-progress](https://github.com/okiba-gang/okiba/tree/master/packages/view-progress)
Retrieves the percentage (0 to 1) of element's in-view portion according to page scroll
Can be extended or instantiated

###### [`update`](https://github.com/okiba-gang/okiba/tree/master/packages/view-progress#updateargs-args.y), [`onResize`](https://github.com/okiba-gang/okiba/tree/master/packages/view-progress#onresize), [`listen`](https://github.com/okiba-gang/okiba/tree/master/packages/view-progress#listen), [`unlisten`](https://github.com/okiba-gang/okiba/tree/master/packages/view-progress#unlisten), [`onDestroy`](https://github.com/okiba-gang/okiba/tree/master/packages/view-progress#ondestroy)



