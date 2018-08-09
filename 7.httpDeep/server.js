let http = require('http');
http.createServer(function (req,res) {
    var url =req.url;
    if(url == '/'){
        res.writeHeader(200,'OKKK',{'name':'xys','price':'9000'});
        res.end('ajax');
    }

}).listen(8080,'localhost',511,function () {
    console.log("服务已启动")
});