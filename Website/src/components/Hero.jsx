import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="hero-overlay">

        <div className="hero-content">
          <h4>WELCOME TO OUR BAKERY</h4>

          <h1>
            Fresh Bread, Cakes &
            <br />
            Delicious Pastries
          </h1>

          <p>
            Enjoy freshly baked products made with
            premium ingredients and traditional recipes.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Order Now
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;