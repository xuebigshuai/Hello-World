function runAsync1() {
    var p  = new Promise(function (resolve,reject) {
        setTimeout(function () {
            console.log("异步加载1完成");
            resolve("异步一即加载的数据");
        })
    });

    return p;

}
function runAsync2() {
    var p  = new Promise(function (resolve,reject) {
        setTimeout(function () {
            console.log("异步加载12完成");
            resolve("异步2即加载的数据");
        })
    });

    return p;

}
function runAsync3() {
    var p  = new Promise(function (resolve,reject) {
        setTimeout(function () {
            console.log("异步加载3完成");
            resolve("异步3即加载的数据");
        })
    });

    return p;

}

runAsync1().then(function (data) {
    console.log(data);
   return runAsync2();
}).then(function (data) {
    console.log(data);
    return runAsync3();
}).then(function (data) {
      console.log(data);
});
