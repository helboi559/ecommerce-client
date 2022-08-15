import React from 'react'
import { useEffect ,useState} from 'react'
import { useAuth } from '../Hooks/Auth'
const ProdAdminCard = ({product,fetchProductAndShow,urlEndpoint}) => {
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
    <div>
        <div>Product title: {product.title}</div>
        <div>Product category: {product.category}</div>
        <div>Product price: {product.price}</div>
        <button onClick={()=> {
            // setIsLoading(true)
            fetchProductAndShow()
            // setIsLoading(false)
        }}>Edit</button>
        <button onClick={()=> {
          deleteProduct()
        }}>Delete</button>
    </div>
  )
}

export default ProdAdminCard