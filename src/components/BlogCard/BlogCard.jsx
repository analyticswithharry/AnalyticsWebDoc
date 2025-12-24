// src/components/BlogCard/BlogCard.jsx
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate.js";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  const title = blog.title || "Untitled";
  const author = blog.author || "Anonymous";
  const date = formatDate(blog.createdAt);
  const excerpt = blog.content
    ? blog.content.substring(0, 150) + "..."
    : "No content...";
  const imageUrl = blog.image_url;

  return (
    <article className="blog-card">
      {imageUrl ? (
        <div
          className="blog-card-img"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      ) : (
        <div className="blog-card-img placeholder" />
      )}

      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="meta">
          By {author} • {date}
        </p>
        <p className="excerpt">{excerpt}</p>
        <Link to={`/blog/${blog.id}`} className="read-more">
          Read More →
        </Link>
      </div>
    </article>
  );
}
