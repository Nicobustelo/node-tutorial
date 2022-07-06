// Create big.txt

// const { writeFileSync } = require('fs');

// for (let index = 0; index < 10000; index++) {
// 	writeFileSync('./content/big.txt', `this data ${index} \n`, { flag: 'a' });
// }

const { createReadStream } = require('fs');

const stream = createReadStream('../content/big.txt', {
	highWaterMark: 90000,
});

stream.on('data', result => {
	console.log(result);
});

stream.on('error', err => {
	console.log(err.path);
});
