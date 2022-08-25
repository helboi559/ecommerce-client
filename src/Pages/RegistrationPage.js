import React from 'react'
import {useState} from "react"
import { useAuth } from "../Hooks/Auth";
import AuthUser from "../Styles/AuthUser.css"
const RegistrationPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { login, register } = useAuth();
  return (
    <div className='auth-cont'>
      <h1>Register</h1>
      <div className="auth-details">
        <label>Username</label>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <label>Email</label>
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>Phone</label>
      <input
        type="text"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          const registerResult = await register(username, password,email,phone);
          if (registerResult.success) {
            const redirectLocation = "/products";
            await login(username, password, redirectLocation);
          }
        }}
      >
        Signup
      </button>

      </div>
      
    </div>
  );
};

export default RegistrationPage