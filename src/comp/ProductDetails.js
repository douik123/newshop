// src/components/ProductDetails.js
import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p className="product-price">${product.price.toLocaleString('en-US')}</p>
      {/* Ajoutez d'autres détails du produit au besoin */}
    </div>
  );
};

export default ProductDetails;
