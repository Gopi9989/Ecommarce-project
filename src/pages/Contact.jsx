import React, { useState } from 'react';
import './Contact.css'; // Optional: Create a CSS file for styling
import Footer from '../components/Footer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!');
      setLoading(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <>
    <div className="contact-container mt-5 mb-4">
      <h1>Contact Us</h1>
      <p className='text-center fs-4'>Have a Question or need support ? we re here to help. get in touch with us</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label className='fs-2' >Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className='fs-2'>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className='fs-2'>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="contact-btn" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
          
        </button>
      </form>
      <div className="contact-info mt-4 text-center fs-3">
        <h2 className='fs-1 mb-5'>Contact Information</h2>
        <p>Phone: (91) 834186347</p>
        <p>Email: Fashion$co@gmail.com</p>
        <p>Address: 123 Main St, Anytown, INDIA</p>
      </div>
      <div>
        <h1 className='mt-2 mb-2'>Fallow us on Social media</h1>
        <ul className='text-center fs-1 mt-4   '>
        <i class="bi bi-facebook mx-5"></i>

        <i class="bi bi-twitter"></i>
        
        <i class="bi bi-instagram mx-5"></i>

        </ul>
       
 
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
