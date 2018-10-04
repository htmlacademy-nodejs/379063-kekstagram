'use strict';

const colors = require(`colors/safe`);
const packageInfo = require(`../package.json`);

module.exports = {
  COLOR_PACK: [`red`, `green`, `blue`],
  name: `version`,
  description: `Shows program version`,
  code: 0,
  colorize() {
    return packageInfo.version.split(`.`).map((el, i) => {
      return colors[this.COLOR_PACK[i]](el);
    }).join(`.`);
  },
  execute() {
    console.log(`v${this.colorize()}`);
    process.exit(this.code);
  }
};
