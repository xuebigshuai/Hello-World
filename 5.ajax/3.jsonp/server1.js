var http =require('http');
http.createServer(function (req,res) {
    if(req.url=="/ajax"){
        res.end('load(9090)');
    }
}).listen(9090);