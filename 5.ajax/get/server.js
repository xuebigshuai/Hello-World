var fs   = require("fs");
var http = require('http');
http.createServer(function (req,res) {
    if(req.url == '/'){
        fs.createReadStream("./get.html").pipe(res);
    }else if(req.url == '/user.json') {
        fs.createReadStream("./user.json",{encoding:'utf8'}).pipe(res);
    }
}).listen(8080,'localhost');