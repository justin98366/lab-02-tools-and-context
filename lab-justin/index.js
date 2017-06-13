'use strict';

const lt = require('./lib/fp.js');

let main =  module.exports = () => {
  let list = process.argv;
  list = lt.map(list, word => word.toUpperCase());
  console.log(list);
  return list;
};

main();
