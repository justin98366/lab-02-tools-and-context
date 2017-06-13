'use strict';

const expect = require('expect');
const lists = require('../lib/fp.js');

describe('lists', () => {

  describe('map', () => {
    it('should return [2, 4, 6]', () => {
      let result = lists.map([1, 2, 3], n => n * 2);
      expect(result).toEqual([2, 4, 6]);
    });
    it('should return [3, 6, 9]', () => {
      let result = lists.map([1, 2, 3], n => n * 3);
      expect(result).toEqual([3, 6, 9]);
    });
  });
  describe('filter', () => {
    it('should return 1', () => {
      let result = lists.filter([1, 2, 3], n => n < 2);
      expect(result).toEqual(1);
    });
    it('shoult return 3', () => {
      let result = lists.filter([1, 2, 3], n => n > 2);
      expect(result).toEqual(3);
    });

  });
  describe('reduce', () => {
    it('should return 6', () => {
      let result = lists.reduce([1, 2, 3], [(a, c) => a + c]);
      expect(result).toEqual(6);
    });
    it('should return 10', () => {
      let result = lists.reduce([5, 2, 3], [(a, c) => a + c]);
      expect(result).toEqual(10);
    });
  });
  describe('concat', () => {
    it('should return [1, 2, 3, 4, 5, 6]', () => {
      let result = lists.concat([1, 2, 3], [4, 5, 6]);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it('should return [1, 2, 3, 4, 5, 6]', () => {
      let result = lists.concat([1, 2, 3], [[4, 5, 6], [7, 8, 9]]);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });
  describe('splice', () => {
    it('should return 6', () => {
      let result = lists.splice([3, 6, 9], [1, 1]);
      expect(result).toEqual(6);
    });
    it('should return 6', () => {
      let result = lists.splice([8, 97, 389], [2, 1]);
      expect(result).toEqual(389);
    });
  });
});
