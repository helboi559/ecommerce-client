import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

const CreateProduct = ({productSubmit}) => {
    const [title,setTitle] = useState('')
    const [category,setCategory] = useState('')
    const [image,setImage] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState(null)
    
    const navigate = useNavigate()
    return (
    <div className='create-product'>
        <h1>Add Product</h1>
        <div className="product-inputs">
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => {
                setTitle(e.target.value)
            }}/>
            </div>
            <div>
                <label>Category type(ie: clothing)</label>
                <input type="text" value={category} onChange={(e) => {
                setCategory(e.target.value)
                }}/>
            </div>
            <div>
                <label>Image URL:</label>
                <input type="text" value={image} onChange={(e) => {
                    setImage(e.target.value)
                }}/>
            </div>
            <div>
                <label>Price(USD)</label>
                <input type="number" value={price} onChange={(e) => {
                    setPrice(Number(e.target.value))
                }}/>
               
            </div>
            <div>
                <label>Description</label>
                <textarea type="text" value={description} onChange={(e) => {
                    setDescription(e.target.value)
            }}/>
            </div>
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