var fs = require('fs');
fs.readFile("../helloWorld.js",{'encoding':'utf8'},function (error,data) {
    console.log(data);
});

