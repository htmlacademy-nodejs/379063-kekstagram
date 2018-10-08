'use strict';

const getRandomInteger = require(`../utils`).getRandomInteger;
const getRandomString = require(`../utils`).getRandomString;

module.exports = {
  MAX_WORD_LENGTH: 19,
  MAX_HASTAGS: 5,
  wordLength: null,
  wordsCount: null,
  text: `#`,
  hashtags: new Set(),
  execute() {
    this.wordsCount = getRandomInteger(0, this.MAX_HASTAGS);
    while (this.wordsCount >= 0) {
      this.text += getRandomString(getRandomInteger(1, this.MAX_WORD_LENGTH));
      this.wordsCount--;
      this.hashtags.add(this.text);
      this.text = `#`;
    }
    return this.hashtags;
  }
};
