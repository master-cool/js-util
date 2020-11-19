'use strict';
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { chunkName, libraryName } = require('./sys-config.js');

module.exports = {
  mode: 'none',
  entry: {
    [chunkName.development]: './src/index.js',
    [chunkName.production]: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      // 只压缩min版本
      new TerserPlugin({
        include: /\.min.js$/,
      }),
    ],
  },
  plugins: [new CleanWebpackPlugin(), new ESLintPlugin()],
};
