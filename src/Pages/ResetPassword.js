import React from 'react'
import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"

const ResetPassword = ({urlEndpoint}) => {
    const [password,setPassWord] = useState('')
    const [password2,setPassword2] = useState('')
    const [resetMessage,setResetMessage] = useState('')
    const [disabled,setDisabled] = useState(false)
    let {token,id} = useParams()
    const sendPasswordChange = async (newPassword)=> {
        const url = `${urlEndpoint}/users/user/reset-password/${id}/${token}`
        // console.log("email",email)
        
        const res = await fetch(url, {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newPassword)
        })
        const resJSON = await res.json()
        console.log("sendPasswordChange",resJSON)
        if(!resJSON.success) {
            setResetMessage(resJSON.message)
        }
        if(resJSON.success) {
            setResetMessage(resJSON.message)
            setDisabled(true)
        }
        
        return resJSON
  }
    return (
    <div>
        <div className={`reset-message ${disabled ? 'reset-message-complete': ""}`}>{resetMessage}</div>
        <div className='auth-details'>
            <label>Password</label>
            <input type="password" disabled={disabled} onChange={(e)=> {
                setPassWord(e.target.value)
            }}/>
            <label>Confirm password</label>
            <input type="password" disabled={disabled} onChange={(e)=> {
                setPassword2(e.target.value)
            }}/>
            <button disabled={disabled} onClick={()=> {
                const data = {
                    password:password,
                    password2:password2
                }
                sendPasswordChange(data)
                
            }}>Reset Password</button>
        </div>
                
            
    
       
    </div>
  )
}

export default ResetPassword