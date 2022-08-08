import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <p>
            <Link to="/">HomePage</Link>
          </p>
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
            <Link to="/create-product">Create Product</Link>
          </p>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}

export default Navbar