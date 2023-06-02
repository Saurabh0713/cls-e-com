import React,{useEffect, useState} from 'react'
import ApiProductCard from './ApiProductCard'

export default function ApiProducts() {

    const [product, setProductState] = useState([])

   useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then((json)=>{console.log(json);setProductState(json)})
   },[])

  return (
    <div className='container d-flex flex-wrap mt-5'>
          {product.map((value,index)=>(
        <div key={index} className='rounded m-3'>
        <ApiProductCard title={value.title} price={value.price} image={value.image} description={value.description} rating={value.rating.rate} ratingCount={value.rating.count}/>
        </div>
      ))}
      
    </div>
  )
}
