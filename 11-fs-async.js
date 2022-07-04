// FS module Asynchronous

const { readFile, writeFile } = require('fs');

// Same as doing this:

// const fs = require('fs')
// fs.readFile
// fs.writeFile

// We need to add a callback function
console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	const first = result;
	readFile('./content/second.txt', 'utf8', (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = result;
		writeFile(
			'./content/result-async.txt',
			`This is the async result: ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log('done with this task');
			}
		);
	});
});

console.log('starting next task');
