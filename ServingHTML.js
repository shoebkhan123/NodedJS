var http = require('http');
var fs = require('fs');

server = http.createServer(function(req, res) {
	console.log('Request was made: ' + req.url);
	res.writeHead(200, {'Content-Type' : 'text/html'});
	var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
	myReadStream.pipe(res);
});
server.listen(1337, '127.0.0.1');
console.log('Now listing port 1337');