import express from "express";
import indexRouter from "./routes/index.js";
import userRouter from "./routes/users.js";
import {
  corsMiddleware,
  helmetMiddleware,
  morganMiddleware,
} from "./middlewares/3rdPartyMiddleware.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config({
  path: ".env",
  // debug: true,
});

// Initialize Express app
const app = express();

// Port
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(helmetMiddleware); // Security headers
app.use(morganMiddleware); // HTTP request logging
app.use(corsMiddleware); // Enable CORS

// Routes
app.use("/api/", indexRouter);
app.use("/api/users", userRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
