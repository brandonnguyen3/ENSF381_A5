/*
=========================================================
Name        : Cart.js
Assignment  : 5
Author(s)   : Thalia Espinoza,  Brandon Nguyen
UCID        : 30195212, 30169800
Submission  : 04/08/2024
Description :cart implementation
=========================================================
*/

import React from 'react';
import CartItem from './CartItem';


const Cart = ({ cartItems, onRemove }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} product={item} onRemove={onRemove} />
      ))}
      <div className="total">Total (in cart): ${getTotalPrice().toFixed(2)}</div>
    </div>
  );
};

export default Cart;
