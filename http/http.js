var http = require('http');
http.createServer(function (req,res) {

    if(req.url == '/'){
        res.writeHead(200,{"content-Type":"text/html;charset=utf8"})
        res.end("首页")
    }

}).listen(8080,"localhost");