import React from 'react'
// import { Outlet,Link } from 'react-router-dom'
import {useState} from "react"
import {NavLink,Outlet} from "react-router-dom"
import {useAuth} from "../Hooks/Auth"
import NavbarStyles from "../Styles/NavbarStyles.css"
const Navbar = ({size,setShowCart}) => {
  const {user,logout} = useAuth()
  // console.log("cart size",size)
  const [click,setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
         
          <NavLink to="/" className='nav-logo'>
            Logo
          <i className="fas fa-code"></i>
          </NavLink>
       
          {!user && (
            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink 
                  to="/registration"
                  
                  className="nav-links"
                  onClick={handleClick}
                >Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/login"
                  
                  className="nav-links"
                  onClick={handleClick}
                >Login</NavLink>
              </li>
            </ul>
          )}
        
          {!!user && (
            <ul className={click ? "nav-menu active" : "nav-menu"}> 
              
              <li className="nav-item">
               <NavLink 
               to="/products"
               className="nav-links"
                onClick={handleClick}
               >Products</NavLink>
              </li>
               <li className="nav-item">
                <NavLink 
                to="/carts/user/order-history"
                
                className="nav-links"
                onClick={handleClick}
                >My Orders</NavLink>
              </li>
               <li className="nav-item">
                <NavLink 
                to="/admin/carts"
                
                className="nav-links"
                onClick={handleClick}
                >Admin-All Orders</NavLink>
              </li>
              <li className="nav-item">
              <NavLink 
                to="/admin/products"
                
                className="nav-links"
                onClick={handleClick}
              >Admin-Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                to="/admin/create-product"
                
                className="nav-links"
                onClick={handleClick}
                >Admin-Add Product</NavLink>
              </li>
              <li className="nav-item">
              <NavLink 
                to="/admin/users"
                
                className="nav-links"
                onClick={handleClick}
              >Admin-Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                to="/users/my-profile"
                
                className="nav-links"
                onClick={handleClick}
                >MyProfile</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink 
                to="/products/checkout"
                className="nav-links"
                onClick={handleClick}
                >
                  <span><img src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964__340.png" alt="" /></span>
                  <span>{size}</span>
  
                  </NavLink>
                
              </li>
              
               <span className='login-status'>
                <p>Logged in</p>
              </span>

              <button onClick={async () => {
                await logout()
              }}>Logout</button>
            </ul>
           )}
          <div className="nav-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
              </div>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}


export default Navbar

{/* <nav className='nav'>
        <div className='brand-home'>
          <Link to="/">Home</Link>
        </div>
        <button className='toggle-button'>
           <span className='bar'></span>
            <span className='bar'></span>
          <span className='bar'></span>
          </button>
          {!user && (
            <ul>
              <li >
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        
          {user && (
            <ul> 
              
              <li>
               <Link to="/products">Products</Link>
              </li>
               <li>
                <Link to="/carts/user/order-history">My Orders</Link>
              </li>
               <li>
                <Link to="/admin/carts">Admin-All Orders</Link>
              </li>
              <li>
              <Link to="/admin/products">Admin-Products</Link>
              </li>
              <li>
                <Link to="/admin/create-product">Admin-Add Product</Link>
              </li>
              <li>
              <Link to="/admin/users">Admin-Users</Link>
              </li>
              <li>
                <Link to="/users/my-profile">MyProfile</Link>
              </li>
              <li className='nav-box'>
                <Link to="/products/checkout">
                  <span><img src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964__340.png" alt="" /></span>
                  <span>{size}</span>
  
                  </Link>
                
              </li>
              <span className='login-status'>
                <p>Logged in</p>
              </span>

              <button onClick={async () => {
                await logout()
              }}>Logout</button>
            </ul>
          )}
      </nav>
      <Outlet/> */}