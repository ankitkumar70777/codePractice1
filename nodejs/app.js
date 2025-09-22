import express from "express";
import learnExpressRouter from "./route/learnExpress.js";

const app = express();
app.use(express.json());

// Homepage route
app.get("/", (req, res) => {
  res.send("hello world, this is homepage");
});

// Mount router directly
app.use("/", learnExpressRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("App running in port: " + PORT);
});
