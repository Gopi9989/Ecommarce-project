import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import './Signup.css'; // Import the CSS file

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your registration logic (e.g., API call)
        alert('User  registered successfully!'); // Show alert message
        navigate('/'); // Redirect to home or another page after registration
    };

    return (
        <div className="signup-container">
            <div className="signup-image">
                <img src="./src/assets/login-logo.png" alt="Signup" /> {/* Replace with your image URL */}
            </div>
            <div className="signup-form-container">
                <h1 className='my-5'>Signup</h1>
                <h2 className='signup-title'>Hey; Welcome Register to get exaiting deals</h2>
                <form onSubmit={handleSubmit} className='signup-form'>
                    <div>
                        <label>Name:</label>
                        <input 
                            type="text" 
                            placeholder='NAME'
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Your Email:</label>
                        <input 
                            type="email" 
                            placeholder='EMAIL'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input 
                            type="password" 
                            placeholder='PASSWORD'
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Repeat your password:</label>
                        <input 
                            type="password" 
                            placeholder='PASSWORD'
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">I agree all statements in <a href="/terms">Terms of service</a></label>
                    </div>
                    <button className='signup-btn' type="submit">Register</button>
                    <p>Already a member? <a href="/login">I am already a member</a></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;