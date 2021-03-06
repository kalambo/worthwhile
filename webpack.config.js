const app = 'apply';
const liveData = false;

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: `./src/apps/${app}`,
  output: {
    filename: process.env.WEBPACK_SERVE
      ? 'bundle.js'
      : `${app}-${Date.now()}.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  plugins: [
    new webpack.DefinePlugin({
      APP: JSON.stringify(app),
      ELEMENT: JSON.stringify(
        `data-kalambo${process.env.WEBPACK_SERVE ? '' : `-${app}`}`,
      ),
      SERVER_URL: JSON.stringify(
        process.env.WEBPACK_SERVE && !liveData
          ? 'http://localhost:3000'
          : 'https://data.kalambo.org',
      ),
    }),
  ],
};
