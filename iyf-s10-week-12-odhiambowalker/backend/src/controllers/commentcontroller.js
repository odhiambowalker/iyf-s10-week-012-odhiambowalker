import Comment from "../models/Comment.js";

export const addComment = async (req, res) => {
  const comment = await Comment.create({
    post: req.body.post,
    message: req.body.message,
    author: req.user._id
  });
  res.json(comment);
};