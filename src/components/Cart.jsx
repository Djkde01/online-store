import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";

import "../styles/Cart.css";

export function Cart() {
  const cartCheckboxId = useId();
  return (
    <>
      <label className="cart-btn" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />
      <aside className="cart">
        <ul>
          <li>
            <img src="https://picsum.photos/50/50" alt="Product" />
            <div>
              <strong>Product dummy</strong>
              <span>$100</span>
            </div>
            <footer>
              <small>Quantity: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
