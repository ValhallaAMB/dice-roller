import express from "express";
import indexRouter from "routes/index.js";
import userRouter from "routes/users.js";
import dotenv from "dotenv";
import rollRouter from "routes/rolls.js";
import aj from "middlewares/arcjet.js";
import type { ArcjetNodeRequest } from "@arcjet/node";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

// Load environment variables from .env file
dotenv.config({
  path: "../.env",
  quiet: true,
  // debug: true,
});

// Initialize Express app
const app = express();

// Port
const port = Number(process.env.PORT) || 3000;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(helmet()); // Security headers
app.use(morgan("dev")); // HTTP request logging
app.use(cors()); // Enable CORS

// Arcjet middleware
app.use(async (req, res, next) => {
  try {
    const decision = await aj.protect(req as ArcjetNodeRequest, {
      requested: 1, // Each request costs 1 token
    });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        res.status(429).send("Too many requests - try again later");
      } else if (decision.reason.isBot()) {
        res.status(403).send("Bot access denied");
      } else {
        res.status(403).send("Access denied");
      }

      return;
    }

    // Check spoofed bots
    if (
      decision.results.some(
        (result) => result.reason.isBot() && result.reason.isSpoofed()
      )
    ) {
      res.status(403).send("Spoofed bot access denied");
      return;
    }

    next();
  } catch (error) {
    console.error("Arcjet error:", error);
    next(error);
  }
});

// Routes
app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/rolls", rollRouter);

// Start server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
