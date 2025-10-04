import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { urlRouter } from "./routes/urlR.js";
import connectMongoDB from "./database/mongo.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
connectMongoDB();

app.get("/", (req, res) => {
  res.status(200).send("hello, how are you");
});

app.use("/url", urlRouter);

const server = app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});

server.on("error", (err) => {
  console.error("❌ Server failed to start:", err);
});
