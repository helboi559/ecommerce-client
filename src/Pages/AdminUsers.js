import React from 'react'
import { useAuth } from '../Hooks/Auth'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminUsers = ({urlEndpoint,userList,setUserListLoading}) => {
    const {message,success}=userList
    const navigate = useNavigate()
    const {user} = useAuth()
    const [userId,setUserId] = useState('')
    // useEffect(()=> {
    //     fetchUserList()
    // },[user])
    const deleteUser = async(id) => {
        const url = `${urlEndpoint}/users/user-list/delete-user`
        
        setUserListLoading(true)
        console.log("deleteUser()",id)
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                token:user
            },
            body: JSON.stringify({
                id ,
            }),
        });
        const responseJSON = await response.json();
       setUserListLoading(false)
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
                           <div>UserName: </div>
                            <span>{oneUser.username}</span>
                            <div >Email:</div>
                            <span>{oneUser.email}</span>
                            <div >Phone:</div>
                            <span>{oneUser.phone}</span> 
                            <div >UserId:</div>
                            <span>{oneUser.id}</span>

                            <button onClick={()=> {
                                // setUserId(oneUser.id)
                                deleteUser(oneUser.id)
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