import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";

import "../styles/Cart.css";
import { useCart } from "../hooks/useCart";

export function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const cartCheckboxId = useId();
  return (
    <>
      <label className="cart-btn" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />
      <aside className="cart">
        <ul>
          {cart.length === 0 && <p>Cart is empty</p>}
          {cart.map((product) => {
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div className="cart-product--details">
                  <strong>{product.title}</strong>
                  <span>$ {product.price}</span>
                </div>
                <footer>
                  <button onClick={() => removeFromCart(product)}>-</button>
                  <small>{product.quantity}</small>
                  <button onClick={() => addToCart(product)}>+</button>
                </footer>
              </li>
            );
          })}
        </ul>

        <button type="button" onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
