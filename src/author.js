'use strict';

const packageInfo = require(`../package.json`);

module.exports = {
  name: `author`,
  description: `Shows program author`,
  code: 0,
  execute() {
    console.log(`Author: ${packageInfo.author}`);
    process.exit(this.code);
  }
};
