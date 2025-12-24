import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="home-header">
        <h1>Welcome to Harry</h1>
        <p>
          A beautiful, modern landing page built with React, Vite, and love.
        </p>
        <div className="home-cta">
          <button className="home-btn">Get Started</button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-header">
            <h2>Why Choose Us</h2>
            <p>Everything you need in one place</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast & Reliable</h3>
              <p>Lightning-fast performance with modern tech stack</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>Clean, bright, and professional UI/UX</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure</h3>
              <p>Protected routes and authentication</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start?</h2>
          <p>Join thousands of happy users today</p>
          <button className="home-btn">Sign Up Now</button>
        </div>
      </section>
    </div>
  );
}
