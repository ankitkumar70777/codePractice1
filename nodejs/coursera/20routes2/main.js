const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
app.listen(port, (err) => {
  if (err) {
    console.log("server startup err : ", err);
  }
  console.log(`server is up with port ${port}`);
});

function setTime() {
  let date = new Date();
  let dateFormat = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  console.log("dateFormat : ", dateFormat);
  return dateFormat;
  // console.log('date : ',`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

app.use((req, res, next) => {
  req.date = setTime();
  next();
});

app.all("/", (req, res) => {
  console.log("welcome to home");
  console.log("req time is : ", req.date);
  res.status(200).send("welcome to home").end();
});

app.get("/flightWay/:from-:to", (req, res, next) => {
  console.log("req.params", req.params);
});

let sayHi = (req, res, next) => {
  console.log("Hi");
  next();
};
let sayBye = (req, res, next) => {
  console.log("Bye");
  next();
};
// app.get('/letsMeet',
//     sayHi,
//     sayBye
// );
//first called say hi note we dodnt use () for function call
//then sayBy then inner function inside /letsMeets get called
//then we end req
app.get('/letsMeet',[sayHi,sayBye],(req,res,next)=>{
    console.log('function complet');
    res.end();
});

//for comon path and multiple method

app.route('/path')
.get((req,res)=>{
    res.send(`this is "${req.method}" method`).end();
})
.post((req,res)=>{
    res.send(`this is "${req.method}" method`).end();
})