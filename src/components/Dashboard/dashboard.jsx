import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'

function Dashboard() {
    const {user} = useContext(UserContext)

  return (
    <div>
        <h2>Dashboard</h2>
        <p>Welcome, {user.name}</p>
        <p>Role: {user.role}</p>
        <input type="text" name="" id="" />
    </div>
  )
}

export default Dashboard