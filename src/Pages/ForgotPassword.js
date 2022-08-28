import React from 'react'
import {useState} from "react"

const ForgotPassword = ({urlEndpoint}) => {
  const [email,setEmail] = useState('')
  const [resetMessage,setResetMessage] = useState('')
  const [disabled,setDisabled] = useState(false)
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
      <h1>Forget Password?</h1>
       <div className={`reset-message ${disabled ? 'reset-message-complete': ""}`}>{resetMessage}</div>
      <div className='auth-details'>
        <label>Enter Email Address</label>
        <input type="text" disabled={disabled} value={email} onChange={(e)=> {
            setEmail(e.target.value)
        }}/>
        <button  disabled={disabled} onClick={()=> {
          sendEmailRequest(email)
          //activate modal notify user of reset
        }}>Submit</button>
      </div>
      
    </div>
  )
}

export default ForgotPassword