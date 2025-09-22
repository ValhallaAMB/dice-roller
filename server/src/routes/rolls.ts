import { Router } from "express";
import {
  createRoll,
  deleteRoll,
  // getRoll,
  getRolls,
  // updateRoll,
} from "../controllers/rollController.js";

const rollRouter = Router();

// Get roll (/api/rolls/:id)
// rollRouter.get("/:id", getRoll);

// Get rolls (/api/rolls)
rollRouter.get("/", getRolls);

// Create roll (/api/rolls)
rollRouter.post("/", createRoll);

// Update roll (/api/rolls/:id)
// rollRouter.patch("/:id", updateRoll);

// Delete roll (/api/rolls/:id)
rollRouter.delete("/:id", deleteRoll);

export default rollRouter;
