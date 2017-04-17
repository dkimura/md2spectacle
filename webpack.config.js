const { createConfig, addPlugins, defineConstants, env, entryPoint, setOutput, sourceMaps } = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');
const extractText = require('@webpack-blocks/extract-text2');
const devServer = require('@webpack-blocks/dev-server2');
const happypack = require('webpack-blocks-happypack');
const splitVendor = require('webpack-blocks-split-vendor');
const { basePlugins, productionPlugins } = require('./webpack.plugins');

module.exports = createConfig([
  setOutput('./dist/bundle.js'),
  happypack([
    babel(),
    extractText(),
  ]),
  addPlugins(basePlugins),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
  }),
  env('development', [
    entryPoint('./src/index.dev.js'),
    devServer(),
    sourceMaps(),
  ]),
  env('production', [
    entryPoint('./src/index.js'),
    splitVendor('vendor'),
    addPlugins(productionPlugins),
  ]),
]);
