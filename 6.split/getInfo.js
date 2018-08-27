let client = require('./client');
let http =require('http');
http.createServer(function (req,res) {
    //response.setEncoding('utf8');
    var html = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '</head>\n' +
        '<body>\n<div></div>' +
        '\n' +
        '</body>\n' +
        '</html>'
    if(req.url = '/'){
        client.getInfo().then(function (data) {
              console.log(data);
              data = data.toString();
             let reg =/<a .+ <\/a>/g;
             //将A标签过滤出来
             let matches = data.match(reg);
             let innerHtml ='';
             matches.forEach(function (item) {
                 innerHtml += '<li>'+item+'</li>';
             });
             //replace 返回一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。
            html = html.replace('<div></div>',innerHtml);
             console.log(html);
             res.end(html);
        });
    }

}).listen(8080);