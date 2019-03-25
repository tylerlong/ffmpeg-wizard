import HtmlWebpackPlugin from 'html-webpack-plugin'

const mainConfig = {
  target: 'electron-main',
  mode: 'development',
  entry: {
    main: ['./main.js']
  },
  devtool: 'source-map',
  node: {
    __dirname: false // https://github.com/webpack/webpack/issues/2010#issuecomment-181256611
  }
}

const rendererConfig = {
  target: 'web',
  mode: 'development',
  entry: {
    index: './index.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}

export default [mainConfig, rendererConfig]
