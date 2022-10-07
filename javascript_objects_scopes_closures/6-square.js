#!/usr/bin/node
// write a class that defines a square and inherits from Square of 5-square.js
module.exports = class Square extends require('./5-square.js') {
  constructor (size) {
    super(size, size);
  }
  charPrint (c) {
    if (c === undefined) {
      this.print();
    } else {
      for (let i = 0; i < this.height; i++) {
        let s = '';
        for (let j = 0; j < this.width; j++) {
          s += c;
	}
        console.log(s);
      }
    }
  }
};
