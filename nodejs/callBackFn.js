'use strict';
/**
 "I will call back later!"

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished

 */

//js function is excuted in sequence they have called ot in sequence they are declared
let x = () => {console.log('1');};
let y = () => {console.log('2');};
y();
x();

//JavaScript Callbacks
//A callback is a function passed as an argument to another function.
function sayThankYou(){ //this is callback function which is get passwd as argument to another
    //function
   return  "thank you";
}

function user(userName,cB_fun){//the function thet accept another function as arguemt is called 
    //as heigher order function //hich contain loic to when callback function
    //get executed

    console.log(`${userName} ${cB_fun()}`);
}

user('ankit',sayThankYou); //notice that when we sending function to another functuion
//we do it without paramnthesis ()


//js asyncronus 

let greetingFn = () =>{console.log('good morning');};
console.log('greetingFn',greetingFn);
setTimeout(greetingFn,5000); //remeber to not to use () in set timeout else it will invoke it
//imiidetely

// let displayTime = () => {
//     let newDateCurr = new Date();
//    // console.log('newDateCurr',newDateCurr);
//     console.log(`${newDateCurr.getHours()} : ${newDateCurr.getMinutes()} :  ${newDateCurr.getSeconds()} `);
// }

// setInterval(displayTime,1000);


//javascrpt asyncronux 

//General asynchronous programming concepts
/*
Asynchronous? : 
Blocking code : 
Asynchronous techniques are very useful, particularly in web programming. 
When a web app runs in a browser and it executes an intensive chunk of code without returning control 
to the browser, the browser can appear to be frozen. This is called blocking;
 the browser is blocked from continuing to handle user input and perform other tasks until 
 the web app returns control of the processor.

 Threads : A thread is basically a single process that a program can use to complete tasks.
  Each thread can only do a single task at once:

Task A --> Task B --> Task C

JavaScript is traditionally single-threaded. Even with multiple cores,
 you could only get it to run tasks on a single thread, called the main thread. 

After some time, JavaScript gained some tools to help with such problems. 
Web workers allow you to send some of the JavaScript processing off to a separate thread, 
called a worker so that you can run multiple JavaScript chunks simultaneously. 
 
Main thread: Task A --> Task C
Worker thread: Expensive task B

Programming languages that can support multiple threads can 
use multiple cores to complete multiple tasks simultaneously:

JavaScript is traditionally single-threaded. Even with multiple cores,
 you could only get it to run tasks on a single thread, called the main thread

 Web workers allow you to send some of the JavaScript processing off to a separate thread, 
 called a worker so that you can run multiple JavaScript chunks simultaneously.
  You'd generally use a worker to run expensive processes off the main thread so that user interaction is not blocked.

  Main thread: Task A --> Task C
Worker thread: Expensive task B

HTML Web Workers API : 

A web worker is a JavaScript running in the background, without affecting the performance of the page.

When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.

A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things,
 etc., while the web worker runs in the background.

Since web workers are in external files, they do not have access to the following JavaScript objects:

The window object
The document object
The parent object

In addition to the standard JavaScript set of functions (such as String, Array, Object, JSON, etc.),
 you can run almost any code you like inside a worker thread. There are some exceptions: 
 for example, you can't directly manipulate the DOM from inside a worker, 
or use some default methods and properties of the window object

Data is sent between workers and the main thread via a system of messages —
 both sides send their messages using the postMessage() method,
  and respond to messages via the onmessage event handler 
  (the message is contained within the Message event's data property). 
The data is copied rather than shared.



Web workers are pretty useful, but they do have their limitations.
 A major one is they are not able to access the DOM — 
 you can't get a worker to directly do anything to update the UI. 
 We couldn't render our 1 million blue circles inside our worker; 
it can basically just do the number crunching

 browsers allow us to run certain operations asynchronously.
  Features like Promises allow you to set an operation running
   (e.g. the fetching of an image from the server), 
 and then wait until the result has returned before running another operation:


 Main thread: Task A                   Task B
    Promise:      |__async operation__|
Since the operation is happening somewhere else, the main thread is not blocked while the async operation is being processed.

*/