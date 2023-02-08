import React,{useState} from "react";
import "./Productcard.css";

function Productcard(props) {
  const [AddToCart,setAddToCart] = useState("Add to cart");
  function handleAddToCartClick(){
    setAddToCart("Added to cart")
  }
  return (
      <div className="card">
        <img
          src={props.imgLink}
          className="card-img-top"
          alt="..."
        ></img>
        <hr/>
        <div className="card-body">
          <h5 className="card-title">{props.productName}</h5>
          <p className="card-text">{props.productPrice}</p>
          <a href="/" className="btn btn-primary">
            {/* Buy now */}
            {props.buy}
          </a>
          <button className="btn btn-primary my-2 addcart" onClick={handleAddToCartClick}>{AddToCart}</button>
        </div>
      </div>
  );
}

export default Productcard;
