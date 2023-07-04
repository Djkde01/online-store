import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // If the product is already in the cart, we update the quantity
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex >= 0) {
      // Use structured cloning to create a new array
      const newCart = structuredClone(cart);
      newCart[productIndex].quantity += 1;
      setCart(newCart);
    } else {
      // Use structured cloning to create a new array
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex >= 0) {
      // Use structured cloning to create a new array
      const newCart = structuredClone(cart);
      newCart[productIndex].quantity -= 1;
      if (newCart[productIndex].quantity === 0) {
        newCart.splice(productIndex, 1);
      }
      setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
