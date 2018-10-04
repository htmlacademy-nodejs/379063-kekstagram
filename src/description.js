'use strict';
const colors = require(`colors/safe`);
const packageInfo = require(`../package.json`);

module.exports = {
  name: `description`,
  description: `Shows program description`,
  code: 0,
  execute() {
    console.log(`${colors.green(`Description:`)} ${packageInfo.description}`);
    process.exit(this.code);
  }
};
