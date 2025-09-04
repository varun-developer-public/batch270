import React from 'react'
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const {login} = useAuth()
   const nav =  useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault();
        login({name: "Varun", role: "Admin"})
        alert("Logged In Successfully")
        nav("/dashboard")
    }

  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginPage