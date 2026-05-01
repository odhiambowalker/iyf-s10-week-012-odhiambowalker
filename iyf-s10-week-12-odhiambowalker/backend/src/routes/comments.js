import express from "express";
import auth from "../middleware/auth.js";
import { addComment } from "../controllers/commentController.js";

const router = express.Router();

router.post("/", auth, addComment);

export default router;