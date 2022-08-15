import React from 'react'
import ModalAdminProduct from '../Components/ModalAdminProduct'
import {useState,useEffect} from "react"
import ProdAdminCard from '../Components/ProdAdminCard'
import { useAuth } from '../Hooks/Auth'
const AdminProducts = ({productList,fetchSingleProduct,urlEndpoint}) => {
  const {message,success}=productList
  const [show,setShow] = useState(false)
  const {user,login} = useAuth()
  // console.log(login)
  const [title,setTitle] = useState('')
  const [price,setPrice] = useState(0)
  const [category,setCategory] = useState('')
  const [description,setDescription] = useState('')
  const [prodId,setProdId] = useState(null)
  const [isLoading,setIsLoading] = useState(false)
  // useEffect(()=> {

  // },[price,title,category,description])
  const putUpdatedProduct = async()=> {
    const url = `${urlEndpoint}/products/edit-product`
    setIsLoading(true)
    const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                token:user
            },
            body: JSON.stringify({
                id: prodId,
                title: title,
                category:category,
                price:Number(price),
                description:description
            }),
        });
        const responseJSON = await response.json();
        setIsLoading(false)
        return responseJSON
  }
  
  return (
    <div>
      <h3>Admin-Products</h3>
      <ModalAdminProduct putUpdatedProduct={putUpdatedProduct} title={title} show={show} onClose={()=>setShow(false)} >
      <label>Title</label>
      <input type="text" value={title} onChange={(e)=> {
        setTitle(e.target.value)
      }}/>
      <label>Category</label>
      <input type="text" value={category} onChange={(e)=> {
        setCategory(e.target.value)
      }}/>
      <label>Price</label>
      <input type="number" value={price} onChange={(e)=> {
        setPrice(Number(e.target.value))
      }}/>
      <label>Description</label>
      <textarea type="text" value={description} onChange={(e)=> {
        setDescription(e.target.value)
      }}/>
      </ModalAdminProduct>
      <div>{!success && message}</div>
      {success && (
        <div>
          {message.map((product) => {
            const fetchProductAndShow = async () => {
              const response = await fetchSingleProduct(product.id)
              const resJSON = response.message
              console.log(resJSON)
              setTitle(resJSON.title)
              setCategory(resJSON.category)
              setPrice(Number(resJSON.price))
              setProdId(product.id)
              setDescription(resJSON.description)
              setShow(true)
            }
            
            return (
              <div key={`product-id-${product.id}`}>
                <ProdAdminCard product={product} urlEndpoint={urlEndpoint} fetchProductAndShow={fetchProductAndShow}/>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default AdminProducts