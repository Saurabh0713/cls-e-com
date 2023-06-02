import React, { useEffect, useState } from "react";
import CartProductCard from "./CartProductCard";

export default function ApiCart() {

const [items,updateItems] = useState([])

useEffect(()=>{
  let cartItem = localStorage.getItem("cart")
  cartItem = JSON.parse(cartItem)
  updateItems(cartItem)
  console.log(cartItem)
},[])
    
  return (
    <div className="container min-vh-100 mt-5 pt-4">
        <h3 className="text-light">API Cart</h3>
      <div className="list-group">
        {items.map((value, index) => (
          <div key={index} className="rounded">
            <CartProductCard
              img={value.image}
              name={value.title}
              price={value.price}
              // setCartPrice={findTotalCartPrice}
              // deleteCartProduct={deleteCartProduct}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
