import type {
  ParamsDictionary,
  Request,
  Response,
} from "express-serve-static-core";
import { PrismaClient, type User } from "../generated/prisma/client.js";

// Global Prisma client instance
const prisma = new PrismaClient();

// Get all users (For testing purposes)
// const getUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await prisma.user.findMany();
//     res.json(users);
//   } catch (error: any) {
//     res.status(500).json({ message: `Error fetching users ${error.message}` });
//   }
// };

// Get user (/users/:id)
const getUser = async (req: Request<{ id: number }>, res: Response) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching user ${error.message}` });
  }
};

// Create user (/users)
const createUser = async (
  req: Request<ParamsDictionary, any, User>,
  res: Response
) => {
  try {
    const { username, email, pfpBase64 } = req.body;
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        pfpBase64,
      },
    });
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).json({ message: `Error creating user ${error.message}` });
  }
};

// Update user (/users/:id)
const updateUser = async (
  req: Request<{ id: number }, any, User>,
  res: Response
) => {
  try {
    const { username, email, pfpBase64 } = req.body;
    const updateUser = await prisma.user.update({
      where: { id: Number(req.params.id) },
      data: { username, email, pfpBase64 },
    });

    res.json(updateUser);
  } catch (error: any) {
    res.status(500).json({ message: `Error updating user ${error.message}` });
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
  } catch (error: any) {
    res.status(500).json({ message: `Error deleting user ${error.message}` });
  }
};

export { getUser, createUser, updateUser, deleteUser };
