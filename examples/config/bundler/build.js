const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
        exclude: [/node_modules\/(?!(swiper|dom7|@okiba)\/).*/],
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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
    ]),
    new MiniCssExtractPlugin({
      filename: `../${path.relative(process.cwd(), config.paths.dist.assets)}/[name].css`
    })
  ],
  mode: 'production'
}
