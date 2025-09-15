import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaCartPlus, FaInfoCircle } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>
        <FaCartPlus /> Add to Cart
      </button>
      <Link to={`/product/${product.id}`} className="details-btn">
        <FaInfoCircle /> Details
      </Link>
    </div>
  );
}