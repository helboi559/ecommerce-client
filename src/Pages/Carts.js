import React from 'react'

const Carts = ({cartList}) => {
  return (
    <>
       <h3>CartList</h3>
      {cartList.map((cart) => {
        return (
          <>
            <p>Cart Id(purchaseID): {cart.id}</p>
            <p> UserID (user who purchased) {cart.userId}</p>
            <p>{cart.date}</p>
            {cart.products.map((product) => {
              return (
                <>
                  <p>Product Id{product.productId}</p>
                  <p>Product Qty{product.quantity}</p>
                </>
              )
            })}
            
          </>
        )
      })}
    </>
  )
}

export default Carts