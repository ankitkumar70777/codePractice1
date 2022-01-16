const express = require("express");
const bookModel = require("./bookshelfDBSchema");
const app = express();
const port = 8080;
const { check, validationResult } = require('express-validator');

app.listen(port, (err) => {
  if (err) {
    console.log("connect error", err);
  }
  console.log("server is up");
});
app.get("/", (req, res) => {
  console.log("welcome to home");
  res.send("welcome to home");
});
//express.json() is a method inbuilt in
// express to recognize the incoming Request Object as a JSON Object.
app.use(express.json());

//add book
let validateData = [
  check('bookname').not().isEmpty().trim().escape(),
  check('prise').not().isEmpty().trim().escape(),
  check('author').trim().escape(),
  check('language').trim().escape(),
  check('aboutAuthor').trim().escape(),
  ];

app.post(
  "/addbook" ,
  validateData,
  (req, res) => {


  const result = validationResult(req);
  console.log('result : ',result);
  const hasErrors = !result.isEmpty();
  if(hasErrors){
     return  res.status(400).json({
       success: false,
      errors: errors.array()
     });
  }
  
   //only require parameter which we need
    let data = {
    "bookname" : req.body.bookname,
    "prise" : req.body.prise,
    "author" : req.body.author,
    "language" : req.body.language,
    "aboutAuthor" : req.body.aboutAuthor
  };

  console.log('data : ',data);



  const bookModel1 = new bookModel(data);
  bookModel1
    .save()
    .then((data) => {
      console.log("new book saved successfully", data);
      res.status(200).send(`new book saved successfully ${data}`);
    })
    .catch((err) => {
      console.log("book save Error", err);
      if (err) {
        bookModel
          .findOne()
          .where({ bookname: data.bookname })
          .then((data) => {
            console.log(
              `the book with name  :   ${data.bookname}  is already exists ${data} `
            );
            res.send(
              `the book with name  :   ${data.bookname}  is already exists ${data} `
            );
            //throw new Error(`the book with name  :   ${data.bookname}  is already exists ${data} `);
          })
          .catch((err) => {
            console.log("the book with name not found : ", err);
            res.send("the book with name not found ");
          });
      } else {
        res.send("Fail to save data");
      }
    });
});

//update book
app.post("/updatebook", (req, res) => {
  console.log(req.body);
  console.log(req.query);

  bookModel
    .findOne({ bookname: req.query.bookname })
    .then((data) => {
      if (data) {
        console.log("data  found ", data);
        //check if ame book is already their
        if (data.bookname == req.body.bookname) {
          console.log("data already found no need to update ");
          res.status(200).send('book is already available')
        } else {
          bookModel.findOneAndUpdate(
            { bookname: req.query.bookname },
            {
              bookname: req.body.bookname,
              prise: req.body.prise,
            },
            null,
            (err, data) => {
              if (data) {
                console.log("data updated successfull with id ", data.id);
                res.send(`data updated successfull with id  ${data.id}`);
              } else {
                if (err == null) {
                  console.log("data not found to update", err);
                  res.send(`no data found`);
                } else {
                  console.log("update err", err);
                  res.send(`update err`);
                }
              }
            }
          );
        }
      } else {
        console.log("found null data may b wrong find provided", data);
        res.send(`no data found 1`);
      }
    })
    .catch((err) => {
      console.log("err in finding data..... ", data);
      res.send(`no data found 2`);
    });
});




//read data / find data

app.post('/findData',(req,res)=>{
  console.log(req.body);
  console.log(req.query);


  bookModel
  .findOne({bookname : req.query.bookname })
  .then((data)=>{
    if (data){
      console.log('data found',data);
      res.send(' data found');
    }else{
      console.log('no data found', data);
      res.send('err ! no data found 1');
    }
  })
  .catch((err)=>{
    console.log('err : ',err);
    res.send('err ! no data found');
  })
});


//ddelete data

app.post('/findDlt',(req,res)=>{
  console.log(req.body);
  console.log(req.query);
    bookModel
    .findOneAndDelete({bookname : req.query.bookname})
    .then((data)=>{
      if(data){
        console.log(`book is deleted successfullt with id ${data.id}`);
        res.send(`book is deleted successfullt with id ${data.id}`);
      }else{
         console.log('no data found to dlt : ',data);
          res.send(`NO data found to dlt`);
      }
    })
    .catch((err)=>{
      console.log('unbale to delete data : ',err);
    });
});