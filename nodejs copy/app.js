import express from "express";
import learnExpressRouter from "./route/learnExpress.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(cookieParser());

// middleware
app.use((req, res, next) => {
  console.log("req.url", req.path);
  next();
});

// mongo connection

const uri =
  "mongodb+srv://ankitkumar70777:phh0jLn3JhfSFdVq@cluster0.20vgohq.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0"; // replace with your Mongo URI

async function connectDB() {
  try {
    const result = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected with Mongoose");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // stop app if DB fails
    return;
  }
}
connectDB();

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
