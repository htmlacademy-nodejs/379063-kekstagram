'use strict';

const getRandomInteger = require(`../utils`).getRandomInteger;

module.exports = {
  EFFECTS: [`none`, `chrome`, `sepia`, `marvin`, `phobos`, `heat`],
  execute() {
    return this.EFFECTS[getRandomInteger(0, this.EFFECTS.length - 1)];
  }
};
