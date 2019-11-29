# okiba-components
##### Set of ready-made components that offer new capabilities or solve specific issues

---

## Getting started
This boilerplate allows you to easily manage multiple packages as a monorepo and to facilitate their development by creating examples runnable over a dev server with *[HMR](https://webpack.js.org/concepts/hot-module-replacement/)*, so you can test their implementation and behaviours live.

### Requirements
The boilerplate is based on *Yarn*'s workspaces, so install it globally. Check out the [documentation](https://yarnpkg.com/en/docs/install).

### Workspace initialization
To initialize the workspace, run the following command:

```
npm run init
```

It will handle dependencies installation and lerna bootstrap.

### Development
To start developing both modules and examples, run the following command:

```
npm run dev
```

You can also launch modules and examples development separately, as shown below:

```
npm run dev:packages
```

```
npm run dev:examples
```

#### Routing
By starting global or examples-only development, a dev server will run on http://localhost:3000 and, for each view defined in *examples/views* folder, a route will be available and it'll correspond to its filename (e.g. http://localhost:3000/awesome-module).

### Production
To build both packages and examples run the following command:

```
npm run build
```

You can also compile modules and examples separately, as shown below:

```
npm run build:packages
```

```
npm run build:examples
```

On process complete, you can find the transpiled version of each module at *module-folder/dist*.

### Release
To release your modules, run the following command:

```
npm run publish
```

### Adding modules
You can write your own modules in *packages* folder as usual with *[Lerna](https://github.com/lerna/lerna)*.
More pratically, follow the structure below:

```
|-- packages
|   |-- awesome-module
|   |   |-- index.js
|   |   |-- package.json
```

where *index.js* will be your module's entry point and *package.json* will look like follows:

```json
{
  "name": "@okiba/awesome-module",
  "version": "0.0.1",
  "main": "dist/index.js",
  "module": "index.js",
  "license": "ISC",
  "peerDependencies": {}
}
```

At this point, since modules are part of an unique workspace and they may share dependencies, you can add common dependencies with by running following command from the root directory:

```
yarn add -W <module>
```

where the *-W* flag makes the dependency available in the whole workspace. If you're dealing with devDependency, use *-DW* flag instead of *-W*.

Alternatively, you can add module-specific dependencies by running the command below directly in the module's folder:

```
cd packages/awesome-module
yarn add [-D] <module>
```

#### Modules resolution
Thanks to *Lerna*, you can simply import one of your modules as a dependency of another module and it will be automatically resolved, like follows:

```js
/** packages/awesome-module/index.js */
import { hasPassiveEvents } from '@okiba/detect'

console.log(hasPassiveEvents)
```

__N.B.:__ The module's name used in import statement above must match with the one defined in module's package.json file.

### Adding examples
To create a new example, move to *examples* folder and add the following files:

- *src/awesome-module.js*: the logic implementation of the example
- *views/awesome-module.njk*: the html markup of the example

##### JS
Javascript side, you can import your modules and npm dependencies and freely implement whatever you want. Only don't forget to enable *HMR* for a more comfortable development:

```js
/** examples/src/awesome-module.js */
import _ from 'lodash'
import { isTouch } from '@okiba/detect'

if (isTouch) {
  // logic here
}

// hmr support
if (module.hot) {
  module.hot.accept()
}
```

##### NJK
About views, you can create a new one starting from the template below:

```twig
{# examples/views/awesome-module.njk #}

{% set title = 'Okiba components | Awesome module' %}

{% extends 'templates/_default.njk' %}

{% block main %}
  <h1>Awesome module example</h1>
{% endblock %}

{% block scripts %}
  <script src="static/awesome-module.js"></script>
{% endblock %}
```