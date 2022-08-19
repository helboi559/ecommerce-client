import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import {useAuth} from "../Hooks/Auth"
// import {Navlink} from "react-router-dom"
import NavbarStyles from "./NavbarStyles.css"
const Navbar = (props) => {
  const {user,logout} = useAuth()
  return (
    <div>
      <nav className='nav'>
        
          {!user && (
            <ul>
              <li >
                <Link to="/registration">Registration Page</Link>
              </li>
              <li>
                <Link to="/login">Login Page</Link>
              </li>
            </ul>
          )}
        
          {user && (
            <ul> 
              
              <li >
              <Link to="/">HomePage</Link>
              </li>
              <li>
               <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/single-product">Single Product by id</Link>
              </li>
              <li>
                <Link to="/users/my-profile">MyProfile</Link>
              </li>
             
               <li>
                <Link to="/carts/user/order-history">My Orders</Link>
              </li>
               <li>
                <Link to="/carts">Admin-All Purchases</Link>
              </li>
              <li>
                <Link to="/create-product">Admin-Create Product</Link>
              </li>
              <li>
              <Link to="/admin/products">Admin-Products</Link>
              </li>
              <li>
              <Link to="/admin/users">Admin-Users</Link>
              </li>
              <span>
                <strong>You are Logged in</strong>
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