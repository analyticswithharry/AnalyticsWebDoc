// backend/server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Node.js backend running!" });
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node.js!" });
});

const server = app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

// Graceful error handling for port in use
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Trying to kill it...`);
    // Optional: you can add auto-retry logic here if needed
    process.exit(1);
  } else {
    console.error("Server error:", err);
  }
});
