import express from "express";
import { placeOrder, getOrders,getOrdersByUser } from "../controllers/orderController.js";

const router = express.Router();

router.post("/place", placeOrder);
router.get("/", getOrders);
router.get("/user/:userId", getOrdersByUser);
export default router;
