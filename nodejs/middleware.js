const express = require("express");
const app = express();
const port = 8080;

app.listen(port, (err) => {
  if (err) {
    console.log("connect error", err);
  }
  console.log("server is up");
});

app.use(express.json());

// let checkUserLogin = (req,res,next) =>{
//   //
//   let loginMsg = new Date(); 
//   req.loginMsg = loginMsg.getHours() + ":" + loginMsg.getMinutes() + ":" 
//                 + loginMsg.getSeconds() + ":" + loginMsg.getMilliseconds() ;
//   next();
// }
// //To load the middleware function, call app.use(), 
// app.use(checkUserLogin);
// //directly write middleware function
// app.use('/',(req,res,next)=>{
//   console.log('req method : ',req.method);
//   next();
// });

// app.all('/',(req,res)=>{
//     console.log('req loginMsg : ',req.loginMsg);
//     res.status(200).send(`welcome to home at :   ${req.loginMsg}` );
// });


// //load multiple middleware in same path
// let loginTime = (req,res,next) =>{
//   let time = Date.now();
//   console.log('time : ',time) ;
//   req.time = time;
//   next();
// }
// let logMsg = (req,res,next)=>{
//   console.log('use logged in ',req.time);
//   next();
// }
// app.use('/hahaha',loginTime,logMsg);
// app.get('/hahaha',(req,res,next)=>{
//   console.log('req.time:::::::::::',req.time);
// });


/*Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

Application-level middleware
Router-level middleware
Error-handling middleware
Built-in middleware
Third-party middleware



*/