const {readFileSync, writeFileSync}=require('fs');
console.log('start');
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

console.log(first,second);
//it will create a new file or if the file exist then it will override the contents

writeFileSync(
  './content/third.txt',
  'it is new',
  {flag:'a'}
);
console.log('done with the task');
console.log('starting next line');

