'use strict';

const getRandomInteger = require(`../utils`).getRandomInteger;
const getRandomString = require(`../utils`).getRandomString;

module.exports = {
  MAX_WORD_LENGTH: 20,
  wordLength: null,
  text: `https://mydomain/assets/600/?`,
  execute() {
    this.text += getRandomString(getRandomInteger(1, this.MAX_WORD_LENGTH));
    return this.text;
  }
};
