// src/pages/EditPost/EditPost.jsx
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../services/supabase.js";
import BlogForm from "../../components/BlogForm/BlogForm.jsx";
import "./EditPost.css"; // ← Correct import (was CreatePost.css before)

export default function EditPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setError(
          "Unable to load post. It may not exist or you don't have access."
        );
        console.error(error);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    if (id) fetchPost();
  }, [id]);

  const handleSaved = () => {
    // Redirect back to dashboard after successful save
    window.location.href = "/dashboard";
  };

  if (loading) {
    return <p className="loading-text">Loading post...</p>;
  }

  if (error) {
    return <p className="error-text">{error}</p>;
  }

  if (!post) {
    return <p className="error-text">Post not found.</p>;
  }

  return (
    <div className="container edit-post-page">
      <div className="page-header">
        <h1>Edit Post</h1>
        <Link to="/dashboard" className="back-link">
          ← Back to Dashboard
        </Link>
      </div>

      <div className="form-container">
        <BlogForm post={post} onSaved={handleSaved} />
      </div>
    </div>
  );
}
