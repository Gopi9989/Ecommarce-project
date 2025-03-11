import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import ProductNotFound from './pages/ProductNotFound';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from "./components/Cart";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import OrderSummary from './pages/OrderSummary';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="*" element={<ProductNotFound />} />
      </Routes>
    </>
  );
};

export default App;
