var fs = require("fs");
function copy(source,target){
    var rs = fs.createReadStream(source);
    var ws = fs.createWriteStream(target);
    var wsFlag;
    rs.on("data",function(data){
        wsFlag = ws.write(data);
        if(!wsFlag){
            rs.pause();
        }
    });
    rs.on("end",function () {
       ws.end();//当读完时也要关闭写入的文件
    });
    ws.on("drain",function(){
        rs.resume();
    })
}
// copy('../fileSystem/1.txt','./2.txt');
var rs = fs.createReadStream('../fileSystem/1.txt');
var ws = fs.createWriteStream('./2.txt');
    rs.pipe(ws);