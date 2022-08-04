import './App.css';
import {Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import {useEffect, useState} from 'react'
import Products from './Pages/Products';
import Users from './Pages/Users';
import Carts from './Pages/Carts';

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT
function App() {
  const [productList,setProductList] = useState({message:[],success:true})
  const [userList,setUserList] = useState([])
  const [cartList,setCartList] = useState([])
  const [sortField,setSortField] = useState('title')
  const [sortOrder,setSortOrder] = useState("asc")
  const [filterField,setFilterField] = useState("title")
  const [filterValue,setFilterValue] = useState('')
  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(100)
  
  
  
  //fetch USERS/CARTS/PRODUCTS

  useEffect(() => {
    const fetchProductList = async () => {
      const url = `${urlEndpoint}/products?sortField=${sortField}&sortOrder=${sortOrder}&filterField=${filterField}&filterValue=${filterValue}&limit=${limit}&page=${page}`
      const res = await fetch(url)
      const resJSON = await res.json()
      console.log(resJSON.message)
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
      console.log(resJSON)
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
      console.log(resJSON)
      setCartList(resJSON)
      return resJSON
    }
    fetchCartList()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element={<HomePage sortField={sortField} sortOrder={sortOrder} filterField={filterField} 
          filterValue={filterValue} limit={limit} page={page} setSortField={setSortField} setSortOrder={setSortOrder} 
          setFilterField={setFilterField} setFilterValue={setFilterValue} setLimit={setLimit} setPage={setPage}  productList={productList}/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/users" element={<Users userList={userList}/>}/>
            <Route path="/carts" element={<Carts cartList={cartList} />}/>
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
