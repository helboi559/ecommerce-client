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
// const Navbar = (props) => {
//   const {user,logout} = useAuth()
//   return (
//     <div>
//       <nav className='navbar'>
//         <div>
//           {!user && (
//             <div>
//               <div>
//                 <Link to="/registration">Registration Page</Link>
//               </div>
//               <div>
//                 <Link to="/login">Login Page</Link>
//               </div>
//             </div>
//           )}
//         </div>
//           {user && (
//             <div> 
//               <span>
//                 <strong>You are Logged in</strong>
//               </span>
//               <p>
//               <Link to="/">HomePage</Link>
//               </p>
//               <p>
//                <Link to="/products">Products</Link>
//               </p>
//               <p>
//                 <Link to="/single-product">Single Product by id</Link>
//               </p>
//               <p>
//                 <Link to="/users/my-profile">MyProfile</Link>
//               </p>
//               <p>
//                 <Link to="/carts">Carts</Link>
//               </p>
//                <p>
//                 <Link to="/carts/user/order-history">My Order History</Link>
//               </p>
//               <p>
//                 <Link to="/create-product">Create Product</Link>
//               </p>
//               <p>
//               <Link to="/admin/products">Admin-Products</Link>
//               </p>
//               <p>
//               <Link to="/admin/users">Admin-Users</Link>
//               </p>
//               <button onClick={async () => {
//                 await logout()
//               }}>Logout</button>
//             </div>
//           )}
//       </nav>
//       <Outlet/>
//     </div>
//   )
// }

export default Navbar