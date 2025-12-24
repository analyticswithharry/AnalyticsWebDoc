// src/components/BlogForm/BlogForm.jsx
import { useState, useEffect } from "react";
import { supabase } from "../../services/supabase.js";
import { useAuth } from "../../context/AuthContext.jsx";

export default function BlogForm({ post, onSaved }) {
  const { user } = useAuth();
  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    image_url: "",
    published: false,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (post) {
      setForm({
        title: post.title || "",
        slug: post.slug || "",
        content: post.content || "",
        image_url: post.image_url || "",
        published: post.published || false,
      });
    } else {
      setForm({
        title: "",
        slug: "",
        content: "",
        image_url: "",
        published: false,
      });
    }
  }, [post]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "title") {
      const generatedSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setForm((prev) => ({ ...prev, slug: generatedSlug }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in.");
      return;
    }

    setLoading(true);
    const data = { ...form, user_id: user.id };

    let error;
    if (post) {
      ({ error } = await supabase.from("posts").update(data).eq("id", post.id));
    } else {
      ({ error } = await supabase.from("posts").insert(data));
    }

    setLoading(false);
    if (error) {
      alert("Error: " + error.message);
    } else {
      onSaved();
    }
  };

  const handleCancel = () => {
    onSaved();
  };

  return (
    <div className="blog-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter post title..."
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="slug"
          placeholder="Slug (auto-generated)"
          value={form.slug}
          onChange={handleChange}
          required
        />

        <textarea
          name="content"
          placeholder="Write your content here..."
          value={form.content}
          onChange={handleChange}
          rows={12}
          required
        />

        <input
          type="url"
          name="image_url"
          placeholder="Image URL (optional)"
          value={form.image_url}
          onChange={handleChange}
        />

        <label>
          <input
            type="checkbox"
            name="published"
            checked={form.published}
            onChange={handleChange}
          />
          Publish immediately
        </label>

        <div className="form-actions">
          <button type="submit" disabled={loading}>
            {loading ? "Saving..." : post ? "Update Post" : "Publish Post"}
          </button>

          {post && (
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
