import React, { useEffect, useState } from "react";
import CartProductCard from "./CartProductCard";

export default function GoToCart(props) {
  // console.log(props,"in carttttttttt")

  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [deleteItem, setDeleteItem] = useState(); //just created this to refresh component on stat change to refresh deleted cart
  const [totalCartItems, setTotalCartItems] = useState({});

  function deleteCartProduct(indexRecieved) {
    // console.log("recieved index",indexRecieved)
    setDeleteItem(indexRecieved);
    props.cartProduct.splice(indexRecieved, 1);
    // console.log(props.cartProduct)
  }

  useEffect(() => {
    let totalItems = {},
      totalPrice = 0;
    for (let i = 0; i < props.cartProduct.length; i++) {
      totalItems[props.cartProduct[i].productName] = Number(
        props.cartProduct[i].productPrice
      );
      totalPrice = totalPrice + Number(props.cartProduct[i].productPrice);
    }
    setTotalCartPrice(totalPrice);
    setTotalCartItems(totalItems);
    console.log(totalItems, "initial cart total =", totalPrice);
  }, []);

  function findTotalCartPrice(name, value) {
    let totalPrice = 0;
    totalCartItems[name] = value;
    for (let key in totalCartItems) {
      totalPrice = totalPrice + totalCartItems[key];
    }
    // setTotalCartItems(totalCartItems)
    setTotalCartPrice(totalPrice);
    console.log(totalCartItems, name, value);
    console.log(totalPrice, "total price");
  }

  return (
    <div className="container min-vh-100 mt-5 pt-4">
      <div className="list-group">
        {props.cartProduct.map((value, index) => (
          <div key={index} className="rounded">
            <CartProductCard
              img={value.imgLink}
              name={value.productName}
              price={value.productPrice}
              setCartPrice={findTotalCartPrice}
              deleteCartProduct={deleteCartProduct}
              index={index}
            />
          </div>
        ))}
        <div className="bg-dark my-2 text-light p-2 px-4 d-flex justify-content-between align-items-center">
          <span className="w-25">Total cart value : {totalCartPrice} </span>
          <button className="btn btn-success">Pay Now</button>
        </div>
      </div>
    </div>
  );
}
