import React from 'react'
// import { useParams } from 'react-router-dom'
import { useEffect ,useState} from 'react'
import { useAuth } from '../Hooks/Auth'

const CartsByUser = ({fetchCartsByUser,orderHistory}) => {
    const {message,success} = orderHistory
    const {user} = useAuth()
    // console.log(user)
    useEffect(()=> {
      fetchCartsByUser()
    },[user])
    return (
    <div>
       <p>{!success && message}</p>
      {!!success && (
        <div>
          {message.map((order)=> {
            return (
              <div key={`order-id-${order.id}`}><hr />
              {order.products.map((product)=> {
                return (
                  <div key={`product-id-${product.id}`}>
                    <p>Order Date-{order.date}</p>
                    <p>Order Number-{order.id}</p>
                    <p>Price-${product.price}</p>
                    <p>Item Name-{product.title}</p>
                    <p>Qty-{product.quantity}</p> 
                  </div>
                )
              })}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CartsByUser