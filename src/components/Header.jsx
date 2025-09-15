import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger px-3">
      <Link className="navbar-brand fw-bold" to="/">E-Shop</Link>
      <div className="ms-auto">
        <Link to="/cart" className="btn btn-warning">
          <FaShoppingCart className="me-2" />
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}