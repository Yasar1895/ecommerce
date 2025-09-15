import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width="80" />
      <div>
        <h4>{item.name}</h4>
        <p>Price: ${item.price} | Quantity: {item.qty}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}
