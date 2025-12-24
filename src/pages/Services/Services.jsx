import "./Services.css";

export default function Services() {
  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero container">
        <h1>Our Premium Services</h1>
        <p>
          We offer professional web development, design, analytics, and
          consulting services tailored for modern businesses. Bright, innovative
          solutions to help you grow.
        </p>
        <div className="services-cta">
          <button className="services-btn">Get Started Today</button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <h3>Web Development</h3>
            <p>
              Custom, responsive websites and apps built with modern
              technologies.
            </p>
            <ul className="service-features">
              <li>React & Vite Development</li>
              <li>Full-Stack Solutions</li>
              <li>Mobile-Friendly Design</li>
              <li>Fast Performance</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>
              Bright, professional designs that engage users and convert
              visitors.
            </p>
            <ul className="service-features">
              <li>Modern Bright Themes</li>
              <li>User-Centered Design</li>
              <li>Wireframing & Prototyping</li>
              <li>Accessibility Compliant</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>Business Analytics</h3>
            <p>Data-driven insights to grow your business.</p>
            <ul className="service-features">
              <li>Dashboard Creation</li>
              <li>Predictive Analytics</li>
              <li>Reporting Tools</li>
              <li>Strategy Consulting</li>
            </ul>
          </div>

          {/* Add more service cards as needed */}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <h2>Flexible Pricing</h2>
          <p>Choose the perfect plan for your needs</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">£999</div>
              <ul>
                <li>Basic Website</li>
                <li>5 Pages</li>
                <li>Responsive Design</li>
                <li>1 Month Support</li>
              </ul>
              <button className="services-btn">Choose Plan</button>
            </div>
            <div className="pricing-card">
              <h3>Professional</h3>
              <div className="price">£2999</div>
              <ul>
                <li>Custom Web App</li>
                <li>Unlimited Pages</li>
                <li>Advanced Features</li>
                <li>6 Months Support</li>
              </ul>
              <button className="services-btn">Choose Plan</button>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Full-Stack Solution</li>
                <li>Backend Integration</li>
                <li>Analytics Dashboard</li>
                <li>Ongoing Support</li>
              </ul>
              <button className="services-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <h2>Ready to Elevate Your Business?</h2>
          <p>Let's build something amazing together</p>
          <button className="services-btn">Book a Free Consultation</button>
        </div>
      </section>
    </div>
  );
}
