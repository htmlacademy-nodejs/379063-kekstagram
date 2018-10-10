'use strict';

const GenerateEntity = require(`./GenerateEntity`);

const generateEntity = (count = 1) => {
  const entity = new GenerateEntity();
  const entities = [];
  for (let i = 0; i < count; i++) {
    entities.push(entity.execute());
  }
  console.log(entities);
  return entities;
};

module.exports.generateEntity = generateEntity;
