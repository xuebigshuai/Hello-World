var method = function () {

};
/*
* 既可以为自己添加方法，又可以为函数原型添加方法;
* */
Function.prototype.addmethod = function (name,fn) {
    Function.prototype[name] = fn;
    this.prototype[name] = fn;
    return this;
};

method.addmethod('checkEmail',function(name,fn){

   console.log("checkEmail");
   return this;
});
method.checkEmail();
var m =new method();
m.checkEmail();
var dd = new Function();
dd.checkEmail();