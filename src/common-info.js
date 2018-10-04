'use strict';

const colors = require(`colors/safe`);
const packageInfo = require(`../package.json`);

module.exports = {
  name: `project info`,
  description: `Shows project info`,
  text: `  ${colors.cyan(`Привет пользователь!`)}
  ${colors.green(`Эта программа будет запускать сервер`)} ${colors.cyan(`"${packageInfo.name}"`)}.
  ${colors.green(`Автор`)}: ${colors.cyan(packageInfo.author)}`,
  code: 0,
  execute() {
    console.log(this.text);
    process.exit(this.code);
  }
};
