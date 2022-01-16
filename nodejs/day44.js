const express = require('express');
const mongoose = require('mongoose');
const  employeeModel  = require('./day44mongoose');
// const ObjectId = mongoose.Types.ObjectId ; 
const app = express();
const port = 8888;
app.listen(port,(err)=>{
    if(err){
        console.log('connect error',err);
    }
    console.log('server is up');
});
app.get('/',(req,res)=>{
    console.log('welcome to home');
    res.send("welcome to home");
});
app.use(express.json());
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/employee',{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  //useMongoClient:true
}).then((connect)=>{
    console.log('connected to DB');
}).catch((error)=>{
    console.log('fail to connect to db',error);
});


app.post('/add/employee',(req,res)=>{ 
    const data = req.body;
    const employeeModel1 = new employeeModel({
        employeeName : data.employeeName,
        employeeMob : data.employeeMob,
        address : data.address
    });
 
    employeeModel1.save().then((data)=>{
        console.log('data',data);
        res.send(data);

}).catch((error)=>{
    console.log('error',error);
    res.send(error);
});
});

//find document with id
app.get("/get/employee",(req,res)=>{
        //find document by name 
        //const name = req.query.name;
        //console.log('name',name);
        
        console.log('reqQuery : ',req.query);
        const  _id = req.query._id;
        console.log('_id : ',_id);
        if(_id){
          // employeeModel.findById({_id : _id})
           employeeModel.findById({_id : _id})
         .then((data)=>{
             if(!data){
                console.log('data not found');
                res.send('data not found');     
             }
            console.log('data : ',data);
            res.send(data);
        }).catch((err)=>{
            console.log('err : ',err);
        });   
        }else{
            console.log('id not found ');
            res.send('id not found ');
        }
        
           
});


//assignment : 
//1) find doc with id and delete it
//2) find all cument inside collection
//3) update document with id


//1) find doc with id and delete it

app.delete('/delete/employee',(req,res)=>{
    console.log('reqQuery : ',req.query);
        const _id = req.query._id;
        console.log('id : ',_id);
        if(_id){
            employeeModel.findByIdAndRemove({_id : _id})
            .then((data)=>{
                console.log('data : ',data);
                console.log('deleted id : ',data.id);
                res.send("_id is deleted");
            })
            .catch((err)=>{
                console.log('err : ',err);
                res.send("error in id deletion");
            });
        }else{
            res.send('id not found');
            console.log('id not found');
        }
});


//2) find all cument inside collection


app.post('/findAll/employee',(req,res)=>{
    console.log('reqQuery : ',req.query);
    employeeModel.find()
    .then((data)=>{
        console.log('data : ',data);
        res.send(data);
    }).catch((err)=>{
        console.log('err',err);
    });
});

//3) update document with id

app.post('/update/employee',(req,res)=>{
        console.log('reqBody : ',req.body);
        const _id = req.body._id;
        if (_id){
            employeeModel.findByIdAndUpdate({_id : _id},{
                $set:{
                    employeeName : req.body.employeeName,
                    employeeMob : req.body.employeeMob,
                    address : req.body.address
                }
            })
            .then((data)=>{
                  console.log('data',data);
                  res.send(data);
            })
            .catch((err)=>{
                 console.log('err',err);
                  res.send('error in updating document');
            });
        }else{
            console.log('valid id not found');
            res.send('valid id not found');
        }

});
