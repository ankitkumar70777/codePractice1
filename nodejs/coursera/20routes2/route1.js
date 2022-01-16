









var express = require('express');
var port = 8080;
var app = express();
var birdsRoutes = require('./route2');
app.listen(port,()=>{
    console.log('server is up');
});

app.use(birdsRoutes);
app.use('/about',birdsRoutes);