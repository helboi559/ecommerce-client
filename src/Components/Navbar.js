import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import {useAuth} from "../Hooks/Auth"
import NavbarStyles from "../Styles/NavbarStyles.css"
const Navbar = ({size,setShowCart}) => {
  const {user,logout} = useAuth()
  // console.log("cart size",size)
  return (
    <div>
      <nav className='nav'>
        
          {!user && (
            <ul>
              <li >
              <Link to="/">Home</Link>
              </li>
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
               <Link to="/products">Home</Link>
              </li>
               <li>
                <Link to="/carts/user/order-history">My Orders</Link>
              </li>
               <li>
                <Link to="/admin/carts">Admin-All Purchases</Link>
              </li>
              <li>
              <Link to="/admin/products">Admin-Products</Link>
              </li>
              <li>
                <Link to="/admin/create-product">Admin-Create Product</Link>
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
      <Outlet/>
    </div>
  )
}


export default Navbar