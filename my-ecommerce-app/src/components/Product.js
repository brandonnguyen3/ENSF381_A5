/*
=========================================================
Name        : Product.js
Assignment  : 5
Author(s)   : Thalia Espinoza,  Brandon Nguyen
UCID        : 30195212, 30169800
Submission  : 04/08/2024
Description : Product implementation
=========================================================
*/ 
import React, { useState } from 'react';

const Product = ({ product, onAddToCart }) => {
  const { id, name, price, image, description } = product;
  const [showDetails, setShowDetails] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
    console.log('Product added to cart:', product);
    setQuantity(quantity + 1);
  };

  return (
    <div className="product">
      <div className="image">
        <img src={image} alt={name} style={{ width: '20%' }} />
      </div>
      <div className="info">
        <div className="name" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{name}</div>
        <div className="price">Price: ${price}</div>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        {showDetails && (
          <div className="details" >
            <div className="description">{description}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
