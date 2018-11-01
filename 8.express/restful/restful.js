/**
 * 处理post请求
 * @type {*|createApplication}
 */

var express = require('express');
var app =express();
/*解析post请求体中的参数*/
var bodyParser=require('body-parser');
var db = "./user.json";
let fs = require('fs');
let path =require('path');
app.use(bodyParser.urlencoded({extended:true}));
app.post("/user",function (req,res) {
   var newUser = req.body;
   var users = require(db);
   newUser.id = users[users.length-1].id*1 + 1;
   users.push(newUser);
   console.log(users);
   var str = JSON.stringify(users);
   fs.writeFile(db,str,function (error) {
       res.send(newUser);
   });
});
app.listen(8080);