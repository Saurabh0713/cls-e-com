import React, { useState,useEffect } from 'react'

export default function (props) {

const [quantity,updateQuantity] = useState(1)
const [totalPrice,setTotalPrice] = useState(props.price)

useEffect(()=>{
//  updateQuantity(1)
  setTotalPrice(props.price * quantity)
},[props])

function handleQuantityChange(value){
  // console.log(value)
  updateQuantity(value);
  setTotalPrice(Number(props.price)*value)
  props.setCartPrice(props.name,Number(props.price)*value)
}

const handleRemoveItem=()=>{
  // console.log("remove clicked")
  props.deleteCartProduct(props.index)
 
  // console.log("sending index",props.index)
  props.setCartPrice(props.name,0)
  
}

  return (
    <div className='my-1'>
         <div href="#" className="list-group-item list-group-item-action d-flex" aria-current="true">
    <div className=''  style={{width:"100px",height:"100px"}}>
      <img className='rounded-5' src={props.img} style={{width:"100px",height:"90px"}}></img>
    </div>
    <div className="w-50 pt-2 justify-content-between">
      <h5 className="">{props.name}</h5>
      <small> {props.price}</small>
    </div>
    <div className=''  style={{maxWidth:"140px"}}>
    <p className="my-2 mx-2">Quantity : </p>
    <button className=' btn btn-secondary mx-2 my-1 px-2 py-0 pb-1' style={{fontWeight:"900",fontSize:"24px",textAlign:"center"}} onClick={() => handleQuantityChange(quantity==1?1:quantity-1)}>-</button>
    <p className='' style={{fontWeight:"800",width:"20px",display:"inline-block"}}>{quantity}</p>
    <button className=' btn btn-secondary mx-2 my-1 px-1 py-0 pb-1' style={{fontWeight:"700",fontSize:"24px",textAlign:"center"}} onClick={() => handleQuantityChange(quantity+1)}>+</button>
    </div>
    <div>
    <p className='m-2'>Total price : {totalPrice} </p>
    <button className='btn btn-danger m-2 p-1' style={{maxWidth:"80px",height:"max-content"}} onClick={handleRemoveItem}>Remove</button>
    </div>
  </div>
    </div>
  )
}
