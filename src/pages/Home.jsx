import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "../components/Footer";
import "./Home.css"; // Import the CSS for styling

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const categories = {
    Women: products.filter((item) => item.category === "women's clothing"),
    Men: products.filter((item) => item.category === "men's clothing"),
    Electronics: products.filter((item) => item.category === "electronics"),
    Jewelry: products.filter((item) => item.category === "jewelery"),
  };

  return (
    <>
      <div>
        <img src=".public/shopping-banner.png" alt="no-img" className="banner-img" />
      </div>
      <div className="home-container">
        {Object.keys(categories).map((category) => (
          <div className="card" key={category}>
            <h2 className="fs-2">{category}</h2>
            <div className="card-items">
              {categories[category].slice(0, 4).map((item) => (
                <div className="card-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.title}
                    onClick={() => navigate('/shop')} // Add click handler
                  />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
