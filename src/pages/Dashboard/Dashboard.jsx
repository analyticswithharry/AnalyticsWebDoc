// src/pages/Dashboard/Dashboard.jsx
import { useAuth } from "../../context/AuthContext.jsx";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase.js";
import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard.jsx";
import "./Dashboard.css";

export default function Dashboard() {
  const { user, profile, logout } = useAuth();
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    drafts: 0,
    totalLikes: 0,
    totalComments: 0,
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        const publishedCount = data.filter((p) => p.published).length;
        const draftsCount = data.length - publishedCount;

        setPosts(data || []);
        setStats({
          total: data.length,
          published: publishedCount,
          drafts: draftsCount,
          totalLikes: 0, // Placeholder - add likes table later
          totalComments: 0, // Placeholder - add comments table later
        });
      }
      setLoading(false);
    };

    fetchData();
  }, [user]);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this post permanently?"))
      return;

    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) {
      alert("Delete failed: " + error.message);
    } else {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  if (loading)
    return <div className="loading-dashboard">Loading dashboard...</div>;

  return (
    <div className="container dashboard-page">
      <header className="dashboard-header">
        <div className="user-greeting">
          <h1>
            Welcome back, {profile?.full_name || user?.email.split("@")[0]}!
          </h1>
          <p>Here's an overview of your blog activity</p>
        </div>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </header>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>{stats.total}</h3>
          <p>Total Posts</p>
        </div>
        <div className="stat-card published">
          <h3>{stats.published}</h3>
          <p>Published</p>
        </div>
        <div className="stat-card drafts">
          <h3>{stats.drafts}</h3>
          <p>Drafts</p>
        </div>
        <div className="stat-card likes">
          <h3>{stats.totalLikes}</h3>
          <p>Total Likes</p>
        </div>
        <div className="stat-card comments">
          <h3>{stats.totalComments}</h3>
          <p>Comments</p>
        </div>
      </div>

      {/* Create Button */}
      <div className="create-post-action">
        <Link to="/dashboard/create" className="btn-primary">
          + Write New Post
        </Link>
      </div>

      {/* User's Posts List */}
      <section className="user-posts-section">
        <h2>Your Posts</h2>
        {posts.length === 0 ? (
          <p className="empty-message">
            You haven't written any posts yet.{" "}
            <Link to="/dashboard/create">Create your first post now!</Link>
          </p>
        ) : (
          <div className="posts-grid">
            {posts.map((post) => (
              <div key={post.id} className="post-with-actions">
                <BlogCard
                  blog={{
                    id: post.id,
                    title: post.title,
                    content: post.content,
                    image_url: post.image_url,
                    createdAt: post.created_at,
                    author: profile?.full_name || "You",
                  }}
                />
                <div className="post-actions">
                  <Link to={`/dashboard/edit/${post.id}`} className="edit-btn">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
