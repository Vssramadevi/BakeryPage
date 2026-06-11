import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>Bakery</h2>
          <p>
            Freshly baked breads, cakes and pastries
            made with love every day.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>

          <p>📍 New York, USA</p>
          <p>📞 +1 234 567 890</p>
          <p>✉️ info@bakery.com</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Twitter</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Bakery. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;