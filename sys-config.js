'use strict';
let { name, version } = require('./package.json');

name = name.substring(name.indexOf('/') + 1);

const fileName = `${name}-${version}`;
const chunkName = {
  development: fileName,
  production: fileName + '.min',
};

/**
 * -后的首字母转大写
 */
const libraryName = (function (str) {
  str = str.toLowerCase();
  let arr = str.split('-');
  if (arr.length > 1) {
    for (let i = 1, len = arr.length; i < len; i++) {
      arr[i] = arr[i].replace(arr[i].charAt(0), (s) => s.toUpperCase());
    }
    return arr.join('');
  }
  return str;
})(name);

module.exports = { chunkName, libraryName };
