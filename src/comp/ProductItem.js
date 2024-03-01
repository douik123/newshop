// src/components/ProductItem.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './ProductItem.css';

const ProductItem = ({ product, addToCart }) => {
  const { id, title, price, image, description } = product;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="product-item" >
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button className="btn special-btn" onClick={() => addToCart(id)}>
        Add to Cart
      </button>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ProductItem;
