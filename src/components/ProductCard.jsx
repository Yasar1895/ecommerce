import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-title">{product.name}</div>
      <div className="product-price">${product.price}</div>
      <button className="add" onClick={() => addToCart(product)}>Add to Cart</button>
      <Link to={`/product/${product.id}`}>
        <button className="details">Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;