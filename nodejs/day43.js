const express = require('express');
const app = express();
const port = 8888;
app.listen(port,()=>{
    console.log('server is up');
});
app.get('/',(req,res)=>{
    console.log('welcme to home');
    res.send('welcome to home');
});
app.use(express.json());

//conneing to db
const mongoose = require('mongoose');

//this method will return promise
 mongoose.connect('mongodb://localhost:27017/local',{
//   mongoose.connect('mongodb+srv://ankitkumar:03111994@cluster0.2cccj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    // mongoose.connect('mongodb+srv://ankitkumar70777:03111994@ankitcluster0.dwuof.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((data)=>{
    console.log('connected to DB');
}).catch((error)=>{
    console.log('fail to connect to DB',error);
});



