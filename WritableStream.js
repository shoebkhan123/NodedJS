/*Writable streams -  allow nade js to write data to a stream
Readable streams-  allow nade js from read data to a stream
Duplex-  Can read and write to a stream
*/

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

myReadStream.on('data', function(chunk) {
	console.log('new chunk recieved.');
	myWriteStream.write(chunk);
});