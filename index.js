class Project {
  constructor(name, author, version = `v0.0.1`) {
    this.name = name;
    this.author = author;
    this.version = version;
    this.input = process.argv[2];
    this.errorColor = `\x1b[31m`;

    this.validCommands = [`help`, `version`];
    this.commands = {
      'help': {
        text: `
    Доступные комманды:
    --help    - печатает этот текст;
    --version - печатает версию приложения`,
        code: 0
      },
      'version': {
        text: this.version,
        code: 0
      },
      '': {
        text: `
    Привет пользователь!
    Эта программа будет запускать сервер "${this.name}".
    Автор: ${this.author}`,
        code: 0
      },
      'wrong': {
        text: `
    Неизвестная комманда ${this.input}.
    Чтобы прочитать правила использования приложения, 
    наберите "--help"`,
        code: 1,
        color: this.errorColor
      }
    };
    this.init();
  }

  init() {
    this.input = this.input ? this.input.slice(2) : ``;
    if (this.validCommands.includes(this.input) || this.input === ``) {
      this.printMessage(this.commands[this.input].text, this.commands[this.input].code);
    } else {
      this.printError(this.commands.wrong.color, this.commands.wrong.text, this.commands.wrong.code);
    }
  }

  printMessage(message, code) {
    console.log(message);
    process.exit(code);
  }

  printError(color, message, code) {
    console.error(color, message);
    process.exit(code);
  }
}

const project = new Project(`Кекстаграм`, `Кекс`);
console.log(project);
