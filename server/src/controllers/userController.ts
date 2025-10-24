import type {
  ParamsDictionary,
  Request,
  Response,
} from "express-serve-static-core";
import { PrismaClient, type User } from "generated/prisma/client.js";
import errorHandler from "utils/errorHandler.js";

// Global Prisma client instance
const prisma = new PrismaClient();

const getCurrentUser = async (
  req: Request<{ cognitoSubId: string }>,
  res: Response
) => {
  try {
    const { cognitoSubId } = req.params;
    const user = await prisma.user.findUnique({
      where: { cognitoSub: String(cognitoSubId) },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch (error) {
    const { status, error: errorResponse } = errorHandler(error);
    res.status(status).json({ message: errorResponse });
  }
};

// Sign up user (/users/registerUser)
const registerUser = async (
  req: Request<ParamsDictionary, any, User>,
  res: Response
) => {
  try {
    const { cognitoSub, pfpBase64 } = req.body;
    const newUser = await prisma.user.create({
      data: {
        cognitoSub,
        pfpBase64,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    const { status, error: errorResponse } = errorHandler(error);
    res.status(status).json({ errorResponse });
  }
};

// Update user (/users/updateUser/:id) COME BACK TO THIS
const updateUser = async (
  req: Request<{ cognitoSubId: number }, any, User>,
  res: Response
) => {
  try {
    const { pfpBase64 } = req.body;
    const { cognitoSubId } = req.params;
    const updateUser = await prisma.user.update({
      where: { cognitoSub: String(cognitoSubId) },
      data: { pfpBase64 },
    });

    res.json(updateUser);
  } catch (error) {
    const { status, error: errorResponse } = errorHandler(error);
    res.status(status).json({ ...errorResponse });
    // res.status(500).json({ message: errorHandler(error) });
  }
};

// Delete user (/users/deleteAccount/:cognitoSubId)
const deleteAccount = async (
  req: Request<{ cognitoSubId: string }>,
  res: Response
) => {
  try {
    const { cognitoSubId } = req.params;
    console.log("Deleted account:", cognitoSubId);
    const deleteUser = await prisma.user.delete({
      where: {
        cognitoSub: String(cognitoSubId),
      },
    });

    if (!deleteUser) return res.status(404).json({ error: "User not found" });

    res.json(deleteUser);
  } catch (error) {
    const { status, error: errorResponse } = errorHandler(error);
    res.status(status).json({ message: errorResponse });
    // res.status(500).json({ message: error });
  }
};

export { getCurrentUser, registerUser, updateUser, deleteAccount };
