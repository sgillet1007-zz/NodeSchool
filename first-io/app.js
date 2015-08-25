var fs = require('fs');

// console.log(fs.readFileSync('./test.txt','utf-8'));

var str = fs.readFileSync('./test.txt','utf-8').toString();

var array = str.split('\n');

console.log(array.length);

