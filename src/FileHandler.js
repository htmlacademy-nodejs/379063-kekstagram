'use strict';

const fs = require(`fs`);

module.exports = class FileHandler {
  isExist(path) {
    return fs.existsSync(path);
  }

  writeFile(path, data) {
    if (typeof data !== `string`) {
      data = JSON.stringify(data);
    }
    fs.writeFile(path, data, (err) => {
      if (err) {
        throw err;
      }
      return true;
    });
  }
};
