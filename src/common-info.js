'use strict';

const packageInfo = require(`../package.json`);

module.exports = {
  name: `project info`,
  description: `Shows project info`,
  text: `    Привет пользователь!
  Эта программа будет запускать сервер "${packageInfo.name}".
  Автор: ${packageInfo.author}`,
  code: 0,
  execute() {
    console.log(this.text);
    process.exit(this.code);
  }
};
