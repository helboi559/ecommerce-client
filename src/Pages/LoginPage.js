import React from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import {useState} from "react"

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const { login } = useAuth();
  return (
    <div>
      <h1>Login Page</h1>
      <h3>{loginMessage}</h3>
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
      <button
        onClick={async () => {
          const loginResult = await login(username, password);
          if (!loginResult.success) {
            setLoginMessage(loginResult.message)
          }
        }}
      >
        Login
      </button>
    </div>
  );
};


export default LoginPage