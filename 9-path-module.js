// path module

const path = require('path')

console.log(path.sep);

const filePath = path.join('/number1','number2','text.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute);