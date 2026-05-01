import { useState } from "react";
import { postsAPI } from "../services/api";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = async () => {
    await postsAPI.create({ title, content });
    alert("Post created!");
  };

  return (
    <div>
      <h2>Create Post</h2>

      <input placeholder="title" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="content" onChange={(e) => setContent(e.target.value)} />

      <button onClick={submit}>Post</button>
    </div>
  );
}