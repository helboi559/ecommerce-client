import React from 'react'
import { useEffect } from 'react'

const Carts = ({fetchAllPurchases,orderHistory}) => {
  useEffect(()=> {
    fetchAllPurchases()
  },[])
  const {message,success} = orderHistory
  const sortByDate = (arr)=> {
      const deepCopy =  JSON.parse(JSON.stringify(arr))
      return deepCopy.reverse()
      
    }
  return (
    <>
      <h1>Admin-All Orders</h1>
      <div>{!success && message}</div>
      {!!success && (
        <div className='order-list'>
          {sortByDate(message).map((order)=> {
            return (
              <div className="order" key={`admin-order-id-${order.id}`}><hr />
                <div className='order-header'>
                  <p>Order Date-{order.date.slice(0,10)}</p>
                  <p>Order#-{order.id}</p>
                  <p>userId#-{order.userId}</p>
                </div>
                {order.products.map((product,index)=> {
                return (
                  <div className='order-items' key={`admin-product-index-${index}`}>
                    <div className='item-header'>
                       <p>{product.title}</p>
                    </div>
                   <div className="item-details">
                    <p>Price-${product.price}</p>
                    <p>Qty-{product.quantity}</p> 
                   </div>
                    
                  </div>
                )
              })}
              </div>
            )
          })}
        </div>
      )}
       
      
    </>
  )
}

export default Carts