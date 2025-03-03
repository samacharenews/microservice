import mongoose, { Schema, model } from "mongoose";

const newsSchema = new Schema({
  NewsHeadline: { type: String, required: true },
  NewsDscr: { type: String, required: true },
  TimeStamp: { type: Date, default: Date.now },
  User: { type: String },
  PublishedBy: { type: String },
  Tags: { type: [String] }
});

// Create and export the model (NOT just the schema)
const News = model("News", newsSchema);
export default News;