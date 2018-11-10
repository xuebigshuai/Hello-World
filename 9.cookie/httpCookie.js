let http = require('http');
let url = require('url');
/**
 * 请求参数的解析模块
 */
let queryString = require('querystring');
/**
 * 传统的http请求
 */
http.createServer(function (req, res) {
    /**
     * 解析请求路径
     */
    var urlobj = url.parse(req.url, true);
    /**
     * 路径名
     * @type {null|*|string|string}
     */
    var pathName = urlobj.pathname;
    //设置cookie的失效时间，必须是GMT格式
    var time = new Date(new Date().getTime() + 60 * 1000).toGMTString();
    if (pathName == '/buy') {
        res.setHeader('Set-Cookie',
            'phoneNumber'+Math.random()+'='+Math.random()+'; expires=' + time + '');
        res.end("write");
    } else if (pathName == '/car') {
        var cookie =req['headers']['cookie'];
        var cookieObj = queryString.parse(cookie,"; ");
        console.log(cookieObj);
        res.end(JSON.stringify(cookieObj));
    }
}).listen(8080);