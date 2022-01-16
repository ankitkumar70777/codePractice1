"use strict";

const express = require('express');
const app = express();
const port = 8080;
app.listen(port,()=>{
    console.log('server is up');
});
app.get('/',(req,res)=>{
        res.send("welcome to home");
        console.log('welcome to home');
})

const dummyData = [{
    _id : "123456",
    name : "batman"
},{
    _id : "0000000",
    name : "xmen"
}];


app.post('/get/friend',(req,res)=>{
    console.log('req for get friend');
    res.send(dummyData);
    
});

//data will be always in json format
//we can access incomming data in request object
//convert incomming data to json
app.use(express.json());

app.post('/add/friend',(req,res)=>{
    console.log('req for add friend');
    console.log('req body : ',req.body);
    let dataReceived = req.body; 
    console.log(typeof(dataReceived));
    dummyData.push(req.body);
    res.send(dummyData);
});







