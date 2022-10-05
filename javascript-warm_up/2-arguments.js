#!/usr/bin/node
// A script that prints a message depending of the number of arguments that passed
if (process.argv.length === 2) {
	console.log('No argument found');
}
if (process.argv.length === 3) {
	console.log('Argument found');
}
if (process.argv.length > 3) {
	console.log('Arguments found');
}
