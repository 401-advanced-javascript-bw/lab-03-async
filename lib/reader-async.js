'use strict';

const fs = require('fs');
const readFile = util.promisify(fs.readFile);

module.exports = exports = (files, callback) => {
  readAll([...files], callback);
};

const readAll = async (paths, callback) => {
  let contents = [];

  try {
    let fileContent = await readFile(paths[0]);
    console.log('Read File 1');
    contents.push(fileContent.toString().trim());

    fileContent = await readFile(paths[1]);
    console.log('Read File 2');
    contents.push(fileContent.toString().trim());

    fileContent = await readFile(paths[2]);
    console.log('Read File 3');
    contents.push(fileContent.toString().trim());

    callback(null, contents);
  } catch (err) {
    callback(err);
  }
};