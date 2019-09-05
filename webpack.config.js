const path = require('path')

module.exports = {
  target: 'web',
  mode: process.env.NODE_ENV,
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
  },
  devServer: {
    proxy: {
      '/api': {
        target: 8080,
        publicPath: '/dist',
        historyApiFallback: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['node_modules'],
        use: [{ 
          loader: 'babel-loader'
        }, {
          loader: 'css-loader'
      }],
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
      }
    ]
  }
}