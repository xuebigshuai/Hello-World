let http = require('http');
var iconv = require('iconv-lite');
function getInfo (){
    let p = new Promise(function (resolve,reject) {
        http.get('http://news.163.com/domestic/',(res)=>{
            let result  = [];
            res.on('data',(data)=>{
                //解决gbk和Utf8 的乱码问题
                data = iconv.decode(data,'GBK');
                console.log(data);
                result.push(new Buffer(data,"utf8"));
            })
            res.on("end",()=>{
                console.log(Buffer.concat(result));
                resolve(Buffer.concat(result));
            })
        });
    });

    return p;

}
exports.getInfo = getInfo;
//exports.info =info;




