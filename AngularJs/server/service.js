/*
*
*@author xueyushuai
*/
var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var app=express();
var fs = require('fs');

app.use(express.static(path.resolve('..')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.listen(8080);
var books =require('./book');
app.route("/").get(function (req,res) {
   fs.createReadStream('../filter/page.html').pipe(res);
});
app.route("/book").get(function (req,res) {
    console.log(books);
    res.send(books)
});
