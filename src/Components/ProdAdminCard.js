import React from 'react'


const ProdAdminCard = ({product,fetchProductAndShow,navigate,deleteProduct}) => {
  
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
            //display product details and edit in modal
            fetchProductAndShow()
        }}>Edit</button>
        <button className='admin-delete' onClick={()=> {
          deleteProduct()
          navigate('/admin/products')
        }}>Delete</button>
      </div>
        
       
    </div>
  )
}

export default ProdAdminCard