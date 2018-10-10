'use strict';

const randomstring = require(`randomstring`);

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomString = (length, charset = `alphabetic`) => {
  return randomstring.generate({length, charset});
};

module.exports = {
  getRandomInteger,
  getRandomString
};
