import React,{useState}from 'react'
import {useAuth} from "../Hooks/Auth"
import ProductCard from "../Styles/ProductCard.css"
import ModalProductUser from '../Components/ModalProductUser'
const HomePage = ({productList}) => {
  const [show,setShow] = useState(false)
  const {message,success} = productList
  return (
    <div>
      <h1>Fake Online Store</h1>
      <div>{!success && message}</div>
      <ModalProductUser show={show} onClose={() => setShow(false)}>
      <span><strong>Only registered users can shop!</strong></span>
      </ModalProductUser>
      {!!success && (
        <section>
          {message.map((product)=> {
            return (
              <div key={`product-homepage-id-${product.id}`} className='cards'>
                <div className="image-box">
                    <img src={product.image} alt="" />
                </div>
                <div className="details">
                  <p>{product.title}</p>
                  <p>ProductId#:{product.id}</p>
                  <p>Category:{product.category}</p>
                  <p>Price:{product.price}</p>
                  <button onClick={() => {
                  setShow(true)
                  }}>Add to Cart</button>
                
                </div>
              </div>
            )
          })}
          
        </section>
      )}
    </div>
      
  )
}

export default HomePage