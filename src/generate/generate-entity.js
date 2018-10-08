'use strict';

const scale = require(`./scale`);
const likes = require(`./likes`);
const warning = require(`./warning`);
const date = require(`./date`);
const effect = require(`./effect`);
const description = require(`./description`);
const comments = require(`./comments`);
const hashtags = require(`./hashtags`);
const url = require(`./url`);

const randomData = {scale, likes, warning, date, effect, description, comments, hashtags, url};

const generateEntity = (type = `warning`) => {
  if (!(type in randomData)) {
    type = `warning`;
  }

  return randomData[type].execute();
};

module.exports.generateEntity = generateEntity;
