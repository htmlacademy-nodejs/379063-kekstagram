'use strict';

const version = require(`./src/version`);
const help = require(`./src/help`);
const author = require(`./src/author`);
const description = require(`./src/description`);
const license = require(`./src/license`);
const commonInfo = require(`./src/common-info`);
const wrongCommand = require(`./src/wrong-command`);

const commands = {help, author, version, description, license, wrongCommand, commonInfo};

const checkCommand = (command) => {
  return (command.slice(0, 2) === `--` && command.slice(2) in commands) ? command.slice(2) : command;
};

const input = process.argv[2] ? checkCommand(process.argv[2]) : `commonInfo`;

if (input in commands) {
  commands[input].execute();
} else {
  commands[`wrongCommand`].execute(input);
}
