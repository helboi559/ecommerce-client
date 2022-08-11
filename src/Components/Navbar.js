import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import {useAuth} from "../Hooks/Auth"

const Navbar = (props) => {
  const {user,logout} = useAuth()
  return (
    <>
      <nav>
        <div>
          <p>
            <Link to="/">HomePage</Link>
          </p>
          <p>
            <Link to="/admin">Admin </Link>
          </p>
          {!user && (
            <>
              <p>
                <Link to="/registration">Registration Page</Link>
              </p>
              <p>
                <Link to="/login">Login Page</Link>
              </p>
            </>
          )}
        </div>
          {user && (
            <> 
              <span>
                <strong>You are Logged in</strong>
              </span>
              <p>
               <Link to="/products">Products</Link>
              </p>
              <p>
                <Link to="/single-product">Single Product by id</Link>
              </p>
              <p>
                <Link to="/users">Users</Link>
              </p>
              <p>
                <Link to="/carts">Carts</Link>
              </p>
               <p>
                <Link to="/carts/user/order-history">My Order History</Link>
              </p>
              <p>
                <Link to="/create-product">Create Product</Link>
              </p>
              <button onClick={async () => {
                await logout()
              }}>Logout</button>
            </>
          )}
      </nav>
      <Outlet/>
    </>
  )
}

export default Navbar