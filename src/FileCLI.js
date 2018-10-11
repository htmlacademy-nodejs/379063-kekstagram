'use strict';

const readline = require(`readline`);
const FH = require(`./FileHandler`);
const generateEntity = require(`./generate-entity`).generateEntity;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `#>`
});

const fhi = new FH();

module.exports = class FileCLI {
  askToGenerate() {
    console.log(`Вы хотите создать случайные данные (yes|no)?`);
    rl.prompt();
    rl.on(`line`, (answer) => {
      switch (answer.trim()) {
        case `yes`:
          rl.removeAllListeners(`line`);
          this.askNumberOfObjects();
          break;
        case `no`:
          console.log(`До встречи!`);
          process.exit(0);
          break;
        default:
          console.log(`Ответ должен быть (yes|no)`);
          break;
      }
    });
  }

  askNumberOfObjects() {
    console.log(`Сколько объектов вы хотите создать (от 0 до 5)?`);
    rl.prompt();

    rl.on(`line`, (answer) => {
      let number = parseInt(answer, 10);
      if (number >= 0 && number <= 5) {
        rl.removeAllListeners(`line`);
        this.number = number;
        this.askFilePath();
      } else {
        console.log(`Введите число от 0 до 5`);
        rl.prompt();
      }
    });
  }
  askFilePath() {
    console.log(`Введите имя файла?`);
    rl.prompt();

    rl.on(`line`, (answer) => {
      if (answer.trim().length === 0) {
        console.log(`Вы ввели пустую строку`);
        rl.prompt();
      } else {
        this.fileName = answer;
        if (!fhi.isExist(this.fileName)) {
          this.data = generateEntity(this.number);
          fhi.writeFile(this.fileName, this.data);
          rl.close();
        } else {
          console.log(`Файл с таким именем уже существет. Переписать файл? (yes|no)`);
          rl.prompt();
          rl.removeAllListeners(`line`);
          rl.on(`line`, (ans) => {
            switch (ans.trim()) {
              case `yes`:
                rl.removeAllListeners(`line`);
                this.data = generateEntity(this.number);
                fhi.writeFile(this.fileName, this.data);
                console.log(`Файл ${this.fileName} успешно создан! До встречи!`);
                rl.close();
                break;
              case `no`:
                rl.removeAllListeners(`line`);
                this.askFilePath();
                break;
              default:
                console.log(`Ответ должен быть (yes|no)`);
                rl.prompt();
                break;
            }
          });
        }
      }
    });
  }
};
