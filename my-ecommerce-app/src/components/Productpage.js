/*
=========================================================
Name        : ProductPage.js
Assignment  : 5
Author(s)   : Thalia Espinoza,  Brandon Nguyen
UCID        : 30195212, 30169800
Submission  : 04/08/2024
Description : ProductPage implementation
=========================================================
*/ 
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Productpage = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    fetchProducts();
  },[]);
  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      console.log("Loaded cart items from localStorage:", storedCartItems);
      console.log("Loaded cart items in JSON", JSON.parse (storedCartItems));
      setCartItems(JSON.parse(storedCartItems));
  
    }
  }, []); 

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  
  useEffect(() => {
    console.log("Productpage component rerendered");
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]); 

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = cartItems.map((item, index) => {
        if (index === existingItemIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        if (item.quantity === 1) {
          return null; 
        } else {
          return { ...item, quantity: item.quantity - 1 }; 
        }
      }
      return item;
    }).filter(item => item !== null); // Filter out null entries to remove removed items from cart

    console.log("Updated Cart Items:", updatedCartItems);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <Header />
      <table>
        <tbody>
          <tr>
            <td><ProductList products={products} onAddToCart={addToCart} /></td>
            <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} onRemove={removeFromCart} /></td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Productpage;
