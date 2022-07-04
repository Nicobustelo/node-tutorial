// HTTP module

const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Welcome to our home page');
		res.end();
	}
	if (req.url === '/about') {
		res.end('Here is our short history');
	}
	if (req.url !== '/about' && req.url !== '/') {
		res.end(`
        <h1>Oops!</h1>
        <p>We cant seem to find the page you are looking for</p>
        <a href="/">Back Home</a>
        `);
	}
});

server.listen(5000);
