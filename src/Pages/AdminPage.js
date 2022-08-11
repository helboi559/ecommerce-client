import React from 'react'

const AdminPage = ({productList}) => {
  const {message,success}=productList
  return (
    <>
    {success && (
      <>
        {message.map((product) => {
          return (
            <>
              {product.id}
            </>
          )
        })}
      </>
    )}
    </>
  )
}

export default AdminPage