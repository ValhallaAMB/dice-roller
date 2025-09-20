import type { Request, Response } from "express-serve-static-core";

const getUser = (req: Request, res: Response) => {
  res.send("User route");
};

const createUser = (req: Request, res: Response) => {
  res.send("Create user");
};

const updateUser = (req: Request, res: Response) => {
  res.send(`Update user with ID ${req.params.id}`);
};

const deleteUser = (req: Request, res: Response) => {
  res.send(`Delete user with ID ${req.params.id}`);
};

export { getUser, createUser, updateUser, deleteUser };
