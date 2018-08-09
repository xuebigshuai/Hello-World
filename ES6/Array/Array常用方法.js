var arr1 = [1,2,3];
var arr2 = [4,5,6];
/**
 * concat,原数组不变，返回新的数组
 * */
var arr3 = arr1.concat(arr2);
console.log(arr3);
/**
 * 原数组改变
 * push
 * */
Array.prototype.push.apply(arr1,arr2);
console.log(arr1);
/*
删除最后一个元素
* pop
* */
arr1.pop();
console.log(arr1);
/**
 * 删除第一个元素,原数组改变,并返回新的长度。
 * shift
 */
arr1.shift();
console.log(arr1);
/**
 * 向数组的开头添加一个或更多元素，并返回新的长度。
 * unshift
 */
arr1.unshift([890]);
console.log(arr1);
/**
 * arr.map(callback(element[, index[, array]])[, thisArg])
 * map,返回一个新数组，原数组不变，数组中的元素轮流执行map中的函数,函数的返回值组成新的数组
 */

var arr4 =arr1.map(function (item,index) {
    if(item>3){
        return this[0];
    }else {
        return item-1;
    }


},arr2);
var arr5 = arr1.map(parseInt);
var gg = parseInt("12.3");
console.log(gg);
console.log("arr1",arr1);
console.log("arr2",arr2);
console.log("arr4",arr4);
console.log(arr5);
/**
 *filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素,arr.filter(callback(element[, index[, array]])[, thisArg])
 * filter
 */
var arr6 = arr1.filter(function (item) {
    if(item>3){
        return true;
    }else {
        return false;
    }
});
console.log("arr6",arr6);
/**
 * 匹配数组中该元素第一次出现的位置
 * indexof
 */
var num = arr1.indexOf(3,2);//第一个参数为要匹配的元素，第二参数为要从第几个元素开始匹配
console.log(num);
/**
 *
 * 方法可从已有的数组中返回选定的元素。
 * slice
 */
var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"
var n = arr.slice(1,2);
console.log("arr",arr,n);

/**
 * splice 方法向/从数组中添加/删除项目，然后返回被删除的项目。
 */

/**
 * join() 	把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔
 */


