import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getFAQs,
  getFAQById,
  deleteFAQ
} from "../controllers/faqControllers.js";
import {
  createFAQ,
  searchFAQs
} from "../controllers/faqController.js";

const router = express.Router();

router.get("/search", searchFAQs);
router.get("/", getFAQs);
router.get("/:id", getFAQById);
router.post("/", authMiddleware, createFAQ);
router.delete("/:id", authMiddleware, deleteFAQ);

export default router;