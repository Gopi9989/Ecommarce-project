import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../store/StoreContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  console.log("productcard:", product);
  const {id,image,title,price} = product;
  
  let cardtitle=title.length<=51?title:title.slice(0,50)

  let {dispatch}=useCart()

  // handling the AddTocart Functionality
  function handleAddtocart(product){
   dispatch({type:"ADD_TO_CART",payload:product})
   toast.success("added item to cart")
  }
  
  return (
    
    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
     
      <div class="card shadow p-3 my-3 mx-4 bg-white rounded">
      <Link to={`/shop/:${id}`} className="nav-link">
        <img src={image} class="card-img-top product-img" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-center">{cardtitle}</h5>
          <p class="card-text text-center">$ {price}</p>
          
        </div>
      </Link>
        <button className="btn btn-warning mx-5" onClick={()=>handleAddtocart(product)}>Addtocart</button>
      </div>
     
    </div>
  );
};

export default ProductCard;