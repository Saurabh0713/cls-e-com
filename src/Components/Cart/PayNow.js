import React, { useState } from 'react'
import logo from '../../Images/alogo.png'

export default function PayNow() {
  const [onHover,setHoverStyle] = useState(false)
  const handleMouseEnter = () => {
    setHoverStyle(true);
 };
 const handleMouseLeave = () => {
    setHoverStyle(false);
 };
 const hoverStyle = {
  backgroundColor: onHover ? "#DDDDDD" : "#CCCCCC"
 }
  return (
    <div className='bg-secondary p-5 vw-100 vh-100 row' >
    <div className='container d-flex justify-content-center align-items-center h-75 rounded border border-2 col-lg-6 col-md-9 col-sm-12 col-xs-12' style={{backgroundImage:`url(${logo})`,backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
        <div className=' text-success w-75 p-4 m-5 rounded float-end' style={hoverStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h5 className='mb-3 text-dark'>Select payment option</h5>
          <p className='my-1 px-2' >Credit Card</p>
          <p className='my-1 px-2' >Dedit Card</p>
          <p className='my-1 px-2' >Mobile Wallets</p>
          <p className='my-1 px-2' >UPI</p>
          <p className='my-1 px-2' >Others</p>
        </div>
    </div>
    </div>
  )
}
