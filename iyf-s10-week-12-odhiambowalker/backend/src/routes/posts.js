import express from "express";
import auth from "../middleware/auth.js";
import { createPost, getPosts, getPostById } from "../controllers/postController.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", auth, createPost);

export default router;