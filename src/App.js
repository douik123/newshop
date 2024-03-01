// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './comp/ProductList';
import Cart from './comp/Cart';
import About from './comp/About';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <Router>
      <div>
        <header className="navbar">
          <div className="navbar-logo">MyShop</div>
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <button onClick={openCart}>
            Cart ({cartItems.length})
          </button>
        </header>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<div>Contact Us Page</div>} />
          <Route
            path="/"
            element={<ProductList addToCart={addToCart} />}
          />
        </Routes>

        {showCart && (
          <div className="cart-popup">
            <Cart cartItems={cartItems} />
            <button onClick={closeCart}>Close</button>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
