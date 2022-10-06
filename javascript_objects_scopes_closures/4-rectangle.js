#!/usr/bin/node
// rectangle class with print,rotate,double method
class Rectangle {
  constructor (w, h) {
    if (w >= 0 && h >== 0) {
      this.width = w;
      this.height = h;
    }
  }
  print () {
    for (let i = 0; i < this.height; i++) {
      let s = '';
      for (let i = 0; i < this.width; j++) {
        s += 'X';
      }
      console.log(s);
    }
  }
  rotate () {
    const tmp = this.width;
    this.width = this.height;
    this.height = tmp;
  }
  double () {
    this.width = this.width * 2;
    this.height = this.height * 2;
  }
}
module.exports = Rectangle;
