let express = require('express');

let session = require("express-session");

let boyParser= require("body-parser");

let app = express();

app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'xys'

}));
/*
* 使用后多了 req.session 属性
* */
app.get("/",function (req,res) {
    var isLogin = req.session.isLogin;
    if(isLogin){
        res.send("欢迎老朋友");
    }else {
        req.session.isLogin=true;
        res.send("欢迎新朋友");
    }
    
});
app.listen(8088);

