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

app.get('/getflightReturn/:fromFlight-:toFlight',(req,res,next)=>{
  console.log(req.params);
  let fromFlight = req.params.fromFlight;
  let  toFlight = req.params.toFlight ;
      next(fromFlight,toFlight);
},
  (req,res,fromFlight,toFlight)=>{
      //this is next function 
     console.log(fromFlight,toFlight); 
    //res.send(fromFlight,toFlight);
  }
);

