import React from 'react';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Premium Cigars</h1>
        <p>Discover the finest selection of authentic Cuban cigars</p>
      </div>

      {/* About Us Section */}
      <div className="about-section">
        <h2>About Us</h2>
        <div className="about-content">
          <p>Welcome to our premium cigar shop, where tradition meets excellence. We specialize in authentic Cuban cigars and premium accessories, offering a curated selection of the finest tobacco products.</p>
          <div className="about-features">
            <div className="feature">
              <span className="feature-icon">★</span>
              <h3>Premium Selection</h3>
              <p>Handpicked cigars from the finest manufacturers</p>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <h3>Authentic Products</h3>
              <p>Genuine Cuban cigars and accessories</p>
            </div>
            <div className="feature">
              <span className="feature-icon">❤</span>
              <h3>Expert Service</h3>
              <p>Knowledgeable staff to guide your selection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <p>23 Freedom Street, Little Ariana, Ariana</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <p>+216 55 99 55 99  </p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <p>info@premiumcigars.com</p>
            </div>
          </div>
          <div className="contact-hours">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
            <p>Saturday: 10:00 AM - 6:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 