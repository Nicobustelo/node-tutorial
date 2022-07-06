const http = require('http');
const { openStdin } = require('process');

const server = http.createServer();

server.on('request', (req, res) => {
	if (req.url === '/') {
		res.end(`
	<h1>HI MOM</h1>
	`);
	} else if (req.url === '/about') {
		res.end(`
	<h1>THIS IS MY ABOUT PAGE</h1>
	`);
	} else {
		res.end(`
	<h1>YOU ARE LOST MY DUDE</h1>
	`);
	}
});

server.listen(5000, () => {
	console.log('Server is runing in port 5000');
});
