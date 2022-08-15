import React from 'react'
import { useEffect ,useState} from 'react'
import ModalUserProfile from '../Components/ModalUserProfile'
import { useAuth } from '../Hooks/Auth'

const UserProfile = ({userProfile,fetchUserProfile,urlEndpoint}) => {
    const {message,success} = userProfile
    const {user} = useAuth()
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')
    const [show,setShow] = useState(false)
    // const []
    useEffect(()=> {
    fetchUserProfile()
    },[user])
    
    const putUpdatedProfile = async() => {
        const url = `${urlEndpoint}/users/user/my-profile/edit-user`
        
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
        
        return responseJSON
    }
    return (
    <div>
        <h3>User Profile</h3>
        <ModalUserProfile putUpdatedProfile={putUpdatedProfile} show={show} onClose={()=>setShow(false)}>
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
        </ModalUserProfile>
        
        <div>{!success && message}</div>
        {!!success && (
            <div>
                <div>UserName:{message.username}</div>
                <div>Email:{message.email}</div>
                <div>Phone:{message.phone}</div>
                <div>Id:{message.id}</div>
                <button onClick={() => {
                    setEmail(message.email)
                    setPhone(message.phone)
                    // setPassword(message.password)
                    setShow(true)
                }}>Edit Profile</button>

            </div>
        )}
    </div>
  )
}

export default UserProfile