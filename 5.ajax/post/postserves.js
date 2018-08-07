/*
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] ;
a = arr.map(parseInt);
console.log(a);

function b() {

}
console.log(typeof b);*/
var http = require('http');
var fs = require("fs");
var url = require('url');
var queryString = require("querystring");
http.createServer(function (req,res) {
      req.setEncoding("utf8");
      var urlobj =url.parse(req.url,true);
      if (urlobj.pathname == '/'){
          fs.createReadStream("./post.html").pipe(res);
      }else if(urlobj.pathname == '/ajax'){
          var contentType = req.headers["content-type"];
          req.on("data",function (data) {
              //var data = JSON.parse(data);
              if(contentType =="application/x-www-form-urlencoded" ){
                  var user = queryString.parse(data);
                  console.log(user);
                  //res.end(queryString.stringify(user));

              }else if(contentType =="application/json"){
                  res.setHeader("content-type","application/json");
                  var obj = JSON.parse(data);
                  console.log(obj);
              }
              res.end(data);

          })
      }
}).listen(8089);
