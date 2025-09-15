import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if(cart.length === 0) return <div><h2>Your cart is empty</h2><Link to="/">Go Shopping</Link></div>;

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map(item => <CartItem key={item.id} item={item} />)}
      <h3>Total: ${total}</h3>
      <button onClick={clearCart}>Clear Cart</button>
      <Link to="/checkout"><button>Checkout</button></Link>
    </div>
  );
}
