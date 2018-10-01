'use strict';

const version = require(`./src/version`);
const help = require(`./src/help`);
const author = require(`./src/author`);
const description = require(`./src/description`);
const license = require(`./src/license`);
const commonInfo = require(`./src/common-info`);
const wrongCommand = require(`./src/wrong-command`);

const input = process.argv[2];

switch (input) {
  case `--help`:
    help.execute();
    break;
  case `--version`:
    version.execute();
    break;
  case `--author`:
    author.execute();
    break;
  case `--description`:
    description.execute();
    break;
  case `--license`:
    license.execute();
    break;
  case undefined:
    commonInfo.execute();
    break;
  default:
    wrongCommand.execute(input);
    break;
}
