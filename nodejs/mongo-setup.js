const mongoose = require('mongoose');
// import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://Harshii:coolarchit09@library.2n2dp.mongodb.net/myBookStore?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then((data)=>console.log("connected to database"))
.catch((error)=>console.log("Not Connected"));
const schema = mongoose.Schema;

const bookSchema = new schema(
    {
        BookName:
        {
            type:String,
            unique:true
        },
        Price:
        {
            type:Number
        },
        Author:
        {
            type:String
        },
        Language:
        {
            type:String
        },
        AboutAuthor:
        {
            type:String
        }


    }
);


const bookstore = mongoose.model("bookstore" ,bookSchema )
module.exports = (bookstore) ;