import express from "express";
import { getFoods, seedFoods } from "../controllers/foodControllers.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getFoods);

router.post("/seed", authMiddleware, seedFoods);

export default router;
