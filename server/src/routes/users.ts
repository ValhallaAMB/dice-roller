import {
  getCurrentUser,
  registerUser,
  deleteAccount,
  updateUser,
} from "controllers/userController.js";
import { Router } from "express";

const userRouter = Router();

// Get all users (For testing purposes)
// userRouter.get("/", getUsers);

// Get current user (/users/getCurrentUser/:cognitoSubId)
userRouter.get("/getCurrentUser/:cognitoSubId", getCurrentUser);

// Register user (/users/registerUser)
userRouter.post("/registerUser", registerUser);

// Update user (/users/updateUser/:cognitoSubId)
userRouter.patch("/updateUser/:cognitoSubId", updateUser);

// Delete user (/users/deleteAccount/:cognitoSubId)
userRouter.delete("/deleteAccount/:cognitoSubId", deleteAccount);

export default userRouter;
