import React from 'react'
import { useAuth } from '../Hooks/Auth'
import { useState } from 'react'

const AdminUsers = ({urlEndpoint,userList}) => {
    const {message,success}=userList
    const {user} = useAuth()
    const [userId,setUserId] = useState('')
    return (
    <div>
        <h3>Admin-Users</h3>
        <div>{!success && message}</div>
        {!!success && (
            <div>
                {message.map((oneUser) => {
                    const deleteUser = async(id) => {
                        const url = `${urlEndpoint}/users/user-list/delete-user`
                        // setIsLoading(true)
                        
                        // console.log(user.id)
                        const response = await fetch(url, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                                token:user
                            },
                            body: JSON.stringify({
                                id:userId ,
                            }),
                        });
                        const responseJSON = await response.json();
                        // setIsLoading(false)
                        return responseJSON
                    }
                    return (
                        <div><hr />
                            <div>Username-{oneUser.username}</div>
                            <div>Email-{oneUser.email}</div>
                            <div>UserId-{oneUser.id}</div>
                            <div>Phone-{oneUser.phone}</div>
                            <button onClick={()=> {
                                setUserId(oneUser.id)
                                deleteUser()
                            }}>Delete User</button>
                        </div>
                    )
                })}
            </div>
        )}
        
    </div>
  )
}

export default AdminUsers