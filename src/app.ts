import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import News from "./mangoDBschemas/articles";



dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || "5000", 10);
const { MongoClient, ObjectId } = require('mongodb');
// ✅ Middleware to parse JSON
app.use(express.json());
app.use(cors());
// ✅ MongoDB Connection using Mongoose
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/samachar"; 

mongoose.connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));

// ✅ Test API Endpoint
app.get("/", (req, res) => {
    res.send("Hello, TypeScript with Node.js!");
});

app.post('/items', async (req, res) => {
    try {
        req.body.TimeStamp = new Date();
        const newItem = new News(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ err});
    }
});

app.get("/getNews", async (req, res) => {
    try {

      
        const result = await News.find();
        console.log("Data Available", result);
        res.status(201).json({ status: 200, msg: "Data Available", data: result });
    } catch (error: any) {
        console.error("Error saving:", error);
        res.status(500).json({ error: error.message });
    }
});





// DELETE API



// ✅ Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
