import mongoose from "../config/mongose.config.js";
mongoose.set("strictQuery", false);
const url =
  process.env.MONGO_URI ||
  "mongodb+srv://ankitkumar70777:phh0jLn3JhfSFdVq@cluster0.20vgohq.mongodb.net/test";

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // exit process if DB connection fails
  }
};

export default connectMongoDB;
