// OrderSummary.jsx
import React from 'react';
import { useCart } from '../store/StoreContext';

const OrderSummary = () => {
  const { state } = useCart();

  return (
    <div className="container">
      <h1>Order Summary</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.quantity}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: ${state.cart.reduce((acc, product) => acc + product.price, 0)}</p>
    </div>
  );
};

export default OrderSummary;