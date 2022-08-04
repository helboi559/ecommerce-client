import React from 'react'

const Users = ({userList}) => {
  return (
    <>
      <h3>UserList</h3>
      {userList.map((user) => {
        return (
          <>
            <p>User Id: {user.id}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.name.firstname}</p>
            <p>{user.name.lastname}</p>
          </>
        )
      })}
    </>
  )
}

export default Users