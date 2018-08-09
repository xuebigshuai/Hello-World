function Person() {

}
Person.prototype.name ='李四';

var p = new Person();
//p.name = '张三';
p.hasI = function (arguments) {
    console.log(arguments);
};
var t = p.hasOwnProperty('name');
console.log(p.name,t,typeof  p.hasI);