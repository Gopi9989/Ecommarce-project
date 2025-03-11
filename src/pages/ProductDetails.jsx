import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useCart } from '../store/StoreContext';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  // getting the id from Products
  const { id } = useParams();

  // usestate for displaying the product fetched
  let [product, setProduct] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  // useEffect For Fetching The data From An APi
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(`Fetching product with ID: ${id}`); // Log the product ID
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`); // Updated API endpoint
        console.log("Fetched product data:", response.data); // Log the fetched data
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product:", err); // Log the error
        setError('Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };

    // calling the function to fetch the product
    fetchProduct();
  }, [id]); // fetch only once the data at initial load

  const { dispatch } = useCart();

  // handling the AddToCart functionality
  function handleAddToCart(product) {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success("Added item to cart");
  }

  if (loading) return (
    <div className="spinner">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
  );

  if (error) return <div className="alert alert-danger">{error}</div>;

  if (!product) return <div>No product found.</div>; // Handle case where product is null

  const { image, title, price, description } = product; // Updated to use 'images'

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Price: ${price}</p>
            <p className="card-text">{description}</p>
            <button className="btn btn-success" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
