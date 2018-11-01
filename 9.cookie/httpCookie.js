let http = require('http');
let cookieParser = require('cookie-parser');
let express = require('express');
let url = require('url');
let queryString = require('querystring');
var app = express();
/**
 * 传统的http请求
 */
http.createServer(function (req, res) {
    var urlobj = url.parse(req.url, true);
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