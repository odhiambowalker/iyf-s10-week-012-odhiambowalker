import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);