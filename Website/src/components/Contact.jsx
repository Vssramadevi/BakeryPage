import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <div className="contact-info">
          <h4>CONTACT US</h4>

          <h2>Get In Touch</h2>

          <p>
            Have questions about our bakery products or custom orders?
            We'd love to hear from you.
          </p>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>123 Bakery Street, New York, USA</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+1 234 567 890</p>
          </div>

          <div className="info-box">
            <h3>✉️ Email</h3>
            <p>info@bakery.com</p>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;