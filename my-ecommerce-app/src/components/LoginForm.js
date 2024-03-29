import React, { useState } from 'react';

const LoginForm = ({ goToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '' && password.trim() !== '') {
      console.log('Logging in...');
    } else {
      setErrorMessage('Please enter your username and password.');
      return;
    }

    //authentication
    /*
    if (username === '' && password === '') {
        console.log('Logged in successfully!');
        // Reset error message
        setErrorMessage('');
      } else {
        setErrorMessage('Invalid username or password. Please try again.');
      }
    */
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {/* Display error message if it exists */}
      <form onSubmit={handleSubmit}>
        <label for="username">Username</label>
        <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label for="password">Password</label>
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
        <br />
        <button type="button" onClick={goToSignup}>Switch to Signup</button>
      </form>
    </div>
  );
};

export default LoginForm;
