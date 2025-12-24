// src/pages/Blog/Blog.jsx
import { useState, useEffect } from "react";
import { supabase } from "../../services/supabase.js";
import BlogCard from "../../components/BlogCard/BlogCard.jsx";
import "./Blog.css";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase
          .from("posts")
          .select(
            "id, title, content, image_url, created_at, profiles(full_name)"
          )
          .eq("published", true)
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Supabase error:", error);
          setBlogs([]);
        } else {
          const blogList = data.map((post) => ({
            id: post.id,
            title: post.title,
            content: post.content,
            image_url: post.image_url,
            createdAt: post.created_at,
            author: post.profiles?.full_name || "Anonymous",
          }));
          setBlogs(blogList);
          console.log("Fetched posts:", blogList); // Check console to see data
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="container blog-page">
      <h1 className="blog-title">Blog</h1>

      {loading ? (
        <p className="loading-text">Loading posts...</p>
      ) : blogs.length === 0 ? (
        <p className="no-posts">
          No published posts yet. Go to Dashboard and publish some!
        </p>
      ) : (
        <div className="blog-grid">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </section>
  );
}
