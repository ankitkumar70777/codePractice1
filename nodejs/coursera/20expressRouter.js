














const express = require("express");
const app = express();
const port = 8080;
const morgan = require('morgan'); 
const bodyParsar = require('body-parser'); 

app.listen(port,(err)=>{
    if(err){
        console.log('err while starting server',err);
    }
    console.log('server is up');
});

app.use(bodyParsar.json());

app.get('/allDishes',(req,res,next)=>{
    console.log('1');
    req.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
});

app.get('/allDishes',(req,res,next)=>{
        console.log('2');
    res.end('will send all dishes to you');
});

app.post('/allDishes',(req,res)=>{
    console.log(req.body);
    res.end(req.body.name);
});

app.put('/allDishes',(req,res)=>{
        res.status(403).end('this operation is not supported');
});

app.get('/allDishes/:dishId',(req,res)=>{
    console.log(req.params);
    res.status(200).send(`your dish ${req.params.dishId} will be ready in a min`);
});

//using express router