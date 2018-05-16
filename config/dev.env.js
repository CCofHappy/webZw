'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MALL_API: '"/api/"',
  COMMON_API: '"/core/"',
  DATA_API: '"/dbcenter/"',
  WAP_API: '"/cwhisky-jp-app-api/"',
})
