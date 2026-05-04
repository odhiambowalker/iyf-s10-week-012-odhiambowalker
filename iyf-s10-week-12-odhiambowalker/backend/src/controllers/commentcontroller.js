import Comment from "../models/Comment.js";

export const getCommentsByPost = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId })
      .populate("author", "username");
    res.json(comments);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const addComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      post: req.params.postId,
      message: req.body.message,
      author: req.user._id
    });
    res.json(comment);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};