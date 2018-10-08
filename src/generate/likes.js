'use strict';

const getRandomInteger = require(`../utils`).getRandomInteger;

module.exports = {
  MAX_LIKES: 1000,
  MIN_LIKES: 0,
  execute() {
    return getRandomInteger(this.MIN_LIKES, this.MAX_LIKES);
  }
};
