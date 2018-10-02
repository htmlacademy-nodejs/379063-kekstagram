'use strict';

const colors = require(`colors/safe`);
const help = require(`./help`);

module.exports = {
  name: `error`,
  description: `Shows error message`,
  code: 1,
  text(input) {
    return `  Неизвестная комманда ${input}.
  Чтобы прочитать правила использования приложения,
  наберите "--${help.name}"`;
  },
  execute(input) {
    console.log(colors.red(this.text(input)));
    process.exit(this.code);
  }
};
