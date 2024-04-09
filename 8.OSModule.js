const names=require('./4.names.js');
const say=require('./5.moduleoftwo.js');
console.log(names);

say(names.one);
say(names.sec);

const data=require('./6.alternative.js');
require('./7.mindgrenade.js');

const os=require('os');

//info about current user
const user=os.userInfo();

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentos={
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem()
}
console.log(currentos);
console.log(os.arch());