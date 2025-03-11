import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';  

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in:', { username, password });
    };

    const handleSignup = () => {
        navigate('/signup'); // Redirect to signup page
    };

    return (
        <div className='login-container mt-5'>
            <div className='image-column'>
                <img src="public/login-logo.png" alt="Shopping" />
            </div>
            <div className='form-column'>
                <h2>Welcome Back. Please Log In To Your Account.</h2>
                <form onSubmit={handleSubmit} className='login-form'>
                    <div>
                        <label>Username or Email Address:</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <br />
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember Password</label>
                    </div>
                    <a href="/forgot-password">Forgot password?</a>
                    <br />
                    <button type="submit">Login</button>
                    <button className='mt-3 bg-warning' type="button" onClick={handleSignup}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
