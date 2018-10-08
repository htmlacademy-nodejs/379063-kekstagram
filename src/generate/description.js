'use strict';

const getRandomInteger = require(`../utils`).getRandomInteger;
const getRandomString = require(`../utils`).getRandomString;

module.exports = {
  MAX_STRING_LENGTH: 140,
  MAX_WORD_LENGTH: 15,
  stringLength: null,
  wordLength: null,
  wordsCount: null,
  text: ``,
  execute() {
    this.stringLength = getRandomInteger(0, this.MAX_STRING_LENGTH);
    this.wordsCount = Math.abs(this.stringLength / this.MAX_WORD_LENGTH);
    while (this.wordsCount >= 0) {
      let ending = this.wordsCount === 0 ? `.` : ` `;
      this.text += getRandomString(getRandomInteger(1, this.MAX_WORD_LENGTH)) + ending;
      this.wordsCount--;
    }
    return this.text;
  }
};
