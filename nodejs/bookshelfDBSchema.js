const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bookSchema = new schema({
  bookname: { type: String,
            unique : true,
            lowercase : true,
            message : "book must be unique name "
 },
  prise: { type: String },
  author: { type: String },
  language: { type: String },
  aboutAuthor: { type: String },
});
// bookshelf is table name 
const bookModel = mongoose.model('bookshelf',bookSchema);
module.exports =  bookModel;

//bookshelf is database name
mongoose.connect("mongodb://localhost:DB_PORT/bookshelf",{
  useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true,
useFindAndModify: false
}).then((data)=>{
    console.log('connected to DB');
}).catch((err)=>{
  console.log('DB connection error',err);
});

