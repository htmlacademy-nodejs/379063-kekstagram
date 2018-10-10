'use strict';

const GenerateEntity = require(`./GenerateEntity`);

const generateEntity = (count = 1) => {
  const entity = new GenerateEntity();
  const entities = [];
  while (count > 0) {
    entities.add(entity.execute());
    count--;
  }
  return entities;
};

module.exports.generateEntity = generateEntity;
