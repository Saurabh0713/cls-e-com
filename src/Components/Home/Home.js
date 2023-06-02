import React, {useState,useEffect} from 'react';
import Productcard from '../ProductCard/Productcard';
import './Home.css';
import iphone14 from "../../Images/iph14.jpg";
import ipad from "../../Images/ipad.png";
import mair from "../../Images/mbookair.jpg";
import mpro from "../../Images/mbookpro.jpg";
import GoToCart from '../Cart/GoToCart';

// import { mydata } from '../../Product'; // for importing json object from js file in src

function Home(props) {
 
  const [product, setProductState] = useState([])
  
  useEffect(()=>{
    fetch("Product.json")
    .then(res=>res.json())
    .then((res)=> {
      console.log(JSON.stringify(res))
      setProductState(res);
      
    });
  },[])
  
  const [cartItemsCollection,updateCartItemsCollection] = useState([])
  
  function setCartProductFunction(value){
    cartItemsCollection.push(value)
    // console.log(cartItemsCollection,"collllllllll")
    props.setCartProductHome(cartItemsCollection)
  }
  // function checkstat(){
  //   console.log(cartProduct,"in homeeeee")
  // }

  return (
 {product} && <div className='home-main my-0 mt-5 min-vh-100'>
      <h4 className='mx-3 my-3 text-light'>Apple Products</h4>
      {/* <button onClick={checkstat}>check home</button> */}
     
      <div className='productContainer'>
     {
      product.map((value,index)=>(
        <div key={index} className='rounded m-3'>
        <Productcard productName={value.name} productPrice={value.price} imgLink={value.image} productDetail={value.detail} setCartProduct={setCartProductFunction}/>
        </div>
      ))
      }

    </div>
    </div>
  )
}

export default Home