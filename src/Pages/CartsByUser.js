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
    
    //sort list by date DESC
    const sortByDate = (arr)=> {
      const deepCopy =  JSON.parse(JSON.stringify(arr))
      return deepCopy.reverse()
      
    }
    return (
    <>
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
                {order.products.map((product)=> {
                return (
                  <div className='order-items'>
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

export default CartsByUser