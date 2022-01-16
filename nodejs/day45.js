//express setup
const express = require("express");
const app = express();
const port = 8080;
const employeeModel = require("./day45mongoose");
app.listen(port, (err, success) => {
  if (err) {
    console.log("err : ", err);
  }
  console.log("server is UP ");
});
//home path message
app.get("/", (req, res) => {
  res.send("welcome to home 1");
});
app.post("/", (req, res) => {
  res.send("welcome to home 2");
});
app.get("", (req, res) => {
  res.send("welcome to home 3");
});

//convert incomming data to json
app.use(express.json());

//mongodb connection
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to DB");
  })
  .catch(() => {
    console.log("Fail to connect DB");
  });

//find all doc
//if you find group of data or in bulk data mongo will send data in array
app.post("/get/allEmp", (req, res) => {
  employeeModel
    .find()
    .then((data) => {
      console.log("data : ", data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log("err : ", err);
      res.status(500).send("Somethong went wrong, please try again sometime ");
    });
});

//insert into database
app.post("/add/employee", (req, res) => {
  console.log("req : ", req.body);
  const emplyeeModel1 = new employeeModel({
    employeeName: req.body.employeeName,
    employeeMob: req.body.employeeMob,
    address: req.body.address,
  });
  emplyeeModel1
    .save()
    .then((data) => {
      console.log("data : ", data);
      res.send(`employee is added in DB with id ${data.id}`);
    })
    .catch((err) => {
      console.log("err : ", err);
    });
});

//find document
app.post("/get/empById", (req, res) => {
  console.log("req : ", req.query);
  const _id = req.query._id;
  console.log("_id : ", _id);
  employeeModel
    .findById({ _id: _id })
    .then((data) => {
      console.log("data : ", data);
      if (!data) {
        res.status(200).send(`data : sorry no data found ${data}`);
      }
      res.status(200).send(`data : ${data}`);
    })
    .catch((err) => {
      console.log("err : ", err);
      res.status(500).send(`something went wrong, kindly try again later`);
    });
});

//find and delete from db
app.post("/findAnd/delete", (req, res) => {
  console.log("req.body : ", req.query);
  const _id = req.query._id;
  employeeModel
    .findByIdAndDelete(_id)
    .then((data) => {
      console.log("data : ", data);
      if (!data) {
        res.status(200).send(`data : sorry no data found ${data}`);
      }
      res.status(200).send(`data : ${data}`);
    })
    .catch((err) => {
      console.log("err : ", err);
      res.status(500).send(`something went wrong, kindly try again later`);
    });
});

//findByIdAndUpdate :
app.post("/findAnd/update/", (req, res) => {
  console.log("req.query : ", req.query);
  console.log("req.body : ", req.body);
  const _id = req.query._id;
  console.log("_id : ", _id);
  if (_id) {
    employeeModel
      .findByIdAndUpdate(_id, {
        $set: {
          employeeName: req.body.employeeName,
        },
      })
      .then((data) => {
        console.log("data : ", data);
          if (!data) {
        res.status(200).send(`data : sorry no data found ${data}`);
      }
      res.status(200).send(`data : ${data}`);
         
      })
      .catch((err) => {
        console.log("err : ", err);
        req.status(500).send("data not updated");
      });
  } else {
    req.status(200).send("_id not found");
  }
});

/*1xxs – Informational responses: The server is thinking through the request.

2xxs – Success! The request was successfully completed and the server gave the browser the expected response.

3xxs –Redirection: You got redirected somewhere else. The request was received, but there’s a redirect of some kind.

4xxs – Client errors: Page not found. The site or page couldn’t be reached. (The request was made, but the page isn’t valid — this is an error on the website’s side of the conversation and often appears when a page doesn’t exist on the site.)

5xxs – Server errors: Failure. A valid request was made by the client but the server failed to complete the request. */
