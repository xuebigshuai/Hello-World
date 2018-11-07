let ws =require("nodejs-websocket");
var game1 = null,game2 = null , game1Ready = false , game2Ready = false;
var count =0;
ws.createServer(function (conn) {
    /**
     * conn为每次打开socket的连接，不同的连接有不同的key 来标识，所以每次连接进来时，用一个全局常量来标识某个具体的连接。
     */
    conn.on("text",function (str) {
        if(count>10){
            game2.close("点击到达了10次")
            game1.close("点击到达了10次")
        }
        if(str==="game1"){
            game1 = conn;
            game1Ready=true;
            game1.send("game1 is success")
        }
        if(str==="game2"){
            game2 = conn;
            game2Ready=true;
            //game2.sendText("game2连接成功");
        }
        if(game1Ready&&game2Ready){
            game2.sendText(str);
            setInterval(function () {
                game1.send(count.toString());
                game2.send(count.toString());
                count++;
            },10000)
        }
        //conn.sendText(str)

    });
    conn.on("close",function (code,message) {
        console.log("连接关闭")
    });
    conn.on("error", function (code, reason) {
        console.log("异常关闭")
    });
    
}).listen(8001);
console.log("websocket建立完毕");