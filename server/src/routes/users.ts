import { Router } from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUsers,
} from "../controllers/userController.js";

const userRouter = Router();

// Get all users (For testing purposes)
userRouter.get("/", getUsers);

// Get user (/api/users/:id)
userRouter.get("/:id", getUser);

// Create user (/api/users)
userRouter.post("/", createUser);

// Update user (/api/users/:id)
userRouter.patch("/:id", updateUser);

// Delete user (/api/users/:id)
userRouter.delete("/:id", deleteUser);

export default userRouter;
