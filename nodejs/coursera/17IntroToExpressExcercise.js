const express = require('express');
const morgan = require('morgan');
const http = require('http');

const hostname = 'localhost';
const port = 8080;
const app = express();

// app.use(morgan(':method :url :status :remote-addr'));  //custom formot
app.use(morgan('dev'));//combined,common,short,dev,tiny
//app.use(morgan())

//server statcic files
app.use('/static',express.static('17Public/index.html'));

app.use((req,res,next)=>{
   console.log('req.headers :::',req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end("<html><body><h1>this is express server</h1></body></html>");
   next();
});


app.listen(port,(err)=>{
    if(err){
        console.log('err to start server',err);
    }
    console.log(`server is up with http://localhost:${port}`);
});