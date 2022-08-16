import React from 'react'
import {useState} from "react"


// const currentCart = []
const ProdUserCard = ({product,fetchProductAndShow,addToBasket}) => {
  // const [quantity,setQuantity] = useState(1)
  // const [price,setPrice] = useState(1)
  // const 
  return (
    <div className="">
      <p>Product Id: {product.id}</p>
      <p>Product title: {product.title}</p>
      <p>Product category: {product.category}</p>
      <p>Product price: {product.price}</p>
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
           title:product.title
         }
         addToBasket(currProd)
        //  console.log(productId)
        //  console.log(price)
        //  console.log(currProd)

       }}>Add to Cart</button>
      {/* <input type="number" min="1" value={quantity} name="Quantity" onChange={(e) => {
        const qty = e.target.value
        setQuantity(Number(e.target.value))
      }}/> */}
    </div>
  )
}

export default ProdUserCard