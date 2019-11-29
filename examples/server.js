const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const nunjucks = require('nunjucks')
const config = require('./config/dev')

const compiler = webpack(config)
const app = express()
const env = nunjucks.configure('views', { autoescape: true, express: app, noCache: true })
const folderToExclude = ['templates', 'macro']

function getRoutes(path, basePath = '/') {
  return fs.readdirSync(path).reduce((acc, entry) => {

    if (entry === 'index.njk' && basePath === '/') return acc

    const slug = entry.replace('.njk', '')
    const label = slug.replace(/[-]/g, ' ')

    if (fs.lstatSync(`${path}/${entry}`).isDirectory()) {
      if (!folderToExclude.includes(entry)) {
        acc = [...acc, { label, href: getRoutes(`${path}/${entry}`, `${basePath}${entry}/`) }]
      }
    } else if (entry !== '404.njk') {
      acc = [...acc, { label, href: `${basePath}${slug}` }]
    }

    return acc
  }, [])
}

const viewsPath = path.resolve(__dirname, 'views')
const routes = [{ label: 'home', href: '/' }, ...getRoutes(viewsPath)]

function handleIndexRoute (req, res) {
  res.render('index.njk', { routes })
}

function handleOtherRoutes (req, res) {
  const templateFilename = `${req.path.replace(/^\/+/, '')}.njk`
  const templateFilepath = path.resolve(__dirname, 'views', templateFilename)
  const regex = new RegExp(`${folderToExclude.join('|')}|index|404`)
  if (!regex.test(templateFilename) && fs.existsSync(templateFilepath)) {
    res.render(templateFilename, { routes })
  } else {
    res.render('404.njk', { routes })
  }
}

env.addFilter('is_iterable', el => (typeof el === 'object'))

app.use(devMiddleware(compiler, { publicPath: config.output.publicPath, writeToDisk: true }))
app.use(hotMiddleware(compiler, { reload: true }))
app.use('/static', express.static('static'))

app.get('/', handleIndexRoute)
app.get('*', handleOtherRoutes)

app.listen(3000, () => console.log('Examples running on http://localhost:3000'))
