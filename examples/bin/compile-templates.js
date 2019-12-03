const chalk = require('chalk')
const nunjucks = require('nunjucks')
const { writeFileSync } = require('fs')
const { ensureFileSync } = require('fs-extra')
const { getBaseRoute, getRoutes, getViews } = require('../utils/routing')
const config = require('../config')

const env = new nunjucks.Environment()
const templates = getViews(config.paths.views, config.excludeFromViews)

/**
 * Arranges global data according to a relative base path
 * @param {string} basePath 
 */
function getGlobalData(basePath) {
  return {
    scriptsPath: basePath + config.scriptsFolder,
    assetsPath: basePath + config.assetsFolder,
    routes: [
      getBaseRoute(config.paths.views, basePath, true),
      ...getRoutes(config.paths.views, config.excludeFromViews, basePath, true)
    ]
  }
}

console.log(chalk.magenta.bold('Compiling templates...'))

templates.forEach((viewPath, i) => {
  const baseFilename = viewPath.replace(config.paths.views, '').replace('.njk', '.html')
  const fullFilename = config.paths.dist.templates + baseFilename
  const depth = baseFilename.replace(/^\//, '').split('/').length - 1
  const basePath = depth ? Array(depth).fill('../').join('') : './'

  env.render(viewPath, getGlobalData(basePath), (err, content) => {
    if (err) {
      console.error(err)
    } else {
      ensureFileSync(fullFilename)
      writeFileSync(fullFilename, content)

      console.log(baseFilename.substring(1), chalk.green('✓'))

      if (i === templates.length - 1) {
        console.log(chalk.green.bold('Done!'))
        console.log()
      }
    }
  })
})
