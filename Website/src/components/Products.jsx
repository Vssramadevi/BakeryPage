import "./Products.css";

function Products() {
  const products = [
    {
      id: 1,
      name: "Artisan Bread",
      price: "$8.99",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    },
    {
      id: 2,
      name: "Chocolate Cake",
      price: "$24.99",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },
    {
      id: 3,
      name: "Butter Croissant",
      price: "$4.99",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    },
    {
      id: 4,
      name: "Cupcakes",
      price: "$12.99",
      image:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d",
    },
    {
      id: 5,
      name: "Donuts",
      price: "$6.99",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    },
    {
      id: 6,
      name: "Cookies",
      price: "$5.99",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    },
  ];

  return (
    <section id="products" className="products">
      <div className="products-header">
        <h4>OUR PRODUCTS</h4>
        <h2>Freshly Baked Favorites</h2>
        <p>
          Discover our selection of artisan breads,
          cakes, pastries, cookies, and more.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
            />

            <div className="product-content">
              <h3>{product.name}</h3>

              <p>{product.price}</p>

              <button>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;