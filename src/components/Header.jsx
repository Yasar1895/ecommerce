import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles.css";

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="navbar">
      <Link to="/">✨ E-Shop</Link>
      <div>
        <Link to="/cart">🛒 Cart ({cart.length})</Link>
      </div>
    </header>
  );
}

export default Header;