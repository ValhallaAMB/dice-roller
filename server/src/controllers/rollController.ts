import type { Request, Response } from "express-serve-static-core";
import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

// const getRoll = async (req: Request, res: Response) => {
//   try {
//     const roll = await prisma.roll.findFirst({
//   where: {
//     id: Number(req.params.id),
//   },
// });

// if (!roll) return res.status(404).json({ error: "roll not found" });

// res.json(roll);
//   } catch (error: any) {
//     res.status(500).json({ message: `Error fetching rolls ${error.message}` });
//   }
// };

const getRolls = async (req: Request, res: Response) => {
  try {
    const rolls = await prisma.roll.findMany();
    res.json(rolls);
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching rolls ${error.message}` });
  }
};

const createRoll = async (req: Request, res: Response) => {
  try {
    const { userId, result, type } = req.body;
    const newRoll = await prisma.roll.create({
      data: {
        userId,
        result,
        type,
        // createdAt: new Date(), // Automatically set by Prisma
      },
    });
    res.status(201).json(newRoll);
  } catch (error: any) {
    res.status(500).json({ message: `Error creating roll ${error.message}` });
  }
};

// const updateRoll = async (req: Request, res: Response) => {
//   try {
//     const { userId, result, type } = req.body;
//     const updatedRoll = await prisma.roll.update({
//       where: { id: Number(req.params.id) },
//       data: { userId, result, type },
//     });
//     res.json(updatedRoll);
//   } catch (error: any) {
//     res.status(500).json({ message: `Error updating roll ${error.message}` });
//   }
// };

const deleteRoll = async (req: Request, res: Response) => {
  try {
    const deletedRoll = await prisma.roll.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!deletedRoll) return res.status(404).json({ error: "Roll not found" });

    res.json(deletedRoll);
  } catch (error: any) {
    res.status(500).json({ message: `Error deleting roll ${error.message}` });
  }
};

export { getRolls, createRoll, deleteRoll };
