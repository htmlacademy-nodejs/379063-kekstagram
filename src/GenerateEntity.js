'use strict';

const {getRandomInteger, getRandomString} = require(`./utils`);

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
    const hashtags = new Set();
    let wordsCount = getRandomInteger(0, this.MAX_HASTAGS);
    for (let i = 0; i < wordsCount; i++) {
      let text = `#${getRandomString(getRandomInteger(1, this.MAX_HASTAG_LENGTH))}`;
      hashtags.add(text);
    }
    return hashtags;
  }

  getDescription() {
    const stringLength = getRandomInteger(0, this.MAX_STRING_LENGTH);
    let text = ``;
    let wordsCount = Math.abs(stringLength / this.MAX_WORD_LENGTH);
    for (let i = 0; i < wordsCount; i++) {
      let ending = wordsCount === 0 ? `.` : ` `;
      text += `${getRandomString(getRandomInteger(1, this.MAX_WORD_LENGTH))}${ending}`;
    }
    return text;
  }

  getComments() {
    const comments = [];
    let text = ``;
    let commentsCount = getRandomInteger(0, this.MAX_COMMENTS);
    for (let i = 0; i < commentsCount; i++) {
      const stringLength = getRandomInteger(0, this.MAX_STRING_LENGTH);
      let wordsCount = Math.abs(stringLength / this.MAX_WORD_LENGTH);
      for (let j = 0; j < wordsCount; j++) {
        let ending = wordsCount === 0 ? `.` : ` `;
        text += `${getRandomString(getRandomInteger(1, this.MAX_WORD_LENGTH))}${ending}`;
      }
      comments.push(text);
      text = ``;
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
