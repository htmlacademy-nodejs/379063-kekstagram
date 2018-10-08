'use strict';

const getRandomInteger = require(`../utils`).getRandomInteger;

module.exports = {
  MAX_TIME_DIFF: 604800000,
  MIN_TIME_DIFF: 0,
  execute() {
    const now = new Date();
    const timeDiff = getRandomInteger(this.MIN_TIME_DIFF, this.MAX_TIME_DIFF);
    const dateTime = now.getTime() - timeDiff;
    return new Date(dateTime);
  }
};
