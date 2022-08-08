import React from 'react'

const Basket = ({cartItems}) => {
  // console.log(cartItems)
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
          </div>
        ))}
    </>
  )
}

export default Basket