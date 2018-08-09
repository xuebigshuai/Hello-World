/**
 * 方法一
 * @returns {Array}
 */
var arr = [1,2,3,4,4,1,1,2,1,1,1,1,2,3,4,4,1,1,2,1,1,11,2,3,4,4,1,1,2,1,1,11,2,3,4,4,1,1,2,1,1,12,3,4,4,1,1,2,1,1,12,3,4,4,1,1,2,1,1,12,3,4,4,1,1,2,1,1,12,3,4,4,1,1,2,1,1,12,3,4,4,1,1,2,1,1,12,3,4,4,1,1,2,1,1,12,3,4,4,1,1,2,1,1,12,3,4,4,1,1,2,1,1,12,3,4,4,1,1,2,1,1,12,3,4,4,1,1,2,1,1,1];
Array.prototype.distinct1 = function(){
    var arr = this,
        result = [],
        i,
        j,
        len = arr.length;
    console.time("distinct1");
    for(i = 0; i < len; i++){
        for(j = i + 1; j < len; j++){
            if(arr[i] === arr[j]){
                j = ++i;
            }
        }
        console.timeEnd("distinct1");
        result.push(arr[i]);
    }
    return result;
};
console.log(arr.distinct1().sort());  //返回[3,4,2,1]

/**
 * 方法二
 */
Array.prototype.distinct2 = function() {
    var arr = this;
    var i = 0;
    var j = 0;
    var len = arr.length;
    console.time("distinct2");
    for(i;i<len;i++){
        for(j=i+1;j<len;j++){
            if(arr[i] === arr[j]){
                arr.splice(j,1);
                len--;
                j--;
            }
        }
    }
    console.timeEnd("distinct2");
    return arr;
};
var result = arr.distinct2();
console.log(result.sort(function (a,b) { return b-a; }));

/**
 * 方法三：利用对象的属性不能相同的特点进行去重
 */
Array.prototype.distinct3 = function(){
    var arr = this;
    var obj = {};
    var result = [];
    console.time("distinct3");
    for (var i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
            result.push(arr[i]);
        }
    }
    console.timeEnd("distinct3");
    return result;
};
var reb = arr.distinct3();
console.log(reb.sort(function (a,b) { return a-b; }));

/**
 * 方法四、运用递归的思想

 先排序，然后从最后开始比较，遇到相同，则删除
 */
Array.prototype.distinct4 = function () {
  var arr = this;
  arr.sort();
  var len = arr.length;
    console.time("distinct4");
  function loop(index) {
      while (index>0){
          if(arr[index] === arr[index-1]){
              arr.splice(index,1)
          }
          loop(--index);
      }
  }
  loop(len -1);
    console.timeEnd("distinct4");
    return arr;
};
var rec = arr.distinct4();
console.log(rec.sort(function (a,b) { return a-b; }));

/**
 * 方法五、
 * 利用indexOf以及forEach
 * @returns {Array}
 */
 Array.prototype.distinct5 = function () {
  var arr = this;
  var result = [];
  var len = arr.length;
    console.time("indexOf");
    arr.forEach(function (value,index,array) {//这里利用map，filter方法也可以实现
        var b = array.indexOf(value,index+1);
        if(b === -1){
            result.push(value);
        }
    });
    console.timeEnd("indexOf");
    return result;
};
 var red = arr.distinct5();
 console.log(red.sort(function (a,b) { return a-b; }));

/**
 * 方法六：利用ES6的set
 * @returns {Array}
 */
 function unique (arr) {

    return Array.from(new Set(arr));
};
 console.time("unique");
var ree = unique(arr);
console.timeEnd("unique");
console.log(ree.sort(function (a,b) { return a-b; }));
console.time("unique2");
var ref =[...new Set(arr)];
console.timeEnd("unique2");
console.log(ref.sort(function (a,b) { return a-b; }));
