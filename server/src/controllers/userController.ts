import type { Request, Response } from "express-serve-static-core";
import { PrismaClient } from "../generated/prisma/client.js";

// Global Prisma client instance
const prisma = new PrismaClient();

// Get all users (For testing purposes)
const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching users ${error.message}` });
  }
};

const getUser = async (req: Request, res: Response) => {
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

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        // createdAt: new Date(), // Automatically set by Prisma
      },
    });
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).json({ message: `Error creating user ${error.message}` });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const updateUser = await prisma.user.update({
      where: { id: Number(req.params.id) },
      // Returns the updated user without the createdAt field
      omit: { createdAt: true }, // Prevent updating createdAt 
      data: { name, email },
      // Returns the updated user with all fields
      // data: {
      //   name, 
      //   email,
      //   createdAt: Prisma.skip, // Prevent updating createdAt
      // }
    });

    res.json(updateUser);
  } catch (error: any) {
    res.status(500).json({ message: `Error updating user ${error.message}` });
  }
};

const deleteUser = async (req: Request, res: Response) => {
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

export { getUsers, getUser, createUser, updateUser, deleteUser };
