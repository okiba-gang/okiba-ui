const path = require('path')

module.exports = {
  staticFolder: 'static',
  excludeFromViews: ['macro', 'templates'],
  excludeFromRoutes: ['macro', 'templates', '404', 'index'],
  paths: {
    src: path.resolve(__dirname, '../src'),
    entry: path.resolve(__dirname, '../src/main.js'),
    views: path.resolve(__dirname, '../views'),
    packages: path.resolve(__dirname, '../../packages'),
    dev: {
      publicAssets: path.resolve(__dirname, '..'),
      output: path.resolve(__dirname, '../tmp'),
    },
    dist: {
      templates: path.resolve(__dirname, '../../docs'),
      output: path.resolve(__dirname, '../../docs/static')
    }
  }
}
