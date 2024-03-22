//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './component/Homepage'; // Assuming Homepage component file location
//import ProductsPage from './component/ProductsPage'; // Import other page components if needed
//import LoginPage from './component/LoginPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home /> } />
      </Routes>
    </BrowserRouter>
    

  

  );
};


export default App;
