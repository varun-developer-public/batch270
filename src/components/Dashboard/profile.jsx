import React, { useContext, useRef } from 'react'
import { UserContext } from '../../context/UserContext'

function Profile() {
    const {user,setUser} = useContext(UserContext)
    const inpRef = useRef()
    const changeRole = ()=>{
        inpRef.current.value = "Why did You Changed?"
        inpRef.current.focus()
        setUser({
            ...user,
            role:"Full Stack Developer"
        })
    }
  return (
    <div>
        <h2>Profile</h2>
        <p>Name:{user.name}</p>
        <p>Current Role: {user.role}</p>
        <input type="text" name="" id="" ref={inpRef}/>
        <button onClick={changeRole}>Change Role</button>
    </div>
  )
}

export default Profile