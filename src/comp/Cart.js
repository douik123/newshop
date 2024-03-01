// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - {item.price ? `$${item.price.toFixed(2)}` : 'Price not available'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
