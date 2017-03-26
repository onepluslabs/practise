

var http = require('http');
var colors = require('colors');
http.createServer(function (req, res){
res.writeHead(200,{'COntent-Type':'text/plain'});
res.end('Hello World');


}).listen(1337,'127.0.0.1');
console.log('Server is running at http://127.0.0.1:133/'.green);