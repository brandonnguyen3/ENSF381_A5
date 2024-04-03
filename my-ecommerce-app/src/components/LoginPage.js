import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = ({setLoggedIn}) => {


  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate(); 

  const switchForm = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = () => {
    setLoggedIn(true);
    navigate('/products');
  };

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
