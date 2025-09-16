import React from "react";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Apple iPhone 15", price: 799, image: "/images/iphone15.png" },
    { id: 2, name: "Samsung Galaxy S23", price: 699, image: "/images/s23.png" },
    { id: 3, name: "MacBook Pro 14", price: 1999, image: "/images/macbook.png" },
    { id: 4, name: "Dell XPS 13", price: 999, image: "/images/dell.png" },
    { id: 5, name: "Sony WH-1000XM5", price: 349, image: "/images/sony.png" },
    { id: 6, name: "Apple Watch Series 9", price: 399, image: "/images/watch.png" }
  ];

  return (
    <div>
      <div className="navbar">E-Shop 🛒</div>
      <div className="products">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <div className="product-title">{p.name}</div>
            <div className="product-price">${p.price}</div>
            <button className="add">Add to Cart</button>
            <button className="details">Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;