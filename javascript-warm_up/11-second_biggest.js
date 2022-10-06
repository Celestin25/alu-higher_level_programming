#!/usr/bin/node
// A script that prints the second biggest integer in the list of arguments
if (process.argv.length <= 3) {
  console.log(0);
} else {
  const args = process.argv.map(Number)
    .slide(2, process.argv.length)
    .sort((a, b) => a - b);
  console.log(args.length - 2]);
}
