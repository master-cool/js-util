/**
 * 工具库
 * production 模式下导出的是构建后的版本
 */
'use strict';

const { chunkName } = require('./sys-config.js');

if (process.env.NODE_ENV === 'production') {
  module.exports = require(`./dist/${chunkName.production}.js`);
} else {
  module.exports = require(`./dist/${chunkName.development}.js`);
}
