import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Blog Post {id}</h1>
      <p>This is the content for post {id}.</p>
    </div>
  );
}

export default BlogPost;
