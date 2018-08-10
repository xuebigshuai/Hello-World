function Person() {

}
Person.prototype.name ='李四';
Person.prototype.eat =function () {
    console.log(this.name);
};

var p = new Person();
p.name = '张三';
p.hasI = function (arguments) {
    console.log(arguments);
};
var t = p.hasOwnProperty('name');
console.log(p.name,t, typeof p.hasI,'name' in p);

p.eat();