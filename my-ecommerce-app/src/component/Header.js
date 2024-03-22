import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
    <div className="header-content"> 
        <div className="logo">
            <img src="/images/logo.png" alt="Company Logo" />
        </div>
        <div className="company-name">BloomBoom</div>
    </div>
      
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <a href='/'> Home </a>
        <a href='/Products'> Products</a>
        <a href='/Login'> Login</a>
      </nav>
    </header>
  );
};

export default Header;
