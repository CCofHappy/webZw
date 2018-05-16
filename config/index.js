'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
        env: require('./dev.env'),
        host: 'localhost',
        port: 8088,
        autoOpenBrowser: false,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/cwhisky-jp-app-api/': {
                target: 'http://dev.wap.cwhisky.com/cwhisky-jp-app-api/', //竞拍app
                changeOrigin: true,
                pathRewrite: { //需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
                    '^/cwhisky-jp-app-api/': ''
                }
            },
        },
        cssSourceMap: false
  },

  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}