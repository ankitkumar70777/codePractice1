"use strict";

function sayHello(param1){
    console.log(`good morning ${param1}`);
}
let testTimeOut = setTimeout(sayHello,3000,'ankit');

for (let x = 5000;x>0;x--){
    console.log(x);
}