'use strict';

const packageInfo = require(`../package.json`);

module.exports = {
  name: `description`,
  description: `Shows program description`,
  code: 0,
  execute() {
    console.log(`Description: ${packageInfo.description}`);
    process.exit(this.code);
  }
};
