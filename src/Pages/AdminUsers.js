import React from 'react'
import { useAuth } from '../Hooks/Auth'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminUsers = ({urlEndpoint,userList,fetchUserList}) => {
    const {message,success}=userList
    const navigate = useNavigate()
    const {user} = useAuth()
    const [userId,setUserId] = useState('')
    useEffect(()=> {
        fetchUserList()
    },[])
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
    <>
        <h3>Admin-Users</h3>
        <div>{!success && message}</div>
        {success && (
            <div className='user-list'><hr />
                {message.map((oneUser) => {
                    return(
                        <div className='user-profile' key={`user-id-${oneUser.id}`}>
                           <div>Username-{oneUser.username}</div>
                            <div>Email-{oneUser.email}</div>
                            <div>UserId-{oneUser.id}</div>
                            <div>Phone-{oneUser.phone}</div>
                            <button onClick={()=> {
                                setUserId(oneUser.id)
                                deleteUser()
                                navigate('/admin/users')
                            }}>Delete User</button>
                            
                            {/* {Object.values(oneUser.name).map((userData)=> {
                                return (
                                    <div className='user-details' key={`admin-user-id-${oneUser.id}`}><hr />
                                        <div>firstname{oneUser.userData}</div>
                                    </div>
                                )
                            })} */}
                            <hr /> 
                        </div>
                        
                    )
                    
                })}
            </div>
        )}
        
    </>
  )
}

export default AdminUsers