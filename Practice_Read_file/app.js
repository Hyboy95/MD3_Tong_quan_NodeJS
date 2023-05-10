const fs = require('fs');
console.log("Start");
fs.readFile('test.txt','utf-8', function(err, data) {
    console.log(data);
});
// const data = fs.readFileSync('test.txt',
//     {encoding: 'utf8'});
// console.log(data);
console.log("End");
