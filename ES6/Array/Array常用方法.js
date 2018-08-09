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
console.log(Array.concat);