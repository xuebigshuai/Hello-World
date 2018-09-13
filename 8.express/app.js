var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
var data = {"title":"模板","name":"薛煜帅","age":24,"pin":"xueyushuai"};
app.set('view engine','ejs');
app.set('views',__dirname);
app.use(bodyParser.urlencoded({extended:true}));
app.get("/index",function (req, res) {
    res.render('index',data);
});
app.listen(8282);