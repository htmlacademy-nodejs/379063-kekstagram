'use strict';

const assert = require(`assert`);
const generateEntity = require(`../src/generate-entity`).generateEntity;

describe(`generate-entity check`, () => {
  describe(`return`, () => {
    const entity = generateEntity();
    it(`should return an array`, () => {
      assert.ok(Array.isArray(entity));
    });
    it(`should return number between 0 and 100 'scale' field`, () => {
      assert.ok(entity[0].scale >= 0 && entity[0].scale <= 100);
    });
    it(`should return number between 0 and 1000 in 'likes' field`, () => {
      assert.ok(entity[0].likes >= 0 && entity[0].likes <= 1000);
    });
    it(`should return timestamp between now and minus 7 days in 'date' field`, () => {
      const maxDiff = 604800000; // 7 days in milliseconds
      let now = new Date();
      now = now.getTime();
      let date = entity[0].date.getTime();
      assert.ok(now - date <= maxDiff);
      assert.ok(now - date >= 0);
    });
    it(`should return one of prepared words in 'effect' field`, () => {
      const preparedWords = [`none`, `chrome`, `sepia`, `marvin`, `phobos`, `heat`];
      assert.ok(preparedWords.indexOf(entity[0].effect) > -1);
    });
    it(`should return string in 'description' field`, () => {
      assert.ok(typeof entity[0].description === `string`);
    });
    it(`should return string no longer then 140 characters in 'description' field`, () => {
      assert.ok(entity[0].description.length <= 140);
    });
    it(`should return array of string no longer then 140 characters each in 'comments' field`, () => {
      assert.ok(Array.isArray((entity[0].comments)));
      for (let comment of entity[0].comments) {
        assert.ok(typeof comment === `string`);
        assert.ok(comment.length <= 140);
        assert.ok(comment.length >= 0);
      }
    });
    it(`should return array of max 5 unique strings no longer then 20 characters and starts with # each  
      in 'hashtags' field`, () => {
      assert.ok(entity[0].hashtags.constructor === Set);
      assert.ok(entity[0].hashtags.size <= 5);
      for (let hashtag of entity[0].hashtags) {
        assert.ok(typeof hashtag === `string`);
        assert.ok(hashtag[0] === `#`);
        assert.ok(hashtag.length <= 20);
      }
    });
    it(`should return url in 'url' field`, () => {
      const protocol = entity[0].url.split(`:/`)[0];
      assert.ok(typeof entity[0].url === `string`);
      assert.ok(protocol === `http` || protocol === `https`);
    });
  });
});
