#!/usr/bin/node
// write a function that returns the number of occurences in a list
exports.nbOccurences = function (list, searchElement) {
  let count = 0;
  for (let i = 0; list[i]; i++) {
    if (list[i] === searchElement) {
      count++;
    }
  }
  return count;
};
