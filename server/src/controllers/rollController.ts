import type { Request, Response } from "express-serve-static-core";

const getRoll = async (req: Request, res: Response) => {
  res.send("Roll route");
};

const getRolls = async (req: Request, res: Response) => {
  res.send("Rolls route");
};

const createRoll = async (req: Request, res: Response) => {
  res.send("Create Roll");
};

const updateRoll = async (req: Request, res: Response) => {
  res.send(`Update Roll with ID ${req.params.id}`);
};

const deleteRoll = async (req: Request, res: Response) => {
  res.send(`Delete Roll with ID ${req.params.id}`);
};

export { getRoll, getRolls, createRoll, updateRoll, deleteRoll };
