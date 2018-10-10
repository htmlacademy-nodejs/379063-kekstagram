'use strict';

const GenerateEntity = require(`./GenerateEntity`);

const generateEntity = (count = 1) => {
  const entity = new GenerateEntity();
  const entities = [];
  while (count > 0) {
    entities.push(entity.execute());
    count--;
  }
  console.log(entities);
  return entities;
};

module.exports.generateEntity = generateEntity;
