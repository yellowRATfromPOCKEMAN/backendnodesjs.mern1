var http = require('http');
var data = require('./test');
http.createServer(function(req,res){  
    res.writeHead(200,{'Content-Type':'text/html'}) 
    // res.writeHead(200,{'Content-Type':'text/plain'}) 
    // res.writeHead(200,{'Content-Type':'application/json'})  
    res.write("<h1>RAIT</h1>" + data.testModule())
    res.end('<h2>Welcome to Rait</h2>')
}).listen(8787);



// http://192.168.1.1/

