import React,{useState} from "react";
import "./Productcard.css";
import { useNavigate } from 'react-router-dom'

function Productcard(props) {
 
  const navigateBuyNow = useNavigate()
  const [AddToCart,setAddToCart] = useState("Add to cart");

  const handleAddToCartClick=()=>{
    if(AddToCart==="Add to cart"){
      setAddToCart("Added to cart")
      props.setCartProduct(props)
    }
  //  console.log(props,"in productcarddddddd")
  }

  return (
      <div className="card">
        <img
          src={props.imgLink}
          className="card-img-top"
          alt="..."
        ></img>
        <hr/>
        <div className="card-body item-detail">
          <h5 className="card-title">{props.productName}</h5>
          <p className="card-text price">&#8377; {props.productPrice}</p>
          <p className="card-text detail">{props.productDetail}</p>
          <button onClick={()=>{props.setCartProduct(props);navigateBuyNow("/buynow")}} className="btn btn-primary">
            Buy Now
          </button>
          <button className="btn btn-warning my-2 addcart" onClick={handleAddToCartClick}>{AddToCart}</button>
       
        </div>
      </div>
  );
}

export default Productcard;
