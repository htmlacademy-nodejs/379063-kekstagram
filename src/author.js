'use strict';

const colors = require(`colors/safe`);
const packageInfo = require(`../package.json`);

module.exports = {
  name: `author`,
  description: `Shows program author`,
  code: 0,
  execute() {
    console.log(`${colors.green(`Author:`)} ${colors.blue(packageInfo.author)}`);
    process.exit(this.code);
  }
};
