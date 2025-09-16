import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles.css";

function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Upgrade Your Lifestyle 🚀</h1>
        <p>Shop the latest gadgets at unbeatable prices</p>
      </div>

      <div className="products">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;