import React, { useState } from 'react';

const SignupForm = ({ goToLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username.trim() !== '' && password.trim() !== '' && email.trim() !== '' && confirmPassword.trim() !== '') {
            if (password === confirmPassword) {
                try {
                    const response = await fetch('http://localhost:5000/registration', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: username,
                            password: password,
                            email: email,
                        }),
                    });
                    if (response.ok) {
                        // Registration successful, you may want to redirect or display a success message
                        console.log('Registration successful');
                    } else {
                        const data = await response.json();
                        setErrorMessage(data.error || 'Failed to register user');
                    }
                } catch (error) {
                    console.error('Error registering user:', error);
                    setErrorMessage('Failed to register user');
                }
            } else {
                setErrorMessage('Passwords do not match. Try again.');
            }
        } else {
            setErrorMessage('Please fill in all fields.');
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <button type="submit">Signup</button>
                <br />
                <button type="button" onClick={goToLogin}>Switch to Login</button>
            </form>
        </div>
    );
};

export default SignupForm;