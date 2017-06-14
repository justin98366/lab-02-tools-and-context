'use strict';


const lists = module.exports = {};

lists.mapApply = (list, callback) => {
  return Array.prototype.map.apply(list, callback);
};
lists.mapCall = (list, callback) => {
  return Array.prototype.map.call(list, callback);
};


lists.reduceCall = (list, callback) => {
  return Array.prototype.reduce.call(list, callback);
};
lists.reduceApply = (list, callback) => {
  return Array.prototype.reduce.apply(list, callback);
};


lists.filterCall = (list, callback) => {
  return Array.prototype.filter.call(list, callback);
};
lists.filterApply = (list, callback) => {
  return Array.prototype.filter.apply(list, callback);
};


lists.concatApply = (list, callback) => {
  return Array.prototype.concat.apply(list, callback);
};
lists.concatCall = (list, callback) => {
  return Array.prototype.concat.call(list, callback);
};


lists.splice = (list, callback) => {
  return Array.prototype.splice.apply(list, callback);
};
