import express from "express";
import auth from "../middleware/auth.js";
import { getCommentsByPost, addComment } from "../controllers/commentcontroller.js";

const router = express.Router();

router.get("/:postId/comments", getCommentsByPost);
router.post("/:postId/comments", auth, addComment);

export default router;