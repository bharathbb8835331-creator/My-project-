import express from "express";
import aiController from "../controllers/aiController.js";

const router = express.Router();

router.post("/generate", aiController.generateAnswer);

export default router;