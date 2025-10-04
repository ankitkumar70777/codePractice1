import mongoose from "../config/mongose.config.js";

const Schema = mongoose.Schema;

const urlSchema = new Schema({
  longUrl: {
    required: true,
    type: String,
    unique: true,
  },
  customAlias: {
    type: String,
    required: false,
    unique: true,
  },
  shortId: {
    type: String,
    required: false,
    unique: true,
  },
  clicks: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("urlSchema", urlSchema);
