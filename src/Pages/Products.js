import React from 'react'
import ModalProductUser from '../Components/ModalProductUser'
import {useState} from "react"
import ProdUserCard from '../Components/ProdUserCard'
import Basket from '../Components/Basket'
import ProductCard from "../Styles/ProductCard.css"
//set global filter values 
const sortFieldOption = ["title","category","price"]
const sortOrderOption = ["asc","desc"]
const filterFieldOption = ["title","category"]

const Products = ({sortField,sortOrder,filterField,filterValue,page,limit,setSortField,setSortOrder,setFilterField,setFilterValue,setPage,setLimit,productList,fetchSingleProduct,urlEndpoint,singleProd,removeFromBasket,addToBasket}) => {
  const [show,setShow] = useState(false)
  const {message,success} = productList
  const [title,setTitle] = useState('')
  const [price,setPrice] = useState(0)
  const [category,setCategory] = useState('')
  const [description,setDescription] = useState('')
  const [image,setImage] = useState('')
  
  return (
    <div className="">
      <div>{!success && message}</div>
      <div className="">
          <label>SortField</label>
        <select value={sortField} onChange={(e) => {
          setSortField(e.target.value)
        }}>
          {sortFieldOption.map((ele,index) =>{
            return (
              <option key={`sortfield-option-${index}`} value={ele}>{ele}</option>
            )
          })}
        </select>
        <label>SortOrder</label>
        <select value={sortOrder} onChange={(e) => {
          setSortOrder(e.target.value)
        }}>
          {sortOrderOption.map((ele,index) =>{
            return (
              <option key={`sortorder-option-${index}`} value={ele}>{ele}</option>
            )
          })}
        </select>
        <label>FilterField</label>
        <select value={filterField} onChange={(e) => {
          setFilterField(e.target.value)
        }}>
          {filterFieldOption.map((ele) =>{
            return (
              <option value={ele}>{ele}</option>
            )
          })}
        </select>
        <label> Filter Value</label>
        <input type="text" value={filterValue} onChange={(e) => {
          setFilterValue(e.target.value)
        }} />
        <label> Page</label>
        <input type="number" value={page} min={1} onChange={(e) => {
          setPage(Number(e.target.value))
        }} />
        <label> Limit</label>
        <input type="number" value={limit} onChange={(e) => {
          setLimit(Number(e.target.value))
        }} />

      </div>
     
      
      <ModalProductUser title={title} show={show} onClose={() => setShow(false)}>
        <label><strong>Description:</strong></label>
        <div>{description}</div>
        <label><strong>Category:</strong></label>
        <div>{category}</div>
        <label><strong>Price:</strong></label>
        <div>${price}</div>
      </ModalProductUser>
      
      {!!success && (
        <section>
          {message.map((product) => {
            // console.log(product)
            const fetchProductAndShow = async () => {
              const response = await fetchSingleProduct(product.id)
              const resJSON = response.message
              console.log(product)
              setTitle(resJSON.title)
              setCategory(resJSON.category)
              setPrice(resJSON.price)
              setDescription(resJSON.description)
              setShow(true)
            }
            return (
              
                <ProdUserCard key={`product-id-${product.id}`} addToBasket={addToBasket} product={product} fetchProductAndShow={fetchProductAndShow}/>
              
            );
          })}
        </section>
      )}
      
    </div>
  )
}


export default Products