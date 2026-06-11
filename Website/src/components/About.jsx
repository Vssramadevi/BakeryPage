import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
            alt="Bakery"
          />
        </div>

        <div className="about-content">
          <h4>ABOUT US</h4>

          <h2>Freshly Baked Goods Every Day</h2>

          <p>
            Our bakery is dedicated to bringing you the finest breads,
            cakes, and pastries made with premium ingredients. Every
            product is baked fresh daily to ensure exceptional taste
            and quality.
          </p>

          <p>
            From artisan breads to custom cakes, we combine traditional
            baking techniques with modern creativity to deliver a
            delightful experience for every customer.
          </p>

          <button className="about-btn">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;