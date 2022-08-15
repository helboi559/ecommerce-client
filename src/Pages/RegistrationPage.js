import React from 'react'
import {useState} from "react"
import { useAuth } from "../Hooks/Auth";

const RegistrationPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { login, register } = useAuth();
  return (
    <div>
      <h1>Registration Page</h1>
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
            const redirectLocation = "/";
            await login(username, password, redirectLocation);
          }
        }}
      >
        Signup
      </button>
    </div>
  );
};

export default RegistrationPage