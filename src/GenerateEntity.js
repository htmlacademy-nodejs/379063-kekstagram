'use strict';

const getRandomInteger = require(`./utils`).getRandomInteger;
const getRandomString = require(`./utils`).getRandomString;

module.exports = class GenerateEntity {
  constructor() {
    this.MAX_URL_QUERY_LENGTH = 20;
    this.DEFAULT_URL_TEXT = `https://mydomain/assets/600/?`;
    this.MAX_SCALE = 100;
    this.MIN_SCALE = 0;
    this.MAX_LIKES = 1000;
    this.MIN_LIKES = 0;
    this.EFFECTS = [`none`, `chrome`, `sepia`, `marvin`, `phobos`, `heat`];
    this.MAX_TIME_DIFF = 604800000;
    this.MIN_TIME_DIFF = 0;
    this.MAX_HASTAG_LENGTH = 19;
    this.MAX_HASTAGS = 5;
    this.MAX_STRING_LENGTH = 140;
    this.MAX_WORD_LENGTH = 15;
    this.MAX_COMMENTS = 50;
  }

  getUrl() {
    this.url = this.DEFAULT_URL_TEXT + getRandomString(getRandomInteger(1, this.MAX_URL_QUERY_LENGTH));
    return this.url;
  }

  getScale() {
    return getRandomInteger(this.MIN_SCALE, this.MAX_SCALE);
  }

  getLikes() {
    return getRandomInteger(this.MIN_LIKES, this.MAX_LIKES);
  }

  getEffect() {
    return this.EFFECTS[getRandomInteger(0, this.EFFECTS.length - 1)];
  }

  getDate() {
    const now = new Date();
    const timeDiff = getRandomInteger(this.MIN_TIME_DIFF, this.MAX_TIME_DIFF);
    const dateTime = now.getTime() - timeDiff;
    return new Date(dateTime);
  }

  getHastags() {
    let text = `#`;
    const hashtags = new Set();
    let wordsCount = getRandomInteger(0, this.MAX_HASTAGS);
    while (wordsCount >= 0) {
      text += getRandomString(getRandomInteger(1, this.MAX_HASTAG_LENGTH));
      wordsCount--;
      hashtags.add(text);
      text = `#`;
    }
    return hashtags;
  }

  getDescription() {
    const stringLength = getRandomInteger(0, this.MAX_STRING_LENGTH);
    let text = ``;
    let wordsCount = Math.abs(stringLength / this.MAX_WORD_LENGTH);
    while (wordsCount >= 0) {
      let ending = wordsCount === 0 ? `.` : ` `;
      text += getRandomString(getRandomInteger(1, this.MAX_WORD_LENGTH)) + ending;
      wordsCount--;
    }
    return text;
  }

  getComments() {
    const comments = [];
    let text = ``;
    let commentsCount = getRandomInteger(0, this.MAX_COMMENTS);
    while (commentsCount >= 0) {
      const stringLength = getRandomInteger(0, this.MAX_STRING_LENGTH);
      let wordsCount = Math.abs(stringLength / this.MAX_WORD_LENGTH);
      while (wordsCount >= 0) {
        let ending = wordsCount === 0 ? `.` : ` `;
        text += getRandomString(getRandomInteger(1, this.MAX_WORD_LENGTH)) + ending;
        wordsCount--;
      }
      comments.push(text);
      text = ``;
      commentsCount--;
    }
    return comments;
  }

  execute() {
    return {
      url: this.getUrl(),
      scale: this.getScale(),
      effect: this.getEffect(),
      hashtags: this.getHastags(),
      description: this.getDescription(),
      likes: this.getLikes(),
      comments: this.getComments(),
      date: this.getDate()
    };
  }
};
