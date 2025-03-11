import React, { useState } from 'react';
import { toast } from 'react-toastify';
import OrderSummary from './OrderSummary'; // Import OrderSummary

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSummary, setShowSummary] = useState(false); // State for showing order summary

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate successful payment
    setTimeout(() => {
      toast.success('Payment processed successfully!');
      setLoading(false);
      // Reset fields
      setCardNumber('');
      setExpirationDate('');
      setCvv('');
      setUpiId('');
      setPaymentMethod('');
    }, 1000);
  };

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <form onSubmit={handlePayment}>
        <div className="mb-3">
          <h2>Select Payment Method</h2>
          <div>
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="card">Card Payment</label>
          </div>
          <div>
            <input
              type="radio"
              id="upi"
              name="paymentMethod"
              value="upi"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="upi">UPI</label>
          </div>
          <div>
            <input
              type="radio"
              id="cashOnDelivery"
              name="paymentMethod"
              value="cashOnDelivery"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="cashOnDelivery">Cash on Delivery</label>
          </div>
        </div>

        {paymentMethod === 'card' && (
          <>
            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Expiration Date</label>
              <input
                type="text"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="form-control"
                required
              />
            </div>
          </>
        )}

        {paymentMethod === 'upi' && (
          <div className="mb-3">
            <label className="form-label">UPI ID</label>
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="form-control"
              required
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Processing...' : 'Pay'}
        </button>
      </form>

      <button 
        className="btn btn-secondary mt-3" 
        onClick={() => setShowSummary(!showSummary)}
      >
        {showSummary ? 'Hide Order Summary' : 'Show Order Summary'}
      </button>

      {showSummary && <OrderSummary />} {/* Conditionally render OrderSummary */}
    </div>
  );
};

export default Payment;
