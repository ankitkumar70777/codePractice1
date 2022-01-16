// const express = require('express');
// const app = express(); //create a server

// //assining port
// app.listen(8080,()=>{
//     console.log('server is up');
// });

// app.get('/',()=>{console.log('this is root');});

// const express = require('express');
// const newApp = express(); //create server
// newApp.listen(8080,()=>{ //asing port
//     console.log('server is up with port 8080');
// }) ;
// //set action for root get
// newApp.get('/',(req,res)=>{
//     console.log('we are in root now');
//     console.log(req.headers.host);
//     res.send(req.headers.host);
//     //console.log(res);
// });

//Query Params
//set action for query after sendMssg and geting
// newApp.get('/:sendMsg',(req,res)=>{
//     console.log('/sendMsg');
//     res.send('good morning mumbai');
//     console.log(req.params);
    
// });

//send two paras to get value
// newApp.post('/:sendMsg/:ankit',(req,res)=>{
//     console.log("request param",req.params);
//     res.send(req.params);
// });

//query path
//query always come after path

//if you write any query to path it will return all peqries
//http://localhost:8080/ankit/kumar?name=ankit&lastname=ravidas
// newApp.post("/ankit/kumar",(req,res)=>{
//         console.log('ankit/kumar : ',req.query);
//         res.send(req.query);
// })


// const dummyData = [{
//     _id : "123456",
//     name : "batman"
// },{
//     _id : "0000000",
//     name : "xmen"
// }];

// newApp.get('/displayDummyData',(req,res)=>{
//     console.log('dummydata',dummyData);
//     res.send(dummyData);
//     // document.getElementById('fname').val = displayDummyData[1].name
// });


