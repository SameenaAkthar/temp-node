const {readFile, writeFile, read, write}=require('fs');

console.log('start');
readFile(
  './content/first.txt','utf8',
  (err,result)=>{
  if(err){
    return;
  }
  const first=result;
  readFile(
    './content/second.txt','utf8',
    (ree,result)=>{
    if(err){
      return;
    }
    const second=result;

    writeFile(
      './content/result.txt',
      'it is me sameena',
      (err,result)=>{
      if(err){
        return;
      }
      console.log('done with this task');
    });
  })
});
console.log('starting a new file again');
