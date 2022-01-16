"use strict";

//js asuncronus behaviour : js will take task and  start code execution but not 
//wait for task completion it will take other task 
//once any of them task get completed first js will return responce first

//js is event driven language :  means javascript  will not wait for task completiopn 
//for time consuming tasks //it will take another task
function print7(){console.log('7');};
let x = () => {setTimeout(function(){console.log('3')},5000)};
console.log('x',x);
console.log('1');
console.log('2');
x();
setTimeout(print7,3000);
console.log('4');
console.log('5');



