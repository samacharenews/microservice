require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Microservice is running!" });
});

// Sample API route
app.get("/api/data", (req, res) => {
  res.json({ success: true, data: "This is your microservice response" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Microservice running on http://localhost:${PORT}`);
});
