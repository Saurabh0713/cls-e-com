import React from "react";
import "./ApiProductCard.css";
import { useNavigate } from 'react-router-dom'

export default function ApiProductCard(props) {
  let stars = props.rating;
  stars = Math.ceil(stars);
  let starsArr = [];
  for (let i = 0; i < stars; i++) {
    starsArr.push("*");
  }
  const handleAddToCart = () => {
    let cart = localStorage.getItem("cart");
    if (!cart) {
      let cartItems = [];
      cartItems.push(props);
      localStorage.setItem("cart",JSON.stringify(cartItems))
    }else{
      let cartItems = JSON.parse(cart)
      for(let i=0;i<cartItems.length;i++) {
        if(cartItems[i].title == props.title){
          console.log(cartItems[i])
          console.log(i)
          alert("Already Added To Cart")
          return
        }
      }
      cartItems.push(props);
      localStorage.setItem("cart",JSON.stringify(cartItems))
    }
    console.log(cart);
  };

  const navigate = useNavigate()

  function handleCartClick(){
      navigate('/apicart')
  }

  // console.log(starsArr)

  return (
    <div className="card mycard">
      <img
        src={props.image}
        className="card-img-top mycard-img-top"
        alt="product image"
      />
      <hr />
      <div className="card-body mycard-body">
        <h5 className="card-title name">{props.title}</h5>
        <h6 className="card-title">Price: ${props.price}</h6>
        <div className="d-flex m-2 align-items-center">
          {starsArr.map((value, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          ))}
          <span className="count">{props.ratingCount}</span>
        </div>
        <p className="card-text mycard-text text-secondary">
          {props.description}
        </p>
        <button className="btn btn-primary mb-2" onClick={handleAddToCart}>
          Add to cart
        </button>
        <button className="btn btn-warning" onClick={handleCartClick}>Go to cart</button>
      </div>
    </div>
  );
}
