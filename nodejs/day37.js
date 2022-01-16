
// //how to add modules
 
// var isEven = require('is-even');
// console.log(isEven(0));
// console.log(isEven(1));
 
// //create server
 
// //client request and server respoce is objects
 
// const http = require("http");
 
// http.createServer((request,responce)=>{
//     //console.log('request',request.url,request.method);
//     if (request.method=='GET' && request.url == '/get/friends/') {
//         console.log('this is get request');
//     }else if (request.method=='POST' && request.url == '/add/friends/') {
//         console.log('this is post request');
//     }
// }).listen(8080);
 
 


//create server 
var server = require('http');
server.createServer((req,res)=>{
        console.log('server is running');
        console.log(req);





        if())

}).listen(8080);