import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us">
      {/* Hero */}
      <section className="about-hero container">
        <h1>About Harry Consultancy</h1>
        <p>
          We are a forward-thinking consultancy dedicated to empowering
          businesses with innovative digital solutions, data-driven insights,
          and creative excellence. Our mission is to help companies of all sizes
          thrive in the modern digital landscape through personalized,
          results-oriented services.
        </p>
        <a
          href="https://calendly.com/your-link"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Free Consultation
        </a>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to bridge the gap between traditional
              business and digital innovation, Harry Consultancy has grown into
              a trusted partner for companies worldwide. We started as a small
              team passionate about technology and design, and today we serve
              clients across industries with comprehensive solutions in
              analytics, marketing, development, and cloud services.
            </p>
            <p>
              Our journey is built on the belief that every business deserves
              access to professional-grade digital tools and strategies —
              regardless of size or budget. We combine creativity with technical
              expertise to deliver results that matter.
            </p>
          </div>
          <div className="story-image">
            <img src="/assets/team-photo.jpg" alt="Harry Consultancy Team" />
            {/* Replace with your actual team photo */}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values container">
        <div className="values-header">
          <h2>Our Core Values</h2>
          <p>
            We operate with integrity, innovation, and a client-first mindset in
            everything we do.
          </p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">💡</div>
            <h3>Innovation</h3>
            <p>
              We stay ahead of trends to deliver cutting-edge solutions that
              drive real growth.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Partnership</h3>
            <p>
              We work as an extension of your team, fully committed to your
              success.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">✅</div>
            <h3>Excellence</h3>
            <p>
              Quality is non-negotiable — we deliver professional results every
              time.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌍</div>
            <h3>Inclusivity</h3>
            <p>
              We serve businesses of all sizes, from startups to enterprises,
              globally.
            </p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="company-timeline">
        <div className="container">
          <div className="timeline-header">
            <h2>Our Journey</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>2020 — Founded</h3>
                <p>
                  Started with a vision to make professional digital services
                  accessible.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>2021 — First 100 Clients</h3>
                <p>Helped businesses across web development and marketing.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>2023 — Expanded Services</h3>
                <p>
                  Added AI, Analytics, and Cloud solutions to our portfolio.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>2025 — Global Reach</h3>
                <p>
                  Serving clients worldwide with comprehensive digital
                  transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section container">
        <div className="team-header">
          <h2>Meet Our Leadership</h2>
          <p>Experienced professionals dedicated to your success.</p>
        </div>
        <div className="team-grid">
          <div className="team-member">
            <div
              className="team-photo"
              style={{ backgroundImage: "url(/assets/team1.jpg)" }}
            ></div>
            <div className="team-info">
              <h3>John Doe</h3>
              <span>CEO & Founder</span>
              <p>
                Visionary leader with 15+ years in digital strategy and business
                growth.
              </p>
            </div>
          </div>
          <div className="team-member">
            <div
              className="team-photo"
              style={{ backgroundImage: "url(/assets/team2.jpg)" }}
            ></div>
            <div className="team-info">
              <h3>Jane Smith</h3>
              <span>Head of Development</span>
              <p>Expert in modern web technologies and cloud architecture.</p>
            </div>
          </div>
          <div className="team-member">
            <div
              className="team-photo"
              style={{ backgroundImage: "url(/assets/team3.jpg)" }}
            ></div>
            <div className="team-info">
              <h3>Mike Johnson</h3>
              <span>Creative Director</span>
              <p>Passionate about design that converts and inspires.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Work Together?</h2>
          <p>
            We'd love to hear about your project and how we can help bring it to
            life.
          </p>
          <a
            href="https://calendly.com/your-link"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
