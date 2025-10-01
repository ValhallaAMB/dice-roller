import { createRoll, deleteRoll, deleteRolls, getRolls } from "controllers/rollController.js";
import { Router } from "express";

const rollRouter = Router();

// Get roll (/rolls/:id)
// rollRouter.get("/:id", getRoll);

// Get rolls (/rolls)
rollRouter.get("/", getRolls);

// Create roll (/rolls)
rollRouter.post("/", createRoll);

// Update roll (/rolls/:id)
// rollRouter.patch("/:id", updateRoll);

// Delete roll (/rolls/:id)
rollRouter.delete("/:id", deleteRoll);

// Delete rolls (/rolls)
rollRouter.delete("/", deleteRolls);

export default rollRouter;
