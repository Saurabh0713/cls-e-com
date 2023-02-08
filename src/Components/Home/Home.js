import React, {useState} from 'react'
import Productcard from '../ProductCard/Productcard';
import './Home.css';
import iphone14 from "../../Images/iph14.jpg";
import ipad from "../../Images/ipad.png";
import mair from "../../Images/mbookair.jpg";
import mpro from "../../Images/mbookpro.jpg";

function Home() {
  // const [learningstat,setlearningstat] = useState("enter state");
  // function handleclk(){
  //   setlearningstat("setting state")
  // }
 
  return (
    <div className='home-main my-0'>
      <h4 className='mx-3 my-3 text-light'>Apple Products</h4>
      <div className='productContainer'>
    <Productcard buy="Buy now" productName="Mackbook Pro" productPrice="Rs 349000" imgLink={mpro} />
    <Productcard buy="Buy now" productName="Mackbook Air" productPrice="Rs 129000" imgLink={mair}/>
    <Productcard buy="Buy now" productName="Ipad" productPrice="Rs 69000" imgLink={ipad}/>
    <Productcard buy="Buy now" productName="Iphone 14" productPrice="Rs 149000" imgLink={iphone14} />
    <Productcard buy="Buy now" productName="Mackbook Pro" productPrice="Rs 349000" imgLink={mpro} />
    <Productcard buy="Buy now" productName="Mackbook Air" productPrice="Rs 129000" imgLink={mair}/>
    <Productcard buy="Buy now" productName="Ipad" productPrice="Rs 69000" imgLink={ipad}/>
    <Productcard buy="Buy now" productName="Iphone 14" productPrice="Rs 149000" imgLink={iphone14} />
    {/* <button onClick={handleclk} className='btn btn-primary'>{learningstat}</button> */}
    </div>
    </div>
  )
}

export default Home