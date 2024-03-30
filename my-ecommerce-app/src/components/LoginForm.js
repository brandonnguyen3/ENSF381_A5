import React, { useState } from 'react';

const LoginForm = ({ goToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim() !== '' && password.trim() !== '') {
      try {
        const response = await fetch('http://localhost:5000/authenticate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });
        if (response.ok) {
          // Login successful, you may want to redirect or perform other actions
          setErrorMessage('Logged in successfully!');
          // Reset error message
          setErrorMessage('');
        } else {
          // Login failed, set error message
          const data = await response.json();
          setErrorMessage(data.error || 'Failed to log in');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        setErrorMessage('Failed to log in');
      }
    } else {
      setErrorMessage('Please enter your username and password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label htmlFor="password">Password</label>
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
