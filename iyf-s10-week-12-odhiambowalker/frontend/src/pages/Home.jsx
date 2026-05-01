import { useEffect, useState } from "react";
import { postsAPI } from "../services/api";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postsAPI.getAll().then(setPosts);
  }, []);

  return (
    <div>
      <h1>CommunityHub</h1>

      {posts.map((p) => (
        <div key={p._id}>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
}