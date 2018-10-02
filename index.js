'use strict';

const version = require(`./src/version`);
const help = require(`./src/help`);
const author = require(`./src/author`);
const description = require(`./src/description`);
const license = require(`./src/license`);
const commonInfo = require(`./src/common-info`);
const wrongCommand = require(`./src/wrong-command`);

const commands = {};
const input = process.argv[2] ? process.argv[2] : `empty`;

Object.defineProperty(commands, `--help`, {value: help.execute.bind(help)});
Object.defineProperty(commands, `--version`, {value: version.execute.bind(version)});
Object.defineProperty(commands, `--author`, {value: author.execute.bind(author)});
Object.defineProperty(commands, `--license`, {value: license.execute.bind(license)});
Object.defineProperty(commands, `--description`, {value: description.execute.bind(description)});
Object.defineProperty(commands, `wrong`, {value: wrongCommand.execute.bind(wrongCommand)});
Object.defineProperty(commands, `empty`, {value: commonInfo.execute.bind(commonInfo)});

if (input in commands) {
  commands[input]();
} else {
  commands[`wrong`](input);
}
