import type { Request, Response } from "express-serve-static-core";
import { PrismaClient, type Roll } from "../generated/prisma/client.js";

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

// Get rolls (/rolls)
const getRolls = async (req: Request, res: Response) => {
  try {
    const rolls = await prisma.roll.findMany();
    res.json(rolls);
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching rolls ${error.message}` });
  }
};

// Create roll (/rolls)
const createRoll = async (req: Request<{}, {}, Roll>, res: Response) => {
  try {
    const { userId, result, type } = req.body;
    const newRoll = await prisma.roll.create({
      data: {
        userId,
        result,
        type,
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

// Delete roll (/rolls/:id) Delete a single roll by ID
const deleteRoll = async (req: Request<{ id: number }>, res: Response) => {
  try {
    const deletedRoll = await prisma.roll.delete({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedRoll) return res.status(404).json({ error: "Roll not found" });

    res.json(deletedRoll);
  } catch (error: any) {
    res.status(500).json({ message: `Error deleting roll ${error.message}` });
  }
};

// Delete rolls (/rolls) Delete multiple rolls by IDs
const deleteRolls = async (req: Request, res: Response) => {
  try {
    const { ids } = req.body; // Expecting an array of IDs to delete
    const deleteRolls = await prisma.roll.deleteMany({
      where: {
        id: {
          in: ids.map((id: string) => Number(id)),
        },
      },
    });

    if (!deleteRolls) return res.status(404).json({ error: "Roll not found" });

    res.json(deleteRolls);
  } catch (error: any) {
    res.status(500).json({ message: `Error deleting roll ${error.message}` });
  }
};

export { getRolls, createRoll, deleteRoll, deleteRolls };
