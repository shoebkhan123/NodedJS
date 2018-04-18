var http = require('http');

var server = http.createServer(function(req, res) {
	console.log('Request was made: ' + req.url);
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('Hey There!');	
});
server.listen(1337, '127.0.0.1');
console.log('Now listing port 1337');