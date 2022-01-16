













const mongoClient = require('mongodb').MongoClient;
//assert check for expression if its false or 0
//if yes it thorw error
const assert = require('assert');
const url = 'mongodb://localhost:27017/27nodeAndMongoExcercise';
mongoClient.connect(url,(err,db)=>{
            if(err){
               console.log("err :::",err);
               return;
            }
            console.log('connected to db');
            const collection = db.collection("users");
            collection.insertOne({"name":"ankitkumar"},(err,result)=>{
                if(err){
                    console.log('err : ',err);
                    return;
                }
                console.log('cmd successful', result.ops);
            }); 
            return;
}); 
