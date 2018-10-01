'use strict';

const packageInfo = require(`../package.json`);

module.exports = {
  name: `version`,
  description: `Shows program version`,
  code: 0,
  execute() {
    console.log(`v${packageInfo.version}`);
    process.exit(this.code);
  }
};
