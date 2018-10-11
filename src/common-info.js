'use strict';

const colors = require(`colors/safe`);
const packageInfo = require(`../package.json`);
const FileCli = require(`./FileCLI`);

const fileCli = new FileCli();

module.exports = {
  name: `project info`,
  description: `Shows project info`,
  text: `  ${colors.cyan(`Привет пользователь!`)}
  ${colors.green(`Эта программа будет запускать сервер`)} ${colors.cyan(`"${packageInfo.name}"`)}.
  ${colors.green(`Автор`)}: ${colors.cyan(packageInfo.author)}`,
  code: 0,
  execute() {
    console.log(this.text);
    fileCli.askToGenerate();
  }
};
