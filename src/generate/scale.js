'use strict';

const getRandomInteger = require(`../utils`).getRandomInteger;

module.exports = {
  MAX_SCALE: 100,
  MIN_SCALE: 0,
  execute() {
    return getRandomInteger(this.MIN_SCALE, this.MAX_SCALE);
  }
};
