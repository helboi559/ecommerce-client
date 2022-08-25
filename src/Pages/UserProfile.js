import React from 'react'
import { useEffect ,useState} from 'react'
import ModalUserProfile from '../Components/ModalUserProfile'
import { useAuth } from '../Hooks/Auth'
import { useNavigate } from 'react-router-dom'
import AuthUser from "../Styles/AuthUser.css"
const UserProfile = ({singleUser,fetchSingleUser,urlEndpoint}) => {
    const {message,success} = singleUser
    const {user} = useAuth()
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')
    const [show,setShow] = useState(false)
    const [userLoading,setUserLoading]=useState(false)
    const navigate = useNavigate()
    useEffect(()=> {
        fetchSingleUser()
    },[user,userLoading])
    
    const putUpdatedProfile = async() => {
        const url = `${urlEndpoint}/users/user/my-profile/edit-user`
        setUserLoading(true)
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                token:user
            },
            body: JSON.stringify({
                email: email,
                phone:phone,
                password:password
            }),
        });
        const responseJSON = await response.json();
        setUserLoading(false)
        setShow(false)
        return responseJSON
    }
    return (
    <div>
        <h1>User Profile</h1><hr />
        <ModalUserProfile navigate={navigate} putUpdatedProfile={putUpdatedProfile} show={show} onClose={()=>setShow(false)}>
        <div className="user-profile-inputs">
            <label>Email</label>
            <input type="text" value={email} onChange={(e)=> {
                setEmail(e.target.value)
            }}/>
            <label>Phone</label>
            <input type="text" value={phone} onChange={(e)=> {
                setPhone(e.target.value)
            }}/>
            <label>New Password</label>
            <input type="password"  onChange={(e)=> {
                setPassword(e.target.value)
            }}/>
        </div>
        
        </ModalUserProfile>
        
        <div>{!success && message}</div>
        {/* {console.log(success)} */}
        {!!success && (
            <div className='user-profile'>
                <div>UserName: </div>
                <span>{message.username}</span>
                <div >Email:</div>
                <span>{message.email}</span>
                <div >Phone:</div>
                <span>{message.phone}</span> 
                <div >UserId:</div>
                <span>{message.id}</span>

                <button onClick={() => {
                    setEmail(message.email)
                    setPhone(message.phone)
                    
                    setShow(true)
                }}>Edit Profile</button>

            </div>
        )}
    </div>
  )
}

export default UserProfile