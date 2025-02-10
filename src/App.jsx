import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "My First Blog Post", content: "This is my first post!" },
    { id: 2, title: "Why I Love Coding", content: "Coding is fun and powerful!" }
  ]);

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>My Blog</h1>
      {posts.map(post => (
        <div key={post.id} style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
