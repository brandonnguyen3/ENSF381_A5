/*
=========================================================
Name        : Header.js
Assignment  : 5
Author(s)   : Thalia Espinoza,  Brandon Nguyen
UCID        : 30195212, 30169800
Submission  : 04/08/2024
Description : header implementation 
=========================================================
*/

import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header>
        <div classname = "logo-name" style ={{display :'flex', justifyContent: 'space-between', padding:10}} >
            <div className="logo">
                <img src="/images/logo.png" alt="Logo" style ={{width:50}}/>
            </div>
            <div class="company-name">
                Bloom Boom
            </div>
        </div>
      
        <div className="navigation" style ={{display :'flex', justifyContent: 'space-between', padding:10}}>
         <Link to="/">Home</Link>
         <Link to="/products">Products</Link>
         <Link to="/login">Login</Link>
         </div>
    </header>
  );
};

export default Header;
