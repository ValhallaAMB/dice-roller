import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "controllers/userController.js";
import { Router } from "express";

const userRouter = Router();

// Get all users (For testing purposes)
// userRouter.get("/", getUsers);

// Get user (/users/:id)
userRouter.get("/:id", getUser);

// Create user (/users)
userRouter.post("/", createUser);

// Update user (/users/:id)
userRouter.patch("/:id", updateUser);

// Delete user (/users/:id)
userRouter.delete("/:id", deleteUser);

export default userRouter;
