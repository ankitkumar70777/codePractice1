const express = require("express");
const bookModel = require("./bookshelfDBSchema");
const app = express();
const port = 8080;
const { check, validationResult } = require('express-validator');
//.env file take secrate keys and save in it
const hiddenThings = require('dotenv').config();


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
//this is middleware
app.use(express.json());

//add book
let validateData = [
  check('bookname').not().isEmpty().trim().escape(),
    //custom check if book is already exists
    //.withmessage define custor error message
    /*
    .isLength({ min: 5 })
    .withMessage('must be at least 5 chars long')
    .matches(/\d/)
    .withMessage('must contain a number'),

    .not()
    .isIn(['123', 'password', 'god'])
    .withMessage('Do not use a common word as the password')
    .isLength({ min: 5 })
    .matches(/\d/),
    */
  check('bookname').custom((value)=>{
  
      return bookModel.findOne({bookname : req.query.bookname })
      .then((data)=>{
          if(data){
              return Promise.reject('book already in use');
          }
      })
  }).withMessage('book is already exists'),
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
      //return all error
    //  return  res.status(400).json({
    //    success: false,
    //   errors: result.array()
    //  });

    //only return custom meero message
     return res.status(400).send(result.errors[0].msg);
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

return;

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
