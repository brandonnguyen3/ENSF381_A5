import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage';

const App = () =>  {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<LoginPage />} />  
        <Route path="/products" element={<Productpage />} />    
        <Route path="/login" element={<LoginPage />} />
          
  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
