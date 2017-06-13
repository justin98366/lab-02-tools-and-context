'use strict';


const lists = module.exports = {};

lists.map = (list, callback) => {
  return Array.prototype.map.apply(list, callback);
};


lists.reduce = (list, callback) => {
  return Array.prototype.reduce.apply(list, callback);
};

lists.filter = (list, callback) => {
  return Array.prototype.filter.call(list, callback);
};

lists.concat = (list, callback) => {
  return Array.prototype.concat.apply(list, callback);
};

lists.splice = (list, callback) => {
  return Array.prototype.splice.apply(list, callback);
};
