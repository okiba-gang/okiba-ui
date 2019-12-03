const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const nunjucks = require('nunjucks')
const webpackConfig = require('./config/bundler/dev')
const { getBaseRoute, getRoutes } = require('./utils/routing')
const config = require('./config')

const port = process.env.PORT || 3000
const compiler = webpack(webpackConfig)
const app = express()
const globalData = {
  scriptsPath: `/${config.scriptsFolder}`,
  assetsPath: `/${config.assetsFolder}`,
  routes: [
    getBaseRoute(config.paths.views, '/'),
    ...getRoutes(config.paths.views, config.excludeFromViews, '/')
  ]
}

function handleRequest (req, res) {
  if (req.path === '/') {
    res.render('index.njk', globalData)
    return
  }

  const rootPath = path.resolve(__dirname, 'views', req.path)
  const rootIndexFilepath = `${rootPath}/index.njk`
  const rootIndexFilename = `${req.path.replace(/^\/|\/$/g, '')}/index.njk`

  if (fs.existsSync(`${config.paths.views}/${rootIndexFilepath}`)) {
    res.render(rootIndexFilename, globalData)
    return
  }

  const templateFilename = `${req.path.replace(/^\/|\/$/g, '')}.njk`
  const templateFilepath = path.resolve(__dirname, 'views', templateFilename)
  const toExclude = new RegExp(`(${config.excludeFromRoutes.join('|')})`)

  if (!toExclude.test(templateFilename) && fs.existsSync(templateFilepath)) {
    res.render(templateFilename, globalData)
  } else {
    res.render('404.njk', globalData)
  }
}

nunjucks.configure('views', { autoescape: true, express: app, noCache: true })

app.use(devMiddleware(compiler, { publicPath: config.paths.dev.publicAssets, writeToDisk: true }))
app.use(hotMiddleware(compiler, { reload: true }))
app.use(`/${config.scriptsFolder}`, express.static(config.paths.dev.output.replace(__dirname, '.')))
app.use(`/${config.assetsFolder}`, express.static(config.paths.dev.assets.replace(__dirname, '.')))
app.get('*', handleRequest)
app.listen(3000, () => console.log(`Examples running on http://localhost:${port}`))
