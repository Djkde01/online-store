export const cartIntialState = JSON.parse(localStorage.getItem("cart")) || [];

export const CART_ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

export const updateLocalStorage = (cart) => {
  console.log("updateLocalStorage", cart);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const { id } = payload;
      const productIndex = state.findIndex((item) => item.id === id);

      if (productIndex >= 0) {
        // Use structured cloning to create a new array
        const newCart = structuredClone(state);
        newCart[productIndex].quantity += 1;
        updateLocalStorage(newCart);
        return newCart;
      } else {
        const newCart = [...state, { ...payload, quantity: 1 }];
        updateLocalStorage(newCart);
        return newCart;
      }
    }
    case CART_ACTIONS.REMOVE_FROM_CART: {
      const { id } = payload;
      const productIndex = state.findIndex((item) => item.id === id);

      if (productIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productIndex].quantity -= 1;
        if (newCart[productIndex].quantity === 0) {
          newCart.splice(productIndex, 1);
        }
        updateLocalStorage(newCart);
        return newCart;
      }
      break;
    }
    case CART_ACTIONS.CLEAR_CART: {
      updateLocalStorage([]);
      return cartIntialState;
    }
  }
  return state;
};
