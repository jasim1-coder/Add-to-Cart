import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider> 
      <BrowserRouter>
        <Routes> 

          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
