#!/usr/bin/node
// write a script that imports a dictionary of occurences by user id
const dict = require('./101-data');
const newDict = {};
for (const key in dict) {
  if (newDict[dict[key]] === undefined) {
    newDict[dict[key]] = [key];
  } else {
    newDict[dict[key]].push(key);
  }
}
console.log(newDict);