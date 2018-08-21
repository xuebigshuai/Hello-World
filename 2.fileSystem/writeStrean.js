var fs = require("fs");

var ws = fs.createWriteStream('./1.txt',{
    flags:'a',
    encoding:null,
    start:0,
    highWaterMark:1
});
var i = 1;
function write(){
    while (true){
        i++;
        if(i>10){
            ws.end("end");
            return;
        }
        var flag =  ws.write(i.toString());
        if(!flag ){
            console.log("缓存溢出");
            return
        }
    }
};
write();

  ws.on("drain",function(){
      console.log("缓存数据已经输出完");
      write();

  });