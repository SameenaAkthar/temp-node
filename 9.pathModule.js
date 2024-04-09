const path=require('path');

console.log(path.sep);
const filePath=path.join('/content','./subfolder','.test.txt');
console.log(filePath);

const name=path.basename(filePath);
console.log(name);
const absolute=path.resolve(__dirname,'constent','subfolder','test.txt');
console.log(absolute);