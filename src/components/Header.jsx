import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const { cart } = useContext(CartContext);
  return (
    <header className="header">
      <Link to="/" className="logo">E-Shop</Link>
      <nav>
        <Link to="/cart">
          <FaShoppingCart style={{ marginRight: "5px" }} />
          Cart ({cart.length})
        </Link>
      </nav>
    </header>
  );
}