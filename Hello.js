var http = require('http');
var url = require('url');
var fs = require('fs');
const PORT = process.env.PORT || 5000

http.createServer(function(req, res) {
	var q = url.parse(req.url, true);
	// console.log(q.pathname);
	var filename = "."+ q.pathname;
	if(filename == './') {filename = './index.html';}
	

	console.log(filename);
	fs.readFile(filename,function(err,data){
		if(err){
			res.writeHead(404,{'Content-Type':'text/html'});
			return res.end("404 Page Not found");
		}
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(data);
	// console.log('...Incoming request:'+' '+req.url);
		return res.end();	
	});

	
}).listen(PORT);

console.log("Server listening on port 8080...");