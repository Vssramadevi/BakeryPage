import "./Navbar.css";

function Navbar({ setDevice }) {
  return (
    <nav className="navbar">
      <div className="logo">Bakery</div>

      <div className="device-buttons">
        <button onClick={() => setDevice("desktop")}>🖥</button>
        <button onClick={() => setDevice("laptop")}>💻</button>
        <button onClick={() => setDevice("tablet")}>📱</button>
        <button onClick={() => setDevice("mobile")}>📲</button>
      </div>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>

        <li>
          <button
            className="nav-btn"
            onClick={() =>
              document
                .getElementById("products")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Order Now
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;