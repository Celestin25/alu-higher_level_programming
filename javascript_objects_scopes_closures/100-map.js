#!/usr/bin/node
// write a script that an array and computes a new array
let list = require('./100-data').list;
console.log(list);
let i = 0;
list = list.map(x => x * i++);
console.log(list);
