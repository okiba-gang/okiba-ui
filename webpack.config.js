const fs = require('fs')
const path = require('path')
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin')

const packagesPath = path.resolve(__dirname, 'packages')
const packages = fs.readdirSync(packagesPath).reduce((acc, entry) => {
  if (fs.existsSync(`${packagesPath}/${entry}/index.js`)) {
    acc[entry] = `${packagesPath}/${entry}/index.js`
  }
  return acc
}, {})

module.exports = {
  entry: packages,
  output: {
    path: packagesPath,
    filename: '[name]/dist/index.min.js',
    library: 'Okiba',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(@okiba)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: '3',
                  targets: {
                    browsers: [
                      'last 3 Safari major versions',
                      'last 3 iOS major versions',
                      'last 3 Chrome major versions',
                      'last 3 Firefox major versions',
                      'last 3 Edge major versions',
                      'Explorer 11'
                    ]
                  }
                }
              ]
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  mode: 'production',
  plugins: [
    new UnminifiedWebpackPlugin()
  ]
}