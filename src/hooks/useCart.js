import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {
  const { cart, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  return { cart, addToCart, removeFromCart, clearCart, checkProductInCart };
};
