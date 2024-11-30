import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product){
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
      alert("added to the cart");
    } else {
      alert("procut is in the cart");
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
