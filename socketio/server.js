/*
*
*@author xueyushuai
*/
//socket.io 内部借助http来实现
var http = require('http');
var socket = require('socket.io');
//将socket.io用到express框架中
var express = require('express');
var path = require('path');

//express执行后返回的是一个app函数
var app = express();
//app是一个监听函数
app.get('/', function (req, res, next) {
    //发送文件到前端
    //path must be absolute or specify root to res.sendFile
    //res.sendFile(path.resolve('./spaces.html'));
    res.sendFile(path.resolve('./home.html'));
});

var server = http.createServer(app);
//得到一个IO对象
var io = socket(server)
//房间
var room;
//连接建立
io.on('connection', function (socket) {
    console.log("在默认的命名空间：客户端连接建立成功");
    socket.on('message', function (msg) {
        socket.send(msg + 'too');
    });
    //当服务器端可客户端的连接断开时触发disconnect事件.
    socket.on("disconnect", function () {
        console.log("客户端断开连接.");
    });
});
//socket IO 支持命名空间，默认的命名空间是（‘/’），可以不用写of('/')，命名空间的关键字 of();
io.of('/green').on('connect', function (socket) {
    console.log("在green的命名空间：客户端连接建立成功");
    socket.on('message', function (msg) {
        socket.send('green:' + msg + 'too')
        //io.of('/green').sockets.emit('message','你好'+msg);
    })
});

io.of('/red').on('connect', function (socket) {
    console.log("在red的命名空间：客户端连接建立成功");
    socket.on('message', function (msg) {
        console.log(msg)
        console.log(socket.room);
        //socket.send('red:' + msg + 'too')
        /**
         * 发送给当前的请求的socket
         */
        //socket.emit('message','red:' + msg + 'too')
        /**
         *  向除了发送者之外的所有人发送,（一个页面是一个socket）
         */
        //socket.broadcast.emit('message','red:' + msg + 'too')
        /**
         * 向相同房间里发送除发送人之外的所有用户发消息
         */
        //socket.broadcast.to(room).emit('message','来自'+room+'派的消息'+msg)
        /**
         * 向包括发送者在内发送消息
         */
        //io.of('/red').emit('message','你好'+msg);
        /**
         * 向包括发送者在内所在的房间发送消息
         */
        io.of('/red').in(socket.room).emit('message','你好'+msg);

    });
    socket.on('room',function (msg) {
        console.log(msg)
        socket.room =msg;
         socket.join(msg);
    })
});

server.listen(8080);