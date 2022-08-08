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
    <>
        <h3>Create Product</h3>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => {
            setTitle(e.target.value)
        }}/>
        <label>category</label>
        <input type="text" value={category} onChange={(e) => {
            setCategory(e.target.value)
        }}/>
        <label>Image</label>
        <input type="text" value={image} onChange={(e) => {
            setImage(e.target.value)
        }}/>
        <label>description</label>
        <input type="text" value={description} onChange={(e) => {
            setDescription(e.target.value)
        }}/>
        <label>price</label>
        <input type="text" value={price} onChange={(e) => {
            setPrice(Number(e.target.value))
        }}/>
        <button onClick={()=> {
            const newProduct = {
                title,
                category,
                image,
                price:String(price),
                description
            }
            productSubmit(newProduct);
            navigate('/')

        }}>Add Product</button>
    </>
  )
}

export default CreateProduct