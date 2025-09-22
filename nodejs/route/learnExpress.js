import { Router } from "express";
import * as fakeUsers from "../fake_users.json" with { type: 'json' };
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const learnExpressRouter = Router();

learnExpressRouter.get("/user", async (req, res) => {
  try {
    const users = fakeUsers?.default;
    const doc = `<ul>
      ${users.map((user) => 
       `<li>${user.name}</li>`
    ).join("")}
    </ul>`;
    res.send(doc);
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
    const body = req.body;
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    console.log("---",__filename,__dirname);
    // const data = readFileSync("../fake_users.json", "utf8");
    // let json = JSON.parse(data);
    // console.log("json",json)

    res.json({ user: "acknoledged" });
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error.message);
  }
});


export default learnExpressRouter;
