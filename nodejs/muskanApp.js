const express = require("express");
const mongoose = require("mongoose");
const app = express();
const friendmodel = require("./modal")

// const dummy = [
//     {
//         id: "1",
//         name: "bheem"
//     },
//     {
//         id: "2",
//         name: "tom",
//     },
// ];

//connecting to database
mongoose.connect(
    "mongodb+srv://muskandatabase:muskanrathod99@cluster0.domlt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
).then( (data) => {
    console.log('Connected to database');
})
.catch( (err) => {
    console.error(`Error connecting to the database`);
});

app.use(express.json());

// app.get("/get/detail", function(request, response){
//     console.log("hello world");
//     response.send(dummy);
// });

// app.post("/add/friend", (request, response) => {
//     console.log("body", request.body);
//     dummy.push(request.body);
//     response.send(dummy);
// });

//adding a document
app.post("/add/friend", (req, res) => {
    const data = req.body;
    const friend = new friendmodel({
        name: data.name,
        mobno: data.mobno,
        address: data.address,
    });
    
    friend.save()
    .then((data) => {
        if(!(data.name || data.address || data.mobno)){
            res.send("Need to provide details");
        }else{
            res.send(data);
        }
    })
    .catch((err) => {
        res.send("Unable to fetch user");
    });
});

//get document by its id
app.get("/get/friend", (req, res) => {
    const _id = req.query._id;
    if(_id){
        friendmodel.findById({ _id: _id})
        .then((data) => {
            if(!data){
                res.send("Document does not exist");
            }else{
                res.send(data);
            }
        })
        .catch((err) => {
            res.send("Couldn't find user");
        });
    }else{
        res.send("Need to provide Id");
    }
    
});

//get documents of an collection
app.get("/get/documents", (req, res) => {
    friendmodel.find()
        .then((data) => {
            if(data === null || data === undefined || data === '' || data.length === 0){
                res.send("There is no document in this collection");
            }else{
                res.status(200).send(data);
            }
        })
        .catch((err) => {
            res.status(500).send("Something went wrong");;
        });
});

//get document by id and delete  it
app.delete("/delete/documentById", (req, res) => {
    const _id = req.query._id;
    if(_id){
    friendmodel.findByIdAndDelete({_id: _id})
    .then((data) => {
        if(!data){
            res.send("Document does not exist")
        }else{
            res.status(200).send("Deleted successfully");
        }
    })
    .catch((err) => {
        res.status(500).send("Something went wrong");
    });
    }else{
        res.send("Need to provide id");
    }
});

//update document by using it's id
app.put("/update/documentById", (req, res) => {
    const _id = req.query._id;
    const data = req.body;
    if(_id){
    friendmodel.findByIdAndUpdate(
        {_id: _id}, 
        {$set: {name: data.name, address: data.address, mobno: data.mobno}},
        {new : true})
        .then((data) => {
            if(!(data.name || data.address || data.mobno)){
                res.send("Need to provide updatable details");
            }else{
                res.send("Updated successfully");
            }
        })
        .catch((err) => {
            res.send("Something went wrong");
        });
    }else{
        res.send("Need to provide id");
    }    
}); 

//assigning port
app.listen(8080, function(){
    console.log("server is upto port 8080")
});