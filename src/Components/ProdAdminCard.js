import React from 'react'
import { useEffect ,useState} from 'react'
import { useAuth } from '../Hooks/Auth'


const ProdAdminCard = ({product,fetchProductAndShow,urlEndpoint,navigate}) => {
  // const [isLoading,setIsLoading] = useState(false)
  // useEffect(()=> {

  // },[])
  
  const {user} = useAuth()
  const deleteProduct = async()=> {
    const url = `${urlEndpoint}/products/delete-product`
    // setIsLoading(true)
    console.log(product.id)
    const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                token:user
            },
            body: JSON.stringify({
                id: product.id,
            }),
        });
        const responseJSON = await response.json();
        // setIsLoading(false)
        return responseJSON
  }
  return (
    <div className='cards'>
      <div className="image-box">
        <img src={product.image}  alt="" />
      </div>
      <div className="details">
        <p>Product title: {product.title}</p>
        <p>Product category: {product.category}</p>
        <p>Product price: {product.price}</p>
         <button className='admin-edit' onClick={()=> {
            // setIsLoading(true)
            fetchProductAndShow()
            // setIsLoading(false)
        }}>Edit</button>
        <button className='admin-delete' onClick={()=> {
          deleteProduct()
          navigate('/products')
        }}>Delete</button>
      </div>
        
       
    </div>
  )
}

export default ProdAdminCard