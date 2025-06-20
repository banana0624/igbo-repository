import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import config from "./config/env.js"; // Centralized environment variables

// Import Routes
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import roleRoutes from "./routes/role.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import forumRoutes from "./routes/forum.routes.js";
import threadRoutes from "./routes/thread.routes.js";
import commentRoutes from "./routes/comment.routes.js";

// Import Middleware
import { authenticateUser } from "./middleware/auth.middleware.js";
import { authorizeRoles } from "./middleware/role.middleware.js";
import setupMiddleware from "./middleware/index.js"; // Modular middleware setup

// Initialize Express App
const app = express();

// Setup Middleware
setupMiddleware(app);

// Connect to MongoDB
connectDB();

// Routes
app.use("/auth", authRoutes);
app.use("/users", authenticateUser, userRoutes);
app.use("/roles", authorizeRoles(["admin"]), roleRoutes);
app.use("/blogs", blogRoutes);
app.use("/forums", forumRoutes);
app.use("/threads", threadRoutes);
app.use("/comments", commentRoutes);

// Default Route & Health Check Endpoint
app.get("/", (req, res) => res.send("🚀 API is running!"));
app.get("/health", (req, res) => res.json({ status: "OK" }));

// Logging Request Info for Better Debugging
app.use((req, res, next) => {
  console.log(`📡 ${req.method} request to ${req.url}`);
  next();
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

// Graceful Shutdown Handling
process.on("SIGINT", () => {
  console.log("🛑 Server shutting down...");
  process.exit(0);
});

// Start the Server
app.listen(config.PORT, () => console.log(`🚀 Server running on port ${config.PORT}`));
