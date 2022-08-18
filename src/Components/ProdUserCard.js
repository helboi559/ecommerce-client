import React from 'react'
// import {useState} from "react"


// const currentCart = []
const ProdUserCard = ({product,fetchProductAndShow,addToBasket}) => {
  // const [quantity,setQuantity] = useState(1)
  // const [price,setPrice] = useState(1)
  // const 
  return (
    <div className='cards'>
      <div className="image-box">
        <img src={product.image} alt="" />
      </div>
      <div className="details">
        <p>{product.title}</p>
        <p>ProductId#:{product.id}</p>
        <p>Category:{product.category}</p>
        <p>Price:{product.price}</p>
        <button onClick={() => {
        fetchProductAndShow()
      }}>Show Details</button>
       <button className="button" onClick={() => {
         //add to curr cart list(by cartid/userid?)
        //  const price = quantity * product.price
         const productId = product.id
         const price = product.price
         const currProd = {
           price,
           id:productId,
           title:product.title,
           image:product.image
         }
         addToBasket(currProd)
        //  console.log(productId)
        //  console.log(price)
        //  console.log(currProd)

       }}>Add to Cart</button>
      </div>
      
    </div>
  )
}

export default ProdUserCard