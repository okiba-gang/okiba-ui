const fs = require('fs')

/**
 * Base path getter
 * @param {string} viewsDir 
 * @param {string} basePath 
 * @param {boolean} html 
 */
function getBaseRoute(viewsDir, basePath = '', html = false) {
  return fs.existsSync(`${viewsDir}/index.njk`) ? { label: 'home', href: `${basePath}${html ? 'index.html' : ''}` } : null
}

/**
 * Retrieves routes according to file system
 * @param {string} viewsDir
 * @param {array} exclude
 * @param {string} basePath
 * @param {boolean} html
 * @param {string} parentPath
 */
function getRoutes(viewsDir, exclude = [], basePath = '', html = false, parentPath) {
  parentPath = parentPath || basePath
  
  return fs.readdirSync(viewsDir).reduce((acc, entry) => {

    if (entry === 'index.njk' && parentPath === basePath) return acc

    const slug = entry.replace('.njk', '')
    const label = slug.replace(/[-]/g, ' ')

    if (fs.lstatSync(`${viewsDir}/${entry}`).isDirectory()) {
      if (!exclude.includes(entry)) {
        href = fs.existsSync(`${viewsDir}/${entry}/index.njk`) ? `${parentPath}${entry}${html ? '.html' : '/'}` : null
        acc.push({ label, href, sublinks: getRoutes(`${viewsDir}/${entry}`, [...exclude, 'index'], basePath, html, `${parentPath}${entry}/`) })
      }
    } else if (entry !== '404.njk') {
      acc.push({ label, href: `${parentPath}${slug}${html ? '.html' : '/'}` })
    }

    return acc
  }, [])
}

/**
 * Retrieves views according to file system
 * @param {string} viewsDir 
 * @param {array} exclude
 */
function getViews(viewsDir, exclude = []) {
  return fs.readdirSync(viewsDir).reduce((acc, entry) => {
    const regex = exclude.length ? new RegExp(`(${exclude.join('|')})`) : null

    if ((!regex || !regex.test(entry))) {
      if (fs.lstatSync(`${viewsDir}/${entry}`).isDirectory()) {
        acc = [...acc, ...getViews(`${viewsDir}/${entry}`, exclude)]
      } else {
        acc.push(`${viewsDir}/${entry}`)
      }
    }

    return acc
  }, [])
}

module.exports = {
  getBaseRoute,
  getRoutes,
  getViews
}
