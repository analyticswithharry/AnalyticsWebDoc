import { useAuth } from "../../context/AuthContext.jsx";
import { Navigate } from "react-router-dom";
import "./ProtectedRoute.css";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="protected-loading">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
}
