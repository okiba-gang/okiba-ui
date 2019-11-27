const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const nunjucks = require('nunjucks')
const config = require('./webpack.config')

const compiler = webpack(config)
const app = express()

function handleIndexRoute (req, res) {
  res.render('index.njk')
}

function handleOtherRoutes (req, res) {
  const templateFilename = `${req.path.replace(/^\/+/, '')}.njk`
  const templateFilepath = path.resolve(__dirname, 'views', templateFilename)
  if (fs.existsSync(templateFilepath)) {
    res.render(templateFilename)
  } else {
    res.render('404.njk')
  }
}

nunjucks.configure('views', { autoescape: true, express: app, noCache: true })

app.use(devMiddleware(compiler, { publicPath: config.output.publicPath, writeToDisk: true }))
app.use(hotMiddleware(compiler, { reload: true }))
app.use('/static', express.static('static'))

app.get('/', handleIndexRoute)
app.get('*', handleOtherRoutes)

app.listen(3000, () => console.log('Examples running on http://localhost:3000'))
