let mongoose = require('mongoose');
/*
* 5.3.11版的mongoose
* */
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};
let db = mongoose.connect("mongodb://localhost:27017/person", options);
db.then(() => {
    console.log("连接成功")
}).catch(() => {
    console.log("连接失败")
});
/*
* 数据库的集合结构定义，定义字段和类型
* */
var PersonSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: {type: String, default: ""}
});
/*
* 定义一个数据库操作的模型
* 第一个参数为集合的名字,mongoDB会将集合的名字转成复数（如 person->people）
* */
var PersonModel = mongoose.model("person", PersonSchema);
function callback(error,doc) {
    if(error){
        console.error(error)
    }else {
        console.log(doc);
    }
}
/*PersonModel.remove({},callback);

PersonModel.create([{name:'zfx',age:'1'}
,{name:'zfw',age:'2'}
,{name:'wfw',age:'3'}
,{name:'sgfw',age:'4'}
,{name:'sfgw',age:'5'}
,{name:'sfgw',age:'6'}


],callback);*/
/**
 * find 返回游标
 * exce() 真正执行查询
 */
PersonModel.find({},{age:1}).sort({age:-1}).skip(2).limit(3).exec(callback);




























