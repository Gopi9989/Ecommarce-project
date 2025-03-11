import React, { useState } from 'react';
import { useCart } from '../store/StoreContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { state, dispatch } = useCart();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateValue, setState] = useState('');
  const [zip, setZip] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate successful checkout
    toast.success('Order placed successfully!');
    dispatch({ type: 'EMPTY_CART' });
    navigate('/payment'); // Redirect to payment page
    setLoading(false);
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-header">Checkout</h1>
      <form onSubmit={handleCheckout} className="checkout-form">
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            value={stateValue}
            onChange={(e) => setState(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Zip</label>
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="payment-methods">
          <h2>Payment Method</h2>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="upi"
              value="upi"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="form-check-label" htmlFor="upi">
              UPI
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="card"
              value="card"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="form-check-label " htmlFor="card">
              Card
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="cashOnDelivery"
              value="cashOnDelivery"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="form-check-label" htmlFor="cashOnDelivery">
              Cash on Delivery
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
