import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../store/StoreContext';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { state } = useCart();
  const navigate = useNavigate();
  const cartCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    navigate(`/search?query=${searchQuery}`); // Example of navigating to a search results page
    setSearchQuery(''); // Clear the search input
  };

  return (
    <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="light">
      <div className="container-fluid">
        <NavLink className="navbar-brand mx-3 fs-1" to="/">
          Fashion <span className='text-danger fs-2'>&</span> Co
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link active fs-3 mx-2" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-3 mx-3" to="/Shop">Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-3 mx-3" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-3 mx-2" to="/contact">Contact</NavLink>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-success btn-lg h-100 ms-2" type="submit">
              Search
            </button>
          </form>
          
          <ul>
            <li className="navbar-nav ms-auto">
              <NavLink className="nav-link fs-3 mx-2 position-relative" to="/cart">
                <i className="bi bi-cart-fill fs-2"></i>
                {cartCount > 0 && (
                  <span className="my-2 mr-4 p-1 position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </NavLink>
              <NavLink className="btn btn-warning rounded-pill my-3 text-center p-2 mx-1" type="button" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
