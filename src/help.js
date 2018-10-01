'use strict';

module.exports = {
  name: `help`,
  description: `Shows available commands of this programm`,
  text: `Доступные комманды:
  --help        - печатает этот текст;
  --version     - печатает версию приложения;
  --license     - печатает информацию о лицензии;
  --author      - печатает информацию об авторе;
  --description - печатает описание проекта`,
  code: 0,
  execute() {
    console.log(this.text);
    process.exit(this.code);
  }
};
