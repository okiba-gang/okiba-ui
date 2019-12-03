const CopyPlugin = require('copy-webpack-plugin')
const config = require('../index')

module.exports = {
  entry: {
    app: config.paths.entry
  },
  output: {
    path: config.paths.dist.output,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(s)?css$/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    modules: [config.paths.packages, 'node_modules']
  },
  plugins: [
    new CopyPlugin([
      {
        from: `${config.paths.src}/${config.assetsFolder}`,
        to: config.paths.dist.assets
      }
    ])
  ],
  mode: 'production'
}