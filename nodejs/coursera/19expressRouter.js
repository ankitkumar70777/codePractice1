/*

 */

















const express  = require('express');
const app = express();
const port = 8080;
app.listen(port,(err)=>{
    if(err){
        console.log('error is starting server');
    }
    console.log(`server is up url : http://localhost:${port}`);
});

app.all('/',(req,res)=>{
    console.log('welocme to home');
    res.send('welcome to home');
});

app.get('/dish/:dishNo',(req,res)=>{
    console.log(req.query);
    console.log(req.body);
    console.log(req.params);
    res.send(`your dish no is ${req.params.dishNo}`)
});

//express router : 

