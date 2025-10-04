import { Router } from "express";
import * as fakeUsers from "../fake_users.json" with { type: 'json' };
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  title: String,
  description: String,
  views : Number
}, { collection: "posts" }); 

const Posts = mongoose.model("posts", userSchema);

const learnExpressRouter = Router();

learnExpressRouter.get("/user", async (req, res) => {
  try {

    console.log("req",req.baseUrl, "cookies",req.headers, "cookies", req.secure);

    const users = fakeUsers?.default;
    const doc = `<ul>
      ${users.map((user) => 
       `<li>${user.name}</li>`
    ).join("")}
    </ul>`;
    // res.cookie('howareyou1', "fine", {expires: new Date(Date.now() + 200000)});
    console.log("headers",res.header);
    res.setHeader("resposeType","HtmlDoc");
    res.clearCookie("howareyou1");
    res.status(200).send(doc);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

learnExpressRouter.get("/api/user", async (req, res) => {
  try {
    const users = fakeUsers?.default;
    res.json({ users: users });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

learnExpressRouter.get("/api/user/:id", async (req, res) => {
  try {
    const users = fakeUsers?.default;
    const id = req.params.id;
    console.log("users", users, {id});
    const findSpecificId = users.find((user) => `${user.id}` === `${id}`);
    res.json({ user: findSpecificId });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

learnExpressRouter.post("/api/user", async (req, res) => {
  try {
    const postObj = new Posts({ title: "hello2", description: "hello description", views: 12 });
    await postObj.save();

    res.json({ user: "acknoledged" });
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error.message);
  }
});


export default learnExpressRouter;
