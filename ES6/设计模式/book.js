var Book = function () {
    var bookNum = 0;

    console.log("BOOK");
    console.log(this);
    this.name = 'a';
};
var book = new Book();

console.log(book.name);
/**
 * 闭包的实现
 */
var Book2 = (function () {
    var bookNum = 0;
    var _book = function (name,price) {

        this.getName = function () {
            return this.name;
        };
        this.getPrice = function () {
            return this.price;
        };

        this.setName = function () {
            this.name = name;
        };

        this.setPrice = function () {
            this.price = price;
        };
        bookNum++;
        if (bookNum>1){
            throw new Error('我们只出版一本书');
        }
        this.setName();
        this.setPrice();
    };
    _book.prototype = {
        isJSBook:false,
        display:function () {

        }
     };
     return _book;
})();

var book2 = new Book2("JS设计模式","100");
console.log(book2.name,book2.price);
var book3 = new Book2("Java","99");
//var book4= new Book2("Java4","199");