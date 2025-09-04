import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const {user,logout} = useAuth()
  const nav = useNavigate()

  const handleLogout = ()=>{
    logout()
    nav("/login")
  }
  return (
    <div>
        <h2>Dashboard</h2>
        <p>Welcome, {user.name}</p>
        <p>Role: {user.role}</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard