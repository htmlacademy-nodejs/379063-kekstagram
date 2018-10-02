'use strict';
const colors = require(`colors/safe`);
const packageInfo = require(`../package.json`);

module.exports = {
  name: `license`,
  description: `Shows program license`,
  code: 0,
  execute() {
    console.log(`License: ${colors.yellow(packageInfo.license)}`);
    process.exit(this.code);
  }
};
