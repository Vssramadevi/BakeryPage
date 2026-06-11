import "./Gallery.css";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    "https://images.unsplash.com/photo-1517433670267-08bbd4be890f",
    "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    "https://images.unsplash.com/photo-1608198093002-ad4e005484ec"
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-header">
        <h4>OUR GALLERY</h4>
        <h2>Fresh From Our Bakery</h2>
        <p>
          Explore our delicious collection of breads,
          cakes, pastries, and bakery specials.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={image}
              alt={`Bakery ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;