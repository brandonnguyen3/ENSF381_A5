import React, { useState} from 'react';

const SignupForm = ({goToLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() !== '' && password.trim() !== '' && email.trim() !== '' && confirmPassword.trim() !== '') 
        {
            if(password === confirmPassword) {
                console.log('Signing up...');
            }
            else {
                alert('');
                setErrorMessage('Passwords do not match. Try agaian.');
                return;
            }
        } 
        else {
                setErrorMessage('Please fill in all fields.');
            }
        };
        return (
            <div>
                <h2>Sign Up</h2>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {/* Display error message if it exists */}

                <form onSumbit={handleSubmit}>
                <label for="username">Username</label>
                <input type="text" placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label for="username">Password</label>
                <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <label for="username">Confirm Password</label>
                <input type="password" placeholder='Confirm your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <br />
                <label for="username">Email</label>
                <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <button type='submit'>Signup</button>
                <br />
                <button type='button' onClick={goToLogin}>Switch to Login</button>

                </form>
            </div>
        );
};

export default SignupForm;
            