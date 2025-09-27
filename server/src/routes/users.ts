import { Router } from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  // getUsers,
} from "../controllers/userController.js";

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
