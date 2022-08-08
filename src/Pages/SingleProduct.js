import React from 'react'
import {useState} from "react"

const SingleProduct = ({fetchSingleProduct,product}) => {
  const [productId,setProductId] = useState(0)
  // const [title,setTitle] = useState('')
  // const [price,setPrice] = useState(0)
  // const [category,setCategory] = useState('')
  // const [description,setDescription] = useState('')
  // const [image,setImage] = useState('')
  const {message,success} = product
  return (
    <>
    <h3>Single Product</h3>
      <label>Product id</label>
      <input type="text" value={productId} onChange={(e)=> {
        setProductId(Number(e.target.value))
      }}/>
      <button onClick={()=> {
        fetchSingleProduct(productId)
      }}>Find Product</button>
      <p>{!success && message }</p>
      {!!success && (
        <div>
          <p>{message.title}</p>
          <p>{message.price}</p>
          <p>{message.category}</p>
          <p>{message.description}</p>
          <img src={message.image} />
        </div>
        
      )}
    </>
  )
}

export default SingleProduct