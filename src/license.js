'use strict';

const packageInfo = require(`../package.json`);

module.exports = {
  name: `license`,
  description: `Shows program license`,
  code: 0,
  execute() {
    console.log(`License: ${packageInfo.license}`);
    process.exit(this.code);
  }
};
