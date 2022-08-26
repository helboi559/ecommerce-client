import React from 'react'
import {useState} from "react"

const ForgotPassword = ({urlEndpoint}) => {
  const [email,setEmail] = useState('')
  const sendEmailRequest = async (email)=> {
    const url = `${urlEndpoint}/users/user/forgot-password`
    console.log("email",email)
    const data = {
      email:email
    }
    const res = await fetch(url, {
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    const resJSON = await res.json()
    console.log("sendEmailRequest",resJSON)
    return resJSON
  }
  return (
    <div>
      <h1>Forget Password?</h1>
      <div>
        <h3>Enter Email Address </h3>
        <label>Email</label>
        <input type="text" value={email} onChange={(e)=> {
            setEmail(e.target.value)
        }}/>
        
      </div>
      <button onClick={()=> {
          sendEmailRequest(email)
          //activate modal notify user of reset
        }}>Submit</button>
    </div>
  )
}

export default ForgotPassword