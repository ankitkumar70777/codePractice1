import os from "os";

console.log("os.EOL ", os.EOL);
console.log("os arch ", os.arch());
console.log('os constants',os.constants);
console.log('os.cpus()',os.cpus());
console.log('os.freemem()',os.freemem() / 1024**2);
console.log('os.homedir()',os.homedir());
console.log('os.hostname()',os.hostname());
console.log('os.loadavg()',os.loadavg());
console.log('os.machine()',os.machine());
console.log('os.networkInterfaces()',os.networkInterfaces());