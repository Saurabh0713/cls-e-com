import React, { useState } from 'react'

export default function BuyNow(props) {
    console.log(props,"buyyyyyyyyyyyyy")

  return (
    <div className='container min-vh-100 mt-5 position-relative'>
       <h2 className='text-light my-4'>Your selected item</h2>
       <div className='d-flex w-auto p-2 justify-content-around align-items-center bg-light rounded'>
       <div className='w-25'><img className='w-100' src={props.product[0].imgLink}></img></div>
        <div className='w-50'>
            <h3>{props.product[0].productName}</h3>
            <p>Rs {props.product[0].productPrice}</p>
            <p>{props.product[0].productDetail}</p>
        </div>
        <button className="btn btn-success">Pay Now</button>
       </div>
     
    </div>
  )
}
