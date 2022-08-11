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
import AdminPage from './Pages/AdminPage';
import CartsByUser from './Pages/CartsByUser';

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT
const AdminLayout = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { verifyAdmin } = useAuth();

  useEffect(() => {
    const isAdminCheck = async () => {
      const isAdmin = await verifyAdmin();
      setIsAdmin(isAdmin);
    };
    isAdminCheck();
  }, []); // This useEffect will trigger once when the user tries to visit /admin

  return (
    <div>
      {!isAdmin && <h3>You Must Be An Admin To View This Page. Sorry.</h3>}
      {isAdmin && <Outlet />}
    </div>
  );
};
function App() {
  const [productList,setProductList] = useState({message:[],success:true})
  const [singleProd,setSingleProd] = useState({message:null,success:true})
  const [userList,setUserList] = useState([])
  const [cartList,setCartList] = useState([])
  const [sortField,setSortField] = useState('title')
  const [sortOrder,setSortOrder] = useState("asc")
  const [filterField,setFilterField] = useState("title")
  const [filterValue,setFilterValue] = useState('')
  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(100)
  const {user} = useAuth()
  const [orderHistory,setOrderHistory] = useState([])
  //fetch USERS/CARTS/PRODUCTS

  useEffect(() => {
    const fetchProductList = async () => {
      const url = `${urlEndpoint}/products?sortField=${sortField}&sortOrder=${sortOrder}&filterField=${filterField}&filterValue=${filterValue}&limit=${limit}&page=${page}`
      const res = await fetch(url)
      const resJSON = await res.json()
      // console.log(resJSON.message)
      setProductList(resJSON)
      return resJSON
    }
    fetchProductList()
  },[sortField,sortOrder,filterField,filterValue,page,limit])
  useEffect(() => {
    const fetchUserList = async () => {
      const url = `${urlEndpoint}/users`
      const res = await fetch(url)
      const resJSON = await res.json()
      // console.log(resJSON)
      setUserList(resJSON)
      return resJSON
    }
    fetchUserList()
  },[])
  useEffect(() => {
    const fetchCartList = async () => {
      const url = `${urlEndpoint}/carts`
      const res = await fetch(url)
      const resJSON = await res.json()
      // console.log(resJSON)
      setCartList(resJSON)
      return resJSON
    }
    fetchCartList()
  },[])
  
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
      setOrderHistory(resJSON.message)
      console.log("order history by user",resJSON)
      return resJSON
    }
     
  //create product
  const productSubmit = async (product) => {
    const url = `${urlEndpoint}/products/create-product`
    const res = await fetch(url, {
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(product)
    })
    const resJSON = await res.json()
  }
  const fetchSingleProduct = async (productId) => {
    const url = `${urlEndpoint}/products/${productId}`
    const response = await fetch(url)
    const resJSON = await response.json()
    setSingleProd(resJSON)
    console.log(resJSON)
    return resJSON
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element={<HomePage />}/>
            <Route path="/products" element={<Products sortField={sortField} sortOrder={sortOrder} filterField={filterField} 
              filterValue={filterValue} limit={limit} page={page} setSortField={setSortField} setSortOrder={setSortOrder} 
              setFilterField={setFilterField} setFilterValue={setFilterValue} setLimit={setLimit} setPage={setPage}  productList={productList} fetchSingleProduct={fetchSingleProduct} urlEndpoint={urlEndpoint} singleProd={singleProd}/>}/>
            {/* <Route path='/single-product' element={<SingleProduct fetchSingleProduct={fetchSingleProduct} product={product} />}/> */}
            <Route path='/create-product' element={<CreateProduct productSubmit={productSubmit}/>}/>
            <Route path="/users" element={<Users userList={userList}/>}/>
            <Route path="/carts" element={<Carts cartList={cartList} />}/>
            <Route path='/carts/user/order-history' element={<CartsByUser orderHistory={orderHistory} fetchCartsByUser={fetchCartsByUser} />}/>
            <Route path='registration' element={<RegistrationPage />}/>
            <Route path='login' element={<LoginPage />}/>
            <Route path='admin' element={<AdminLayout/>}>
              <Route index element={<AdminPage productList={productList}/>}/>
            </Route>
            {/* <Route path='/admin' element={<RegistrationPage/>}/> */}
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
