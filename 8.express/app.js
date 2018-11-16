/**
 * 模板的使用
 * @type {*|createApplication}
 */

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.listen(8282);
var path = require("path");
var fs= require("fs");
var data = {"title":"模板","name":"薛煜帅","age":24,"pin":"xueyushuai"};
app.set('view engine','ejs');
console.log(__dirname);
app.set('views',__dirname);
app.use(bodyParser.urlencoded({extended:true}));
app.get("/index",function (req, res) {
    //第二参数为传入模板的对象
    res.render('index',data);
});
app.get("/user",function (req,res) {
    fs.createReadStream("./restful/user.json").pipe(res);
});
app.get("/user/:id",function (req,res) {
   var users = require("./restful/user");
   user = users.filter(function (item) {
       return item.id == req.params.id
   });
   res.send(user);
});
