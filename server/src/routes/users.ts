import { Router } from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const userRouter = Router();

// Get user
userRouter.get("/", getUser);

// Create user
userRouter.post("/", createUser);

// Update user
userRouter.put("/:id", updateUser);

// Delete user
userRouter.delete("/:id", deleteUser);

export default userRouter;
