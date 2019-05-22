'use strict';
let util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

let contents = [];
/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files, callback) => {
  readAll([...files], callback);
  contents = [];
};

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */

// const readOne = (file, callback) => {
//   console.log('file from reader', file);
//   fs.readFile(file, (err, data) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(undefined, data);
//     }
//   });
// };

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */

const readAll = (paths, callback) => {
  let contents = [];
  readFile(paths[0])
    .then(data => {
      console.log('Read File 1', data[0]);
      contents.push(data.toString().trim());
      return readAll(paths[1]);
    })
    .then(data => {
      console.log('Read File 2', data[1]);
      console.push(data.toString().trim());
      return readAll(paths[2]);
    })
    .then(data => {
      console.log('Read File 3', data[2]);
      console.push(data.toString().trim());
      callback(null, contents);
    })
    .catch(console.error);
};
