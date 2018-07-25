const webpack = require('webpack');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(webpackBaseConfig,{
  mode: 'production',
  output: {
      publicPath: 'https://anani1994.github.io', // https://...这部分为你的服务器域名
      filename: 'blog/js/[hash].js',
      chunkFilename: 'blog/js/[hash]-chunk.js'
  },
  plugins: [
    new HTMLWebpackPlugin({ //创建 .html 并自动引入打包后的文件
      filename: 'index.html',
      template: 'index-ori.html',
      inject: true, // 参照最初创建的 .html 来生成 .html
      favicon: path.resolve('favicon-ori.ico')
    })
  ]
});