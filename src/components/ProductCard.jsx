import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <div className="card-actions">
        <button onClick={() => addToCart(product)} className="btn-primary">
          🛒 Add to Cart
        </button>
        <Link to={`/product/${product.id}`} className="btn-secondary">
          🔍 Details
        </Link>
        <button className="btn-heart">❤️</button>
      </div>
    </div>
  );
};

export default ProductCard;