import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>cart</h1>
      {cart.length === 0 ? (
        <p>no items in the cart.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;
