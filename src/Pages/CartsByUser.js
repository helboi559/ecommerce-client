import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect ,useState} from 'react'

const CartsByUser = ({fetchCartsByUser,orderHistory}) => {
    // const {message,success} = orderHistory

    useEffect(()=> {
      fetchCartsByUser()
    },[])
    return (
    <>
      {orderHistory.map((order)=> {
        return (
            <div>
              {order.products}
            </div>
        )
      })}

      {/* {!!success && (
        <>
          {message.map((order)=> {
            return (
              <>
              {order.products}
              </>
            )
          })}
        </>
      )} */}
    </>
  )
}

export default CartsByUser