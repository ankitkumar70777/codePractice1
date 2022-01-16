/*
Node http module : 
path module : 
FS module  : 

use : const http : require('http');
 */












const http = require('http');

//http module support createServer function which contaion two object req ad res 
const server = http.createServer((res,req)=>{
        // if(err){
        //     console.log('err :',err);
        // }
        console.log('server is up');
}).listen(8080);
