const path = require('path');
const { webpack } = require('@webpack-blocks/webpack2');
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.basePlugins = [
  new HtmlWebpackPlugin({
    title: 'Presentation Boilerplate',
    template: path.join(__dirname, 'index.html'),
  }),
];

exports.productionPlugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    output: { comments: false },
    screwIe8: true,
    sourceMap: false,
  }),
];
