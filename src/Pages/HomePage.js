import React from 'react'


//set global filter values 
const sortFieldOption = ["title","category","price"]
const sortOrderOption = ["asc","desc"]
const filterFieldOption = ["title","category"]
const HomePage = ({sortField,sortOrder,filterField,filterValue,page,limit,setSortField,setSortOrder,setFilterField,setFilterValue,setPage,setLimit,productList}) => {
  
  const {message,success} = productList
  return (
    <>
      <h3>Homepage</h3>
      <label>SortField</label>
      <select value={sortField} onChange={(e) => {
        setSortField(e.target.value)
      }}>
        {sortFieldOption.map((ele) =>{
          return (
            <option value={ele}>{ele}</option>
          )
        })}
      </select>
      <label>SortOrder</label>
      <select value={sortOrder} onChange={(e) => {
        setSortOrder(e.target.value)
      }}>
        {sortOrderOption.map((ele) =>{
          return (
            <option value={ele}>{ele}</option>
          )
        })}
      </select>
      <label>FilterField</label>
      <select value={filterField} onChange={(e) => {
        setFilterField(e.target.value)
      }}>
        {filterFieldOption.map((ele) =>{
          return (
            <option value={ele}>{ele}</option>
          )
        })}
      </select>
      <label> Filter Value</label>
      <input type="text" value={filterValue} onChange={(e) => {
        setFilterValue(e.target.value)
      }} />
      <label> Page</label>
      <input type="text" value={page} onChange={(e) => {
        setPage(Number(e.target.value))
      }} />
      <label> Limit</label>
      <input type="text" value={limit} onChange={(e) => {
        setLimit(Number(e.target.value))
      }} />
      <p>{!success && message}</p>
      {!!success && (
        <ul>
          {message.map((product, index) => {
            console.log(product)
            return (
              <li key={`product-${index + 1}`}>
                <p>Title({product.title})- Price({product.price})- Category({product.category})</p>
                <p>Description({product.description})</p>
              </li>
            );
          })}
        </ul>
      )}
      
    </>
  )
}

// {message.map((product) => {
//         return (
//           <>
//             <p>{product.title}</p>
//             <p>{product.price}</p>
//             <p>{product.description}</p>
//             <p>{product.category}</p>
//             <img src={product.image} alt="" /><br />
//           </>
//         )
//       })}
export default HomePage