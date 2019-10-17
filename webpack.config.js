const webpack = require('webpack');
require('dotenv').config();
  
const defineEnv = new webpack.DefinePlugin({
  'process.env': {
  'API_KEY': JSON.stringify(process.env.API_KEY),
  'AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
  'DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
  'PROJECT_ID': JSON.stringify(process.env.PROJECT_ID),
  'STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
  'MESSAGING_SENDER_ID': JSON.stringify(process.env.MESSAGING_SENDER_ID),
  }
})

module.exports = {
    entry: {
      app: "./src/app.js"
    },
    output: {
      path: __dirname,
      filename: "bundle.js"
    },
    plugins: [defineEnv],
    devServer: {
      contentBase: __dirname + '/public',
      port: 8080,
      //publicPath: '/js/'
    },
    devtool: "eval-source-map",
    mode: 'development',
    module: {
      rules: [{
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "eslint-loader" 
      }, {
        test: /\.css$/,
        loader: ["style-loader","css-loader"]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
       }]
    }
};

  
