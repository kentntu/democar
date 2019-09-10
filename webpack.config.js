const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const OUT_PATH = path.resolve(__dirname, 'dist');
const SRC_PATH = path.resolve(__dirname, 'src');
const PUBLIC_PATH = path.resolve(__dirname, 'public');

const reScript = /\.(js|jsx)?$/;
const reStyle = /\.(css|less|scss|sss)$/;
const reImage = /\.(bmp|gif|jpe?g|png|svg)$/;

module.exports = {
  entry: `${SRC_PATH}/index.js`,
  output: {
    path: `${OUT_PATH}`,
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: OUT_PATH,
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        exclude: [reScript, reStyle, reImage, /\.json$/, /\.txt$/, /\.md$/],
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-woff',
      },
      {
        exclude: [reScript, reStyle, reImage, /\.json$/, /\.txt$/, /\.md$/],
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/octet-stream',
      },
      {
        exclude: [reScript, reStyle, reImage, /\.json$/, /\.txt$/, /\.md$/],
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
      },
      {
        exclude: [reScript, reStyle, reImage, /\.json$/, /\.txt$/, /\.md$/],
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100000&mimetype=image/svg+xml',
      },
      {
        test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?limit=100000',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `${SRC_PATH}/index.html`,
    }),
    new CopyWebpackPlugin([{from: PUBLIC_PATH, to: OUT_PATH}]),
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};