// src/pages/CreatePost/CreatePost.jsx
import { Link } from "react-router-dom";
import BlogForm from "../../components/BlogForm/BlogForm.jsx";
import "./CreatePost.css";

export default function CreatePost() {
  const handleSaved = () => {
    // After saving the post, go back to Dashboard automatically
    window.location.href = "/dashboard";
  };

  return (
    <div className="container create-post-page">
      <div className="page-header">
        <h1>Write a New Post</h1>
        <Link to="/dashboard" className="back-link">
          ← Back to Dashboard
        </Link>
      </div>

      <div className="form-container">
        <BlogForm onSaved={handleSaved} />
      </div>
    </div>
  );
}
