"use strict";
//promices
//pomices are better way to handle error and success
//Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations
//Promises are the ideal choice for handling asynchronous operations in the simplest manner.
//network call always return promices


// const postData = [
//     {title : 1},
//     {title : 2}
    
// ];

// const postData2 = [
//     {title : 11},
//     {title : 22}
    
// ];

// //return promises
// const getPostFun = (status) => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (status == 200 ){
//                 //console.log('request successful');
//                 resolve(postData);
//             }else{
//                 //console.log('request failed');
//                 reject("post rejected");
//             }
//     },1000);
//     });  
// } 

// const getPostFun2 = (status) => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (status == 200 ){
//                 //console.log('request successful');
//                 resolve(postData2);
//             }else{
//                 //console.log('request failed');
//                 reject("post rejected 2");
//             }
//     },1000);
//     });  
// }

// getPostFun(2000).then((data)=>{
//     console.log('data',data);
//     getPostFun2(200).then((data2)=>{
//         console.log('postData2',postData2);
//     }).catch((err)=>{
//         console.log('err2',err);
//     })

// }).catch((err)=>{
//     console.log('err',err);
// }).then(()=>{
//     console.log('shit this is error ');
// }).catch(()=>{
//     console.log('hahah');
// })

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//A promise is said to be settled if it is either fulfilled or rejected, but not pending. You will also hear the term resolved used with promises — this means that the promise is settled or “locked-in” to match the state of another promise.
//The methods promise.then(), promise.catch(), and promise.finally() are used to associate further action with a promise that becomes settled.

//.then() method takes up to two arguments; the first argument is a callback function for the resolved case of the promise, and the second argument is a callback function for the rejected case. Each .then() returns a newly generated promise object, which can optionally be used for chaining;

//Handling a rejected promise in each .then() has consequences further down the promise chain. Sometimes there is no choice, because an error must be handled immediately. In such cases we must throw an error of some type to maintain error state down the chain. On the other hand, in the absence of an immediate need, it is simpler to leave out error handling until a final .catch() statement. A .catch() is really just a .then() without a slot for a callback function for the case when the promise is resolved.

//myPromise
// .then(handleResolvedA)
// .then(handleResolvedB)
// .then(handleResolvedC)
// .catch(handleRejectedAny);

// function sayHello(){
//     console.log('Hello world');
// }

// let promices1 = new Promise((resolve,reject)=>{
//     // sayHello();
//     let x = 1;
//     if (x == 1){
//         resolve(sayHello());
//     }else{
//         reject('error');
//     }
// });

// promices1.then(()=>{
//     console.log('done')}).catch(()=>{
//     console.log('not done')
// })


//Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.


// let done = "" ; 
// const isItDoneYet = new Promise((resolve,reject)=>{
//     if (done){
//         resolve("this is done");
//     }else{
//         reject("still pending");
//     }
// })
// isItDoneYet.then((successResponce)=>{
//     console.log(successResponce);
// }).catch((failResponce)=>{
//     console.log(failResponce);
// })


//promice is created using promice constructor which is initilized by
//new Promise()+9


// let done1 = false ; 
// const isItDoneYet1 = new Promise((resolve,reject)=>{
//     if (done1==true){
//         resolve("this is done");
//     }else{
//         reject("still pending");
//     }
// })
// let result1 = () => {
//     isItDoneYet1.then((successResponce)=>{
//         console.log(successResponce);
//     }).catch((failResponce)=>{
//         console.log(failResponce);
//     });
// } 
// result1();



//const promise = new Promise((resolve, reject) => {
  //  resolve('Promise resolved');  // Promise is resolved
 //   reject('Promise rejected');   // Promise can't be rejected
//  });

// Consuming a Promise
// Now that we know how to create a promise, let’s understand how to consume an already created promise. We consume a promise by calling then() and catch() methods on the promise.
// For example, requesting data from an API using fetch which returns a promise.
// .then() syntax: promise.then(successCallback, failureCallback)

// const promise = new Promise((resolve, reject) => {
//     const randomNumber = Math.random();
    
//     if(randomNumber < .7) {
//       resolve('All things went well!');
//     } else {
//       reject(new Error('Something went wrong'));
//     }
//   });
//   promise.then((data) => {
//     console.log(data);  // prints 'All things went well!'
//     },
//     (error) => {
//     console.log(error); // prints Error object
//     }
//   );

//best practice

// const promise1 = new Promise((resolve, reject) => {
//     resolve('Promise1 resolved');
//   });
//   const promise2 = new Promise((resolve, reject) => {
//     resolve('Promise2 resolved');
//   });
//   const promise3 = new Promise((resolve, reject) => {
//     reject('Promise3 rejected');
//   });
//   promise1
//     .then((data) => {
//       console.log(data);  // Promise1 resolved
//       return promise2;
//     })
//     .then((data) => {
//       console.log(data);  // Promise2 resolved
//       return promise3;
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);  // Promise3 rejected
//     });
  

// ommon Mistake
// A lot of beginners make the mistake of nesting promises inside another promise. For example:
// const promise1 = new Promise((resolve, reject) => {
//   resolve('Promise1 resolved');
// });
// const promise2 = new Promise((resolve, reject) => {
//   resolve('Promise2 resolved');
// });
// const promise3 = new Promise((resolve, reject) => {
//   reject('Promise3 rejected');
// });
// promise1.then((data) => {
//   console.log(data);  // Promise1 resolved
//   promise2.then((data) => {
//     console.log(data);  // Promise2 resolved
    
//     promise3.then((data) => {
//       console.log(data);
//     }).catch((error) => {
//       console.log(error);  // Promise3 rejected
//     });
//   }).catch((error) => {
//     console.log(error);
//   })
// }).catch((error) => {
//     console.log(error);
//   });
// Although this works fine, this is considered to be a poor style and makes our code difficult to read. If you have a sequence of promises to resolve, it’s better to chain promises one after another rather than nest one inside another.



// Promise.all( )
// This method takes an array of promises as input and returns a new promise that fulfills when all of the promises inside the input array have fulfilled or rejects as soon as one of the promises in the array rejects. For example:
// const promise1 = new Promise((resolve, reject) => {
//  setTimeout(() => {
//   resolve('Promise1 resolved');
//  }, 2000);
// });
// const promise2 = new Promise((resolve, reject) => {
//  setTimeout(() => {
//   resolve('Promise2 resolved');
//  }, 1500);
// });
// Promise.all([promise1, promise2])
//   .then((data) => console.log(data[0], data[1]))
//   .catch((error) => console.log(error));


//SIMPLE AND BEST WAY To use promices 

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );



//callback hell : 
//A guide to writing asynchronous JavaScript programs

// What are callbacks?
// Callbacks are just the name of a convention for using JavaScript functions. There isn't a special thing called a 'callback' in the JavaScript language, it's just a convention. Instead of immediately returning some result like most functions, functions that use callbacks take some time to produce a result. The word 'asynchronous', aka 'async' just means 'takes some time' or 'happens in the future, not right now'. Usually callbacks are only used when doing I/O, e.g. downloading things, reading files, talking to databases, etc.

//How do I fix callback hell?

//1) use functuion names insted of anonmus function 
//2. Modularize : "Write small modules that each do one thing, and assemble them into other modules that do a bigger thing. You can't get into callback hell if you don't go there."
//3) Handle every single error : 
//Having the first argument be the error is a simple convention that encourages you to remember to handle your errors.
//Splitting your code into small pieces like this also helps you handle errors, write tests, forces you to create a stable and documented public API for your code, and helps with refactoring.
//The most important aspect of avoiding callback hell is moving functions out of the way so that the programs flow can be more easily understood without newcomers having to wade through all the detail of the functions to get to the meat of what the program is trying to do.


//simple format 
// let prom = new Promise((resolve,reject)=>{
//        let  x = 13;
//         if(x == 12){
//             resolve('successful');
//         }else{
//             reject('fail');
//         }
// });

// prom.then(()=>{
//     console.log('on full ment');
// })
// prom.catch(()=>{
//     console.log('on unfullfillment');
// });


//----------------------------------

// let prom = new Promise((resolve,reject)=>{
//     let  x = 12;
//      if(x == 12){
//          resolve('successful');
//      }else{
//          reject('fail');
//      }
// });


// prom.then((data)=>{onfullfillment(data)}); //or by function you can send data to another function
// prom.catch(onunfullfillment); //this function will get called automatically


// function onfullfillment(x){
//     console.log('onfullfillment onfullfillment',x);
// }


// function onunfullfillment(){
//     console.log('onunfullfillment onunfullfillment');
// }


//-----------------------------------------------------
let  x = 12;
let prom  = (x) => {
    return  new Promise((resolve,reject)=>{
       
         if(x == 12){
             resolve('successful');
         }else{
             reject('fail');
         }
    });
    
} 
//prom(x);
prom(x).then((data)=>{onfullfillment(data)}).catch(onunfullfillment);


function onfullfillment(x){
    console.log('onfullfillment onfullfillment',x);
}


function onunfullfillment(){
    console.log('onunfullfillment onunfullfillment');
}

//----------------------------------------------------------------------

//async await : 






















