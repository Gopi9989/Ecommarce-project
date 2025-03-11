import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ProductCard from "../components/Product";
// import Search from "../components/Search"; // Removed Search component import
import Categories from "../components/Categories"; // Importing the Categories component
import Footer from "../components/Footer";

const Shop = () => {
  // usestate for displaying the products fetched
  let [products, setProducts] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState('All');
  let [minPrice, setMinPrice] = useState('');
  let [maxPrice, setMaxPrice] = useState('');
  let [sortOrder, setSortOrder] = useState('Low to High'); // New state for sorting

  const categories = ['All', 'Electronics', 'Jewelery', "Men's Clothing", "Women's Clothing"]; // Example categories

  // useEffect For Fetching The data From An APi
  useEffect(() => {
    const fetchproducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };

    // calling the Fuction to fetch the Products
    fetchproducts();

    return () => {};
  }, []); // fetch only once the data at initial load

  if(products.length === 0) return (
    <div className="spinner">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
  );

  // Filter products based on selected category and price range
  const filteredProducts = products.filter(product => {
    const withinCategory = selectedCategory === 'All' || product.category === selectedCategory.toLowerCase();
    const withinPriceRange = (minPrice === '' || product.price >= minPrice) && (maxPrice === '' || product.price <= maxPrice);
    return withinCategory && withinPriceRange; // Updated to exclude search term
  });

  // Sort products based on selected sort order
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === 'Low to High') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <>
    <div className="shop-container" style={{ display: 'flex' }}>
      <div className="filter-column fs-3" style={{ flex: '1', padding: '20px' }}>
        {/* Removed Search component */}
        <h1 className="fs-1 text-danger mb-3">Filter:</h1>
        <Categories categories={categories} onSelectCategory={setSelectedCategory} /> {/* Integrating Categories component */}
        <div className="price-filter mt-5  mb-3">
          <label htmlFor="minPrice"><strong className="fs-3">Min Price: </strong></label>
          <input 
            type="number" 
            id="minPrice" 
            value={minPrice} 
            onChange={(e) => setMinPrice(e.target.value)} 
          />
          <br />
          <label htmlFor="maxPrice"><strong className="fs-3">Max Price:</strong> </label>
          <input 
            type="number" 
            id="maxPrice" 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(e.target.value)} 
          />
          <br />
        </div>
        <div className="sort-filter mt-5">
          <label htmlFor="sortOrder"><strong className="fs-3">Sort By Price: </strong></label>
          <select 
            id="sortOrder" 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>
        </div>
      </div>
      <div className="product-column" style={{ flex: '3', padding: '20px' }}>
        <div className="row">
          {
            sortedProducts.map((product) => <ProductCard key={product.id} product={product} />)
          }
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Shop;
