#!/usr/bin/node
// A script that prints addition of 2 integers
function add (a, b) {
  return a + b;
}
console.log(add(Number(process.argv[2]), Number(process.argv[3])));
