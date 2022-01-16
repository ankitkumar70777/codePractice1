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

app.all('/',(req,res)=>{
    res.send("welcome to home");
});

//Route parameters
// /get/:name will capture name and return it with req.params object
app.get('/get/:name',(req,res)=>{
  console.log(req.params);
  console.log(req.params.name);
})

//(-) and the dot (.) they can be used along with route parameters for useful purposes.
// app.get('/getflight/:from-:to',(req,res)=>{
//   console.log(req.params);
//   console.log(req.params.from);
//   console.log(req.params.to);
// })


// app.get('/get_birthdate/:date.:month.:year',(req,res)=>{
//   console.log(req.params);

// })

//Route handlers
//simple route 
//1
// app.get("/test",()=>{
//   //simple route
// })
//2
//need to check
app.get('/getflightReturn/:fromFlight-:toFlight',(req,res,next)=>{
  console.log(req.params);
  let fromFlight = req.params.fromFlight;
  let  toFlight = req.params.toFlight ;
      next(fromFlight,toFlight);
},
  (req,res,fromFlight,toFlight)=>{
     console.log(fromFlight,toFlight); 
    //res.send(fromFlight,toFlight);
  }
);

//3
// var cb0 = function (req, res, next) {
//   console.log('CB0')
//   next()
// }

// var cb1 = function (req, res, next) {
//   console.log('CB1')
//   next()
// }

// app.get('/example/d', [cb0, cb1], function (req, res, next) {
//   console.log('the response will be sent by the next function ...')
//   next()
// }, function (req, res) {
//   res.send('Hello from D!')
// })

/*
res.download()	Prompt a file to be downloaded.
res.end()	End the response process.
res.json()	Send a JSON response.
res.jsonp()	Send a JSON response with JSONP support.
res.redirect()	Redirect a request.
res.render()	Render a view template.
res.send()	Send a response of various types.
res.sendFile()	Send a file as an octet stream.
res.sendStatus()	Set the response status code and send its string representation as the response body. */

