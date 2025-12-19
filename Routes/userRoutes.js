import express from "express";
import { getBookedEvents } from "../Controller/userController.js";
import { verifyToken } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.get("/booked", verifyToken, getBookedEvents);

export default router;
