
console.log(a);

var a = new Object() ;
 a.o = function () {
  console.log(arguments);
};
function a () {
    console.log(arguments);
};
console.log(a,a.o);

console.log(bb);
bb();
var bb = 1;
console.log(bb);
function bb() {
    console.log(2);
}
console.log(bb);
bb = 3 ;
console.log(bb);
function bb() {
    console.log(4);
}
console.log(bb);

