#!/usr/bin/node
// write a function that return the reversed version of a list
exports.esrever = function (list) {
  return list.map((item, idx) => list[list.length - 1 - idx]);
};
