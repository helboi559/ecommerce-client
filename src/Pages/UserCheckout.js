import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from "react"
import { useAuth } from '../Hooks/Auth'
import BasketProducts from "../Styles/BasketProducts.css"
const UserCheckout = ({cartItems,setCartItems,urlEndpoint,addToBasket,removeFromBasket}) => {
    const {user} = useAuth()
  
    const [total,setTotal] = useState(0)
    const navigate = useNavigate()
        
    //update total helper function
    const handleTotal = () => {
        let currTotal = 0 
        cartItems.map((item)=> {
        currTotal += item.quantity * item.price
        })
        setTotal(currTotal)
    }
    useEffect(()=> {
        handleTotal()
    })
    const purchaseCart = async (cartItems) => {
        const url = `${urlEndpoint}/carts/create-cart`
        const data = {
        products:cartItems
        }
        
        const response = await fetch(url, {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            token:user
        },
        body:JSON.stringify(data)
        })
        const resJSON = await response.json()
        setCartItems([])
        
    }
    return (
    <div className='basket'>
        <h1>Checkout</h1>
        <div className='empty-basket'>{cartItems.length === 0 && <p>Cart Is Empty!</p> }</div>
        {cartItems.map((item) => (
          <div key={item.id} className="basket-box">
            <div className="basket-img">
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={()=> addToBasket(item)}>+</button>
              
              <button onClick={()=> removeFromBasket(item)}>-</button>
            </div>
            {/* <div>qty:{item.quantity}</div>
            <div>Price:{item.price}</div> */}
            
            <div>{item.quantity} x {item.price.toFixed(2)}</div>
            
          </div>
        ))}
        {cartItems.length !== 0 && (
          <div>
            <div className='total'>
              <span>Total Price for your cart:</span>
              <span>${total}</span>
            </div>
            <button className="purchase" onClick={() => {
              // console.log(cartItems)
              purchaseCart(cartItems)
              navigate("/carts/user/order-history")
            }}>Purchase</button>
          </div>
        )} 
    </div>
  )
}

export default UserCheckout