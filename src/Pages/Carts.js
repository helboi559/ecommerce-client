import React from 'react'

const Carts = ({cartList}) => {
  console.log(cartList)
  return (
    <>
       <h1>All Purchases</h1>
      {cartList.map((cart) => {
        return (
          <div>
            <p>Cart Id(purchaseID): {cart.id}</p>
            <p> UserID (user who purchased) {cart.userId}</p>
            <p>{cart.date}</p>
            {cart.products.map((product) => {
              return (
                <div>
                  <p>Product Id{product.productId}</p>
                  <p>Product Qty{product.quantity}</p>
                </div>
              )
            })}
            
          </div>
        )
      })}
    </>
  )
}

export default Carts