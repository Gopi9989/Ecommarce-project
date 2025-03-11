import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            
            <div className="footer-content ">
            <p className='fs-1 mb-3'>Fashion <span className="text-danger">&</span> co.</p>
                
                <ul className="footer-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="social-media ">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-facebook"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p className='text-center fs-3 border-top mt-5'>&copy; {new Date().getFullYear()}  Fashion&co.  All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;