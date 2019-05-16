'use strict';

const fs = require('fs');

let file = process.argv[2];
console.log('file', file);

fs.readFile(file, (err, data) => {
  if (err) throw err;
  console.log('original:', data);
  let random = parseInt(Math.random() * 10);
  console.log('this is random', random);

  fs.writeFile(file, random, err => {
    if (err) throw err;
    console.log('file has been saved!');
  });

  fs.readFile(file, (err, data) => {
    if (err) throw err;
    console.log('modified:', data.toString());
  });
});
