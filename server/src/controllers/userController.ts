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
  req: Request<ParamsDictionary, any, { cognitoSub: string }>,
  res: Response
) => {
  try {
    const { cognitoSub } = req.body;
    const user = await prisma.user.findUnique({
      where: { cognitoSub: String(cognitoSub) },
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
    const { username, cognitoSub, pfpBase64 } = req.body;
    const newUser = await prisma.user.create({
      data: {
        username,
        cognitoSub,
        pfpBase64,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    const { status, error: errorResponse } = errorHandler(error);
    res.status(status).json({ message: errorResponse });
  }
};

// Update user (/users/:id)
const updateUser = async (
  req: Request<{ id: number }, any, User>,
  res: Response
) => {
  try {
    const { username, cognitoSub, pfpBase64 } = req.body;
    const updateUser = await prisma.user.update({
      where: { id: Number(req.params.id) },
      data: { username, cognitoSub, pfpBase64 },
    });

    res.json(updateUser);
  } catch (error) {
    const { status, error: errorResponse } = errorHandler(error);
    res.status(status).json({ message: errorResponse });
    // res.status(500).json({ message: errorHandler(error) });
  }
};

// Delete user (/users/:id)
const deleteUser = async (req: Request<{ id: number }>, res: Response) => {
  try {
    const deleteUser = await prisma.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!deleteUser) return res.status(404).json({ error: "User not found" });

    res.json(deleteUser);
  } catch (error) {
    const { status, error: errorResponse } = errorHandler(error);
    res.status(status).json({ message: errorResponse });
    // res.status(500).json({ message: errorHandler(error) });
  }
};

export { getCurrentUser, registerUser, updateUser, deleteUser };
