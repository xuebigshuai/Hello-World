let http =require('http');
//文件路径解析模块
let path= require("path");
let url = require('url');
let queryString = require('querystring');
let session =Object.create(null);
const SESSION_KEY ="session_key";
http.createServer(function (req,res) {
    //设置响应的编码为utf-8,中文不会乱码；
    res.setHeader("Content-Type","text/html;charset=utf-8");
    /**
     * 解析请求路径
     */
    var urlObj =url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(pathName=="/"){
        //获取到的cookie为字符串，要将其解析成对象，用queryString模块
        var cookieObj =queryString.parse(req.headers["cookie"],'; ');
        var sessionId = cookieObj[SESSION_KEY];
        if(sessionId){
            var sessionObj = session[sessionId];
            if(sessionId in session){
                sessionObj.balance -= 10;
                res.end("欢迎老客户，会员卡余额为："+sessionObj.balance);
            }else{
                res.end("欢迎老客户，但你的会员卡号不对");
            }

        }else {
            /**
             * 生成一个sessionID
             * @type {string}
             */
            sessionId =   Date.now()+''+Math.random();
            //在服务器端开辟空间存放该ID
            session[sessionId]={
                balance:100
            };
            res.setHeader("Set-Cookie",SESSION_KEY+"="+sessionId+"; max-age=2000");
            res.end("欢迎新客户，给你一张会员卡，会员卡余额为："+session[sessionId].balance);
        }

    }

}).listen(8080);