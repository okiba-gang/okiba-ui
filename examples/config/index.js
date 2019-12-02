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
      publicAssets: '/Users/andrea.fiadone/Desktop/dist/static/',
      templates: path.resolve(__dirname, '../dist'),
      output: path.resolve(__dirname, '../dist/static')
    }
  }
}
