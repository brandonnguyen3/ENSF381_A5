import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 


function LoginForm({goToSignup}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();


  function handleLogin() {
    fetch('http://127.0.0.1:5000/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'username':username, 'password':password}),
    })
    .then((response) => response.json())
    .then(response => {
      if (response.authenticated) {
        setAuthenticated(true);
        setMessage('Login successful')
        navigate('/products');
      } else {
        setAuthenticated(false);
        setMessage('Invalid username or password');
      }

    })
    .catch((error) => {
      setMessage('Failed to login');
    });
};

if(authenticated) {
  navigate('/products');
}

  return (
    <div>
      <h2>Login</h2>
      {message && <p style={{ color: 'red' }}>{message}</p>}
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit" onClick={handleLogin}>Login</button> 
        <br />
        <button type="button" onClick={goToSignup}>Switch to Signup</button>
    </div>
  );
};

export default LoginForm; 
