import React,{useState} from "react";
import "./Productcard.css";
import { useNavigate } from 'react-router-dom'

function Productcard(props) {
 
  const navigateTo = useNavigate()
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
          <button 
          onClick={()=>{ if(AddToCart==="Added to cart"){navigateTo("/cart");return;};props.setCartProduct(props);navigateTo("/cart")}} 
          className="btn btn-primary">
            Buy Now
          </button>
          {/* <div className="d-flex justify-content-evenly"> */}
          <button className="btn btn-warning my-2 cartBtn" onClick={handleAddToCartClick}>{AddToCart}</button>
          {/* <button className="btn btn-warning my-2 px-1 cartBtn" onClick={()=>{navigateTo("/cart")}}>Go To Cart</button> */}
          {/* </div> */}
        </div>
      </div>
  );
}

export default Productcard;
