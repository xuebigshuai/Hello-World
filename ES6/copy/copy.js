/**
 * 浅copy和深copy
 *
 */

//浅copy
function copy(father) {
    var children={};
    for (k in father){
        children[k] = father[k];
    }
    return children;
}

let father = {"name":"jack","age":"18","like":['马竞','麻将']};

let child = copy(father);
child.name = 'smallJack';
child.age = '6';
child.like.pop();
console.log(father,child);

//最简单的深度copy;
function deepCopy1(fa) {
    return JSON.parse(JSON.stringify(fa));
}

let child1 = deepCopy1(father);
child1.like.push("play");
console.log(father,child1);
let father2 = ['10','你好'];
for (v in father2){
    console.log(v);
    console.log(father2[v]);
}

//深度copy2
function deepCopy2(obj) {
    var newObj;
    if (obj.constructor === Object) {
        newObj = new obj.constructor();
    } else {
        newObj = new obj.constructor(obj.valueOf());//valueOf(),获取对象的原始值。
        console.log("obj.valueOf()", obj.valueOf());
    }
        for (var key in obj) {
            if (newObj[key] != obj[k]) {
                if (typeof obj[key] == 'object') {  //判断是引用类型还是基本类型，如果为引用类型，接着深度copy，使其指针指向的是不同的对象地址。
                    console.log(obj[key],"++++++++++++++");
                    newObj[key] = deepCopy2(obj[key]);
                } else {
                    newObj[key] = obj[key]
                }
            }
        }
        newObj.valueOf = obj.valueOf;
        newObj.toString = obj.toString;

        return newObj;
    }
let child2 = deepCopy2(father);
child2.like.push("child2");
console.log("father",father,"child2",child2);
console.log(father.like.valueOf() instanceof Array);
console.log(father.like.valueOf());
console.log(father.valueOf());
console.log(father.name.valueOf());
console.log(father.constructor);
console.log(father.name.constructor);
console.log(father.like.constructor);
console.log(father.like.constructor == Object);


//深度copy3
function copy3(obj) {
    var newObj = obj.constructor === Array ?[]:{};
    if(typeof obj != 'object'){
        return obj;
    }
    if(global.JSON){
        newObj = JSON.parse(JSON.stringify(obj))
    }else {
        for (var k in obj){
            newObj[k] = typeof obj[k] === 'object'? copy3(obj[k]):obj[k];
        }
    }
    return newObj;
};
let child3 = copy3(father);
console.log("father3",father);
console.log("child3",child3);


//js面向对象编程中的深度copy
function deepCopy4(p,c){
    c = c || {};
    for (var i in p){
        if(p.hasOwnProperty(i)){
            if(typeof p[i] === 'object'){
                c[i] = Array.isArray(p[i]) ? [] : {};
                deepCopy(p[i],c[i]);
            }else{
                c[i] = p[i];
            }
        }
    }
    return c;
}