import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const post = await Post.create({
      author: req.user._id,
      title: req.body.title,
      content: req.body.content
    });
    res.json(post);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "username");
  res.json(posts);
};

export const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id).populate("author", "username");
  res.json(post);
};