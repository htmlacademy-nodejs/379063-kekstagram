'use strict';

module.exports = {
  name: `help`,
  description: `Shows error message`,
  code: 1,
  text(input) {
    return `    Неизвестная комманда ${input}.
  Чтобы прочитать правила использования приложения,
  наберите "--help"`;
  },
  execute(input) {
    console.log(this.text(input));
    process.exit(this.code);
  }
};
