import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);
  return (
    <header className="header">
      <Link to="/" className="logo">E-Shop</Link>
      <nav>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>
    </header>
  );
}
