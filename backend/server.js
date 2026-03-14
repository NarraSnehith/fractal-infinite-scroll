// ...existing code...
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// request logger
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} → ${req.method} ${req.originalUrl} from ${req.ip}`);
    res.on('finish', () => {
        console.log(`${new Date().toISOString()} ← ${res.statusCode} ${req.method} ${req.originalUrl}`);
    });
    next();
});

// MongoDB connection (connect to database, not a collection)
// ...existing code...
// MongoDB connection (connect to database, not a collection)
// Replace any existing mongoose.connect(..., { useNewUrlParser: ..., useUnifiedTopology: ... }) with:
mongoose.connect("mongodb://127.0.0.1:27017/fractalFeed")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});
// ...existing code...

// Import routes
const feedRoutes = require(path.join(__dirname, "routes", "feed"));

// Test route to help debug
app.get("/api/feed/test", (req, res) => {
    res.json({ ok: true, msg: "feed test route" });
});

// Use routes
app.use("/api/feed", feedRoutes);

// Root route
app.get("/", (req, res) => {
    res.send("Server is running successfully");
});

// 404 for unknown routes
app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});

// Basic error handler
app.use((err, req, res, next) => {
    console.error("Unhandled error:", err);
    if (!res.headersSent) res.status(500).json({ error: "Internal Server Error" });
});

// Start server
// ...existing code...
// Start server — bind to loopback explicitly to avoid other local services
const server = app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running on port ${PORT}`);
});
// ...existing code...

// Graceful shutdown
process.on("SIGINT", async () => {
    console.log("Shutting down...");
    server.close(() => {
        mongoose.connection.close(false, () => {
            console.log("MongoDB connection closed.");
            process.exit(0);
        });
    });
});
// ...existing code...