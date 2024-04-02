import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const switchForm = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/products');
  };

  useEffect(() => {
    // Redirect to products page if user is logged in
    if (isLoggedIn) {
      navigate('/products');
    }
  }, [isLoggedIn, navigate]);
  

  const handleSignup = () => {
    navigate('/login');
  };

  return (
    <div>
      <Header />
      {showLogin ? <LoginForm goToSignup={switchForm} handleLogin={handleLogin} /> : <SignupForm goToLogin={switchForm} handleSignup={handleSignup} />}
      <Footer />
    </div>
  );
};

export default LoginPage;
