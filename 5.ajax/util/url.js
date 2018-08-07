var url = require('url');

var urlObj = url.parse("http://zfpx:123@lib.csdn.net:8080/my/structure/node/19072292?name=xxx&password=123",true);
/*
*
* protocol: 'http:',协议
  slashes: true,//
  auth: 'zfpx:123',用户名和密码
  host: 'lib.csdn.net:8080',主机
  port: '8080',端口
  hostname: 'lib.csdn.net',主机名
  hash: null,哈希值 锚点
  search: '?name=xxx&password=123',查询字符串
  query: 'name=xxx&password=123',查询内容
  pathname: '/my/structure/node/19072292',路径名
  path: '/my/structure/node/19072292?name=xxx&password=123',路径
  href:
   'http://zfpx:123@lib.csdn.net:8080/my/structure/node/19072292?name=xxx&password=123'
*
* */
console.log(urlObj);
var urlString = url.format(urlObj);
console.log(urlString);