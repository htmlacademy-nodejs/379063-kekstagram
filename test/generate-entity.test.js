'use strict';

const assert = require(`assert`);
const generateEntity = require(`../src/generate/generate-entity`).generateEntity;

describe(`generate-entity check`, () => {
  describe(`return`, () => {
    it(`should return warning text if empty argument is passed`, () => {
      assert.equal(generateEntity(), `Please, enter a valid argument`);
    });
    it(`should return warning text if wrong argument is passed`, () => {
      assert.equal(generateEntity(`foo`), `Please, enter a valid argument`);
    });
    it(`should return number between 0 and 100 if 'scale' is passed as argument`, () => {
      let number = generateEntity(`scale`);
      assert.ok(number >= 0 && number <= 100);
    });
    it(`should return number between 0 and 1000 if 'likes' is passed as argument`, () => {
      let number = generateEntity(`likes`);
      assert.ok(number >= 0 && number <= 1000);
    });
    it(`should return timestamp between now and minus 7 days if 'date' is passed as argument`, () => {
      const maxDiff = 604800000; // 7 days in milliseconds
      let date = generateEntity(`date`);
      let now = new Date();
      now = now.getTime();
      date = date.getTime();
      assert.ok(now - date <= maxDiff);
      assert.ok(now - date >= 0);
    });
    it(`should return one of prepared words if 'effect' is passed as argument`, () => {
      const preparedWords = [`none`, `chrome`, `sepia`, `marvin`, `phobos`, `heat`];
      assert.ok(preparedWords.indexOf(generateEntity(`effect`)) > -1);
    });
    it(`should return string no longer then 140 characters if 'description' is passed as argument`, () => {
      const string = generateEntity(`description`);
      assert.ok(typeof string === `string`);
      assert.ok(string.length <= 140);
      assert.ok(string.length >= 0);
    });
    it(`should return array of string no longer then 140 characters each if 'comments' is passed as argument`, () => {
      const comments = generateEntity(`comments`);
      assert.ok(Array.isArray(comments));
      for (let comment of comments) {
        assert.ok(typeof comment === `string`);
        assert.ok(comment.length <= 140);
        assert.ok(comment.length >= 0);
      }
    });
    it(`should return array of max 5 unique strings no longer then 20 characters and starts with # each  
      if 'hashtags' is passed as argument`, () => {
      const hashtags = generateEntity(`hashtags`);
      assert.ok(hashtags.constructor === Set);
      assert.ok(hashtags.size <= 5);
      for (let hashtag of hashtags) {
        assert.ok(typeof hashtag === `string`);
        assert.ok(hashtag[0] === `#`);
        assert.ok(hashtag.length <= 20);
      }
    });
    it(`should return url if 'url' is passed as argument`, () => {
      const url = generateEntity(`url`);
      const protocol = url.split(`:/`)[0];
      assert.ok(typeof url === `string`);
      assert.ok(protocol === `http` || protocol === `https`);
    });
  });
});
