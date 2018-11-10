let cookieParser = require('cookie-parser');
let express = require('express');
var app = express();
/**
 * express框架设置cookie
 */
app.use(cookieParser());
/**
 * 当使用了cookieParser中间件后，会多两个方法和一个属性
 * cookies属性
 * cookie()方法
 */
app.get('/',function (req,res) {
    var isVisited= req.cookies.isVisited;
    if(isVisited){
        res.send("欢迎老朋友")
    }else{
        res.cookie('isVisited','1',{maxAge:10*1000*60});
        res.send("欢迎新朋友")
    }
});
app.listen(8086);
