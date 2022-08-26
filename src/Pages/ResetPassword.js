import React from 'react'
import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"

const ResetPassword = ({urlEndpoint}) => {
    const [password,setPassWord] = useState('')
    let {token,id} = useParams()
    const sendPasswordChange = async (password)=> {
        const url = `${urlEndpoint}/users/user/reset-password/:${id}/:${token}`
        // console.log("email",email)
        const data = {
        passwowrd:password
        }
        const res = await fetch(url, {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
        })
        const resJSON = await res.json()
        console.log("sendPasswordChange",resJSON)
        return resJSON
  }
    return (
    <div>
        {/* <div>{!success && message}</div> */}
        <div>
            <label htmlFor="">password</label>
            <input type="password" onChange={(e)=> {
                setPassWord(e.target.value)
            }}/>
            <label htmlFor="">confirm password</label>
            <input type="password" />
            <button onClick={()=> {
                sendPasswordChange(password)
            }}>Reset Password</button>
        </div>
                
            
    
       
    </div>
  )
}

export default ResetPassword