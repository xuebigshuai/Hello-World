var http =require('http');
http.createServer(function (req,res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url == "/ajax") {
        var contentType = req.headers['content-type'];
        req.on("data", function (data) {
            if (contentType == "application/x-www-form-urlencoded") {
                var getdata = JSON.parse(data);
                console.log(getdata.toString());
                res.end(data);
            }else if(contentType == 'application/json'){
                console.log(data);
            }
            res.end(data.toString());

        });

    }
}).listen(9090);
