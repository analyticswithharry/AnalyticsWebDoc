import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../services/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { formatDate } from "../../utils/formatDate.js";
import "./BlogDetail.css";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(db, "blogs", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBlog({ id: docSnap.id, ...docSnap.data() });
      }
      setLoading(false);
    };
    fetchBlog();
  }, [id]);

  if (loading) return <p>Loading blog...</p>;
  if (!blog) return <p>Blog not found</p>;

  return (
    <section className="container page">
      <article className="blog-detail">
        <h1>{blog.title}</h1>
        <p className="meta">
          By {blog.author} • {formatDate(blog.createdAt)}
        </p>
        <div className="content">{blog.content}</div>
      </article>
    </section>
  );
}
