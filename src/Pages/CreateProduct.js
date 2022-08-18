import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

const CreateProduct = ({productSubmit}) => {
    const [title,setTitle] = useState('')
    const [category,setCategory] = useState('')
    const [image,setImage] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState(0)
    
    const navigate = useNavigate()
    return (
    <div className='create-product'>
        <h1>Create Product</h1>
        <div className="product-inputs">
            <label>Title</label>
        <input type="text" value={title} onChange={(e) => {
            setTitle(e.target.value)
        }}/>
        <label>Category type(ie: clothing,electronics)</label>
        <input type="text" value={category} onChange={(e) => {
            setCategory(e.target.value)
        }}/>
        <label>Image URL:</label>
        <input type="text" value={image} onChange={(e) => {
            setImage(e.target.value)
        }}/>
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => {
            setDescription(e.target.value)
        }}/>
        <label>Price(USD)</label>
        <input type="text" value={price} onChange={(e) => {
            setPrice(Number(e.target.value))
        }}/>
        </div>
        
        <button onClick={()=> {
            const newProduct = {
                title,
                category,
                image,
                price:String(price),
                description
            }
            productSubmit(newProduct);
            navigate('/products')

        }}>Add Product</button>
    </div>
  )
}

export default CreateProduct