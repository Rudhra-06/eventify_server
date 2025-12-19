import express from "express";
import {
  createEvent,
  getAllEvents,
  bookEvent,
  deleteEvent,
  updateEvent
} from "../Controller/eventController.js";
import { verifyToken } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllEvents);
router.post("/create", verifyToken, createEvent);
router.post("/book", verifyToken, bookEvent);
router.put("/update/:id", verifyToken, updateEvent);
router.delete("/delete/:id", verifyToken, deleteEvent);


export default router;
