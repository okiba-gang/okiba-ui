const path = require('path')

module.exports = {
  scriptsFolder: 'scripts',
  assetsFolder: 'assets',
  excludeFromViews: ['macro', 'templates'],
  excludeFromRoutes: ['macro', 'templates', '404', 'index'],
  paths: {
    src: path.resolve(__dirname, '../src'),
    entry: path.resolve(__dirname, '../src/main.js'),
    views: path.resolve(__dirname, '../views'),
    packages: path.resolve(__dirname, '../../packages'),
    dev: {
      public: path.resolve(__dirname, '..'),
      output: path.resolve(__dirname, '../tmp/scripts'),
      assets: path.resolve(__dirname, '../tmp/assets')
    },
    dist: {
      templates: path.resolve(__dirname, '../../docs'),
      output: path.resolve(__dirname, '../../docs/scripts'),
      assets: path.resolve(__dirname, '../../docs/assets')
    }
  }
}
