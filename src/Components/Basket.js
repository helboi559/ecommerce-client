import React from 'react'
import {useState} from "react"
const Basket = ({cartItems,addToBasket,removeFromBasket,urlEndpoint}) => {
  // console.log(cartItems)
  const [total,setTotal] = useState(0)
  
  const purchaseCart = async (cartItems) => {
    const url = `${urlEndpoint}/carts/create-cart`
    const data = {
      products:cartItems
    }
    const response = await fetch(url, {
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    const resJSON = await response.json()
  }
  return (
    <>
        <h3>Basket</h3>
        {/* if basket is empty show basket is empty */}
        <div>{cartItems.length === 0 && <div>Cart Is Empty</div> }</div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div>qty:{item.quantity}</div>
            <div>Price:{item.price}</div>
            <div>Name:{item.title}</div>
            <div>
              <button onClick={()=> addToBasket(item)}>+</button>
              <button onClick={()=> removeFromBasket(item)}>-</button>
            </div>
            <div>{item.quantity} x {item.price.toFixed(2)}</div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <button onClick={() => {
              // console.log(cartItems)
              purchaseCart(cartItems)
            }}>Purchase</button>
          </>
        )} 
        
    </>
  )
}

export default Basket