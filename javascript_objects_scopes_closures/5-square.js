#!/usr/bin/node
// write a class square that defines a square and inherits from rectangle of 4-rectangle.js
module.exports = class Square extends require('./4-rectangle.js') {
  constructor (size) {
    super(size, size);
  }
};
