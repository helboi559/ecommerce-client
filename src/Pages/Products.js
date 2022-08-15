import React from 'react'
import {useNavigate} from 'react-router-dom'
import ModalProductUser from '../Components/ModalProductUser'
import {useState} from "react"
import ProdUserCard from '../Components/ProdUserCard'
import Basket from '../Components/Basket'
//set global filter values 
const sortFieldOption = ["title","category","price"]
const sortOrderOption = ["asc","desc"]
const filterFieldOption = ["title","category"]

const Products = ({sortField,sortOrder,filterField,filterValue,page,limit,setSortField,setSortOrder,setFilterField,setFilterValue,setPage,setLimit,productList,fetchSingleProduct,urlEndpoint,singleProd}) => {
  const [show,setShow] = useState(false)
  const {message,success} = productList
  const [title,setTitle] = useState('')
  const [price,setPrice] = useState(0)
  const [category,setCategory] = useState('')
  const [description,setDescription] = useState('')
  const [image,setImage] = useState('')
  const navigate = useNavigate()
  const [cartItems,setCartItems] = useState([])
  const addToBasket = (product) => {
    //MAKE DEEP COPY FIRST!!!
    const deepCopy = JSON.parse(JSON.stringify(product))
    //returns matching item if it exists in basket or undefined
    const exists = cartItems.find(ele => ele.id === deepCopy.id )
    if(exists) {
      setCartItems(cartItems.map(ele => ele.id === deepCopy.id ? {...exists, quantity:exists.quantity +1} : ele))
      console.log("exists true")
    } else {
      setCartItems([...cartItems,{...deepCopy, quantity:1 }])
      console.log('exists false')
    }
    
  }
  const removeFromBasket = (product) => {
    //deep copy
    const deepCopy = JSON.parse(JSON.stringify(product))
    const exists = cartItems.find(ele => ele.id === deepCopy.id )
    //if basket item qty is 1
    if(exists.quantity === 1) {
      setCartItems(cartItems.filter((ele) => ele.id !== deepCopy.id ))
      console.log("exists exists with quantity of 1")
    } else {
      setCartItems(cartItems.map(ele => ele.id === deepCopy.id ? {...exists, quantity:exists.quantity - 1} : ele))
    }
  }
  
  
  return (
    <>
      <h3>Products</h3>
      <label>SortField</label>
      <select value={sortField} onChange={(e) => {
        setSortField(e.target.value)
      }}>
        {sortFieldOption.map((ele) =>{
          return (
            <option value={ele}>{ele}</option>
          )
        })}
      </select>
      <label>SortOrder</label>
      <select value={sortOrder} onChange={(e) => {
        setSortOrder(e.target.value)
      }}>
        {sortOrderOption.map((ele) =>{
          return (
            <option value={ele}>{ele}</option>
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
      <input type="number" value={page} onChange={(e) => {
        setPage(Number(e.target.value))
      }} />
      <label> Limit</label>
      <input type="number" value={limit} onChange={(e) => {
        setLimit(Number(e.target.value))
      }} />
      <Basket urlEndpoint={urlEndpoint} removeFromBasket={removeFromBasket} addToBasket={addToBasket} cartItems={cartItems} />
      
      <ModalProductUser title={title} show={show} onClose={() => setShow(false)}>
        <label>description</label>
        <div>{description}</div>
        <label>price</label>
        <div>{price}</div>
        <label>Category</label>
        <div>{category}</div>
      </ModalProductUser>
      <p>{!success && message}</p>
      {!!success && (
        <>
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
              <div>
                <ProdUserCard addToBasket={addToBasket} product={product} fetchProductAndShow={fetchProductAndShow}/>
              </div>
            );
          })}
        </>
      )}
      
    </>
  )
}

//  <li key={`product-${index + 1}`} onClick={() => {
//                 //trigger shop modal
//               }}>
//                 <p>Title({product.title})- Price({product.price})- Category({product.category})</p>
//                 <p>Description({product.description})</p>
//               </li>

export default Products