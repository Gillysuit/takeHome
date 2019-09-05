const path = require("path");

module.exports = {
  context: __dirname,
  devtool: "cheap-eval-source-map",
  target: "web",
  mode: process.env.NODE_ENV,
  entry: {
    main: "./src/index.jsx"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve("./dist")
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  devServer: {
    proxy: {
      "/api": {
        target: 8080,
        publicPath: "/dist",
        historyApiFallback: true
      }
    }
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"]
            }
          }
        ]
        // {
        //   test: /\.scss$/,
        //   exclude: /(node_modules)/,
        //   use: ['style-loader', 'css-loader', 'sass-loader']
        // }
      }
    ]
  }
};
