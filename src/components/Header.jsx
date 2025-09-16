import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();

  return (
    <header>
      <Link to="/" className="logo">E-Shop</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">🛒 Cart ({cart.length})</Link>
      </nav>
    </header>
  );
};

export default Header;