import {
  getCurrentUser,
  registerUser,
  deleteUser,
  updateUser,
} from "controllers/userController.js";
import { Router } from "express";

const userRouter = Router();

// Get all users (For testing purposes)
// userRouter.get("/", getUsers);

// Get current user (/users/getCurrentUser)
userRouter.post("/getCurrentUser", getCurrentUser);

// Register user (/users/registerUser)
userRouter.post("/registerUser", registerUser);

// Update user (/users/:id)
userRouter.patch("/:id", updateUser);

// Delete user (/users/:id)
userRouter.delete("/:id", deleteUser);

export default userRouter;
