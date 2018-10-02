'use strict';

const colors = require(`colors/safe`);
const version = require(`./version`);
const author = require(`./author`);
const description = require(`./description`);
const license = require(`./license`);

module.exports = {
  name:
    `help`,
  description:
    `Shows available commands of this program`,
  text() {
    return `  ${colors.blue(`Доступные комманды:`)}
  --${colors.gray(this.name)}        - ${colors.green(this.description)};
  --${colors.gray(version.name)}     - ${colors.green(version.description)};
  --${colors.gray(license.name)}     - ${colors.green(license.description)};
  --${colors.gray(author.name)}      - ${colors.green(author.description)};
  --${colors.gray(description.name)} - ${colors.green(description.description)}`;
  },
  code: 0,
  execute() {
    console.log(this.text());
    process.exit(this.code);
  }
};
