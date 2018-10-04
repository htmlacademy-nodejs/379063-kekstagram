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
  commands: [version, author, description, license],
  generateText() {
    return `${colors.blue(`Доступные комманды:`)}
    --${colors.gray(this.name)}        - ${colors.green(this.description)};
${this.commands.map((el) => {
    return `    --${colors.gray(el.name)}    -${colors.green(el.description)};\n`;
  }
  ).join(``)}`;
  },
  code: 0,
  execute() {
    console.log(this.generateText());
    process.exit(this.code);
  }
};
