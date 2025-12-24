import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import "./Register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    customGender: "",
    contact: "",
    password: "",
    agree: false,
  });
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("You must agree to the Terms and Privacy Policy");
      return;
    }
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const email = formData.contact.includes("@") ? formData.contact : null;

    if (!email) {
      alert("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      await register(email, formData.password);
      alert("Registration successful! Please check your email to confirm.");
      navigate("/login");
    } catch (err) {
      alert("Registration failed: " + (err.message || "Please try again"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h1>Harry</h1>
        <h2>Create a new account</h2>
        <p>It's quick and easy.</p>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="name-row">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="dob-row">
            <select
              name="day"
              value={formData.day}
              onChange={handleChange}
              required
            >
              <option value="">Day</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              name="month"
              value={formData.month}
              onChange={handleChange}
              required
            >
              <option value="">Month</option>
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((m, i) => (
                <option key={i + 1} value={i + 1}>
                  {m}
                </option>
              ))}
            </select>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="">Year</option>
              {Array.from({ length: 100 }, (_, i) => {
                const year = new Date().getFullYear() - i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="gender-row">
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Custom"
                checked={formData.gender === "Custom"}
                onChange={handleChange}
              />
              Custom
            </label>
          </div>

          {formData.gender === "Custom" && (
            <input
              type="text"
              name="customGender"
              placeholder="Gender (optional)"
              value={formData.customGender}
              onChange={handleChange}
            />
          )}

          <input
            type="text"
            name="contact"
            placeholder="Mobile number or email address"
            value={formData.contact}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="New password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* PROPER TERMS CHECKBOX - Fixed and perfect */}
          <div className="terms-checkbox">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
              id="terms-agree"
            />
            <label htmlFor="terms-agree">
              I agree to the{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms
              </a>{" "}
              and{" "}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </label>
          </div>

          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <div className="register-footer">
          <Link to="/login">Already have an account? Log in</Link>
        </div>
      </div>
    </div>
  );
}
