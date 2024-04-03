import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage';

const App = () =>  {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Homepage />} />
        
        <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} />} />
        <Route path="/products" element={loggedIn ? <Productpage /> : <Navigate to="/login" />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;



