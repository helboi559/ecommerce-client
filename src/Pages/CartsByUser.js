import React from 'react'
// import { useParams } from 'react-router-dom'
import { useEffect ,useState} from 'react'
import { useAuth } from '../Hooks/Auth'

const CartsByUser = ({fetchCartsByUser,orderHistory}) => {
    // const [date,setDate] = useState('')
    const {message,success} = orderHistory
    const {user} = useAuth()
    // console.log(user)
    useEffect(()=> {
      fetchCartsByUser()
    },[user])
    // const getTotal = (price,quantity) => {
    //   let currTotal = 0
    //   currTotal += price * quantity
    //   return currTotal
    // }
    //sort list by date DESC
    const sortByDate = (arr)=> {
      const deepCopy =  JSON.parse(JSON.stringify(arr))
      return deepCopy.reverse()
      
    }
    return (
    <>
      <h1>My Order History</h1><hr/>
       <div>{!success && message}</div>
      {!!success && (
        <div className='order-list'>
          {sortByDate(message).map((order)=> {
            return (
              <div className="order" key={`order-id-${order.id}`}><hr />
                <div className='order-header'>
                  <p>Order Date-{order.date.slice(0,10)}</p>
                  <p>Order#-{order.id}</p>
                </div>
                {order.products.map((product,index)=> {
                return (
                  <div className='order-items' key={`product-index-${index}`}>
                    <div className='item-header'>
                       <p>{product.title}</p>
                    </div>
                   <div className="item-details">
                    <p>Qty-{product.quantity}</p> 
                    <p>Price-${product.price}</p>
                   </div>
                    {/* <div>
                      <p><strong>Total:{getTotal(product.price,product.quantity)}</strong></p>
                    </div> */}
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

export default CartsByUser