import './App.css';
import {Routes,Route,Outlet} from "react-router-dom"
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import {useEffect, useState} from 'react'
import Products from './Pages/Products';
import Users from './Pages/Users';
import Carts from './Pages/Carts';
import CreateProduct from './Pages/CreateProduct';
import SingleProduct from './Pages/SingleProduct';
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';
import {useAuth} from "./Hooks/Auth"
import AdminPage from './Pages/AdminProducts';
import CartsByUser from './Pages/CartsByUser';
import UserProfile from './Pages/UserProfile';
import AdminProducts from './Pages/AdminProducts';
import AdminUsers from './Pages/AdminUsers';
import UserCheckout from './Pages/UserCheckout';

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT
//https://e-commerce-server-jr.herokuapp.com/
//http://localhost:4000
const AdminLayout = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { verifyAdmin, user} = useAuth();

  useEffect(() => {
    const isAdminCheck = async () => {
      const isAdmin = await verifyAdmin();
      setIsAdmin(isAdmin);
    };
    isAdminCheck();
  }, [user]); // This useEffect will trigger once when the user tries to visit /admin

  return (
    <div>
      {!isAdmin && <h3>You Must Be An Admin To View This Page. Sorry.</h3>}
      {isAdmin && <Outlet />}
    </div>
  );
};
function App() {
  const [productList,setProductList] = useState({message:[],success:false})
  const [singleProd,setSingleProd] = useState({message:null,success:true})
  const [userList,setUserList] = useState({message:[],success:false})
  // const [cartList,setCartList] = useState([])
  const [sortField,setSortField] = useState('title')
  const [sortOrder,setSortOrder] = useState("asc")
  const [filterField,setFilterField] = useState("title")
  const [filterValue,setFilterValue] = useState('')
  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(100)
  const {user} = useAuth()
  const [orderHistory,setOrderHistory] = useState({message:[],success:true})
  const [singleUser,setSingleUser] = useState({message:null,success: false})
  const [productListLoading,setProductListLoading] = useState(false)
  const [userListLoading,setUserListLoading] = useState(false)
  const [showCart,setShowCart] = useState(true)
  const [cartItems,setCartItems] = useState([])
  
  //addtoBasket
  const addToBasket = (product) => {
    //MAKE DEEP COPY FIRST!!!
    const deepCopy = JSON.parse(JSON.stringify(product))
    //returns matching item if it exists in basket or undefined
    const exists = cartItems.find(ele => ele.id === deepCopy.id )
    if(exists) {
      setCartItems(cartItems.map(ele => ele.id === deepCopy.id ? {...exists, quantity:exists.quantity +1} : ele))
      console.log("exists true")
    } else {
      setCartItems([...cartItems,{...deepCopy, quantity:1 }])
      console.log('addToBasket()',cartItems)
    }
    
  }
  const removeFromBasket = (product) => {
    //deep copy
    const deepCopy = JSON.parse(JSON.stringify(product))
    const exists = cartItems.find(ele => ele.id === deepCopy.id )
    //if basket item qty is 1
    if(exists.quantity === 1) {
      setCartItems(cartItems.filter((ele) => ele.id !== deepCopy.id ))
      console.log("exists exists with quantity of 1")
    } else {
      setCartItems(cartItems.map(ele => ele.id === deepCopy.id ? {...exists, quantity:exists.quantity - 1} : ele))
    }
  }
  useEffect(() => {
    const fetchProductList = async () => {
      const url = `${urlEndpoint}/products?sortField=${sortField}&sortOrder=${sortOrder}&filterField=${filterField}&filterValue=${filterValue}&limit=${limit}&page=${page}`
      const res = await fetch(url)
      // setIsPageLoading(true)
      const resJSON = await res.json()
      // setIsPageLoading(false)
      console.log("fetchProductList()",resJSON)
      setProductList(resJSON)
      return resJSON
    }
    fetchProductList()
  },[sortField,sortOrder,filterField,filterValue,page,limit,productListLoading])
 
  //see own user profile
  const fetchSingleUser = async () => {
    const url = `${urlEndpoint}/users/user/my-profile`
      const res = await fetch(url, {
        method:"GET",
        headers: {
          "Content-Type":"application/json",
          token:user
        }
      })

      const resJSON = await res.json()
      setSingleUser(resJSON)
      console.log("fetchSingleUser()",resJSON)
      return resJSON
  }

    //fetch one product
   const fetchSingleProduct = async (productId) => {
    const url = `${urlEndpoint}/products/${productId}`
    const response = await fetch(url)
    const resJSON = await response.json()
    setSingleProd(resJSON)
    console.log("fetchSingleProduct()",resJSON)
    return resJSON
  }
  //get order history by user
  const fetchCartsByUser = async () => {
      const url = `${urlEndpoint}/carts/user/order-history`
      const res = await fetch(url, {
        method:"GET",
        headers: {
          "Content-Type":"application/json",
          token:user
        }
      })
      const resJSON = await res.json()
      setOrderHistory(resJSON)
      console.log("fetchCartsByUser()",resJSON)
      return resJSON
    }
     
  //create product **ADMIN**
  const productSubmit = async (product) => {
    setProductListLoading(true)
    const url = `${urlEndpoint}/products/create-product`
    const res = await fetch(url, {
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(product)
    })
    const resJSON = await res.json()
    setProductListLoading(false)
  }
    //all users fetch **ADMIN**
    useEffect(()=> {
      const fetchUserList = async () => {
      const url = `${urlEndpoint}/users/user-list`
      const res = await fetch(url, {
        method:"GET",
        headers: {
          "Content-Type":"application/json",
          token:user
        }
      })
      const resJSON = await res.json()
      setUserList(resJSON)
      console.log("fetchUserList()",resJSON)
      return resJSON
      }
      fetchUserList()
    },[user,userListLoading])
     
    

    //all purchases fetch **ADMIN**
    const fetchAllPurchases = async () => {
      const url = `${urlEndpoint}/carts`
      const res = await fetch(url, {
        method:"GET",
        headers: {
          "Content-Type":"application/json",
          token:user
        }
      })
      const resJSON = await res.json()
      setOrderHistory(resJSON)
      console.log("fetchAllPurchases()",resJSON)
      return resJSON
    }
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Navbar setShowCart={setShowCart} size={cartItems.length}/>}>
            <Route index element={<HomePage productList={productList}/>}/>
            <Route path="/products" element={<Products key={`products-list`} addToBasket={addToBasket}  sortField={sortField} sortOrder={sortOrder} filterField={filterField} 
              filterValue={filterValue} limit={limit} page={page} setSortField={setSortField} setSortOrder={setSortOrder} 
              setFilterField={setFilterField} setFilterValue={setFilterValue} setLimit={setLimit} setPage={setPage}  productList={productList} fetchSingleProduct={fetchSingleProduct} urlEndpoint={urlEndpoint} singleProd={singleProd}/>}/>
            {/* <Route path="/users" element={<Users userList={userList}/>}/> */}
            <Route path='/users/my-profile' element={<UserProfile urlEndpoint={urlEndpoint} singleUser={singleUser} fetchSingleUser={fetchSingleUser}/>}/>
            <Route path='/products/checkout' element={<UserCheckout cartItems={cartItems} setCartItems={setCartItems} removeFromBasket={removeFromBasket} addToBasket={addToBasket} urlEndpoint={urlEndpoint}/>}/>
            <Route path='/carts/user/order-history' element={<CartsByUser orderHistory={orderHistory} fetchCartsByUser={fetchCartsByUser} />}/>
            <Route path='registration' element={<RegistrationPage />}/>
            <Route path='login' element={<LoginPage />}/>
            <Route path='admin' element={<AdminLayout/>}>
              <Route path='products' element={<AdminProducts setProductListLoading={setProductListLoading} productList={productList} fetchSingleProduct={fetchSingleProduct} singleProd={singleProd} urlEndpoint={urlEndpoint}/>}/>
              <Route path='/admin/users' element={<AdminUsers userList={userList} urlEndpoint={urlEndpoint} setUserListLoading={setUserListLoading}/>}/>
              <Route path='/admin/create-product' element={<CreateProduct productSubmit={productSubmit}/>}/>
              <Route path="/admin/carts" element={<Carts orderHistory={orderHistory} urlEndpoint={urlEndpoint} fetchAllPurchases={fetchAllPurchases} />}/>
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
