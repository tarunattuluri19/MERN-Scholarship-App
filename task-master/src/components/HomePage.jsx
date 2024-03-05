import React from 'react'
import {  useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate=useNavigate()
    const handleLogin = () =>{
        navigate('/loginpage')
    }
  return (
    
    <div>
        Welcome to College... 
        <button onClick={handleLogin}>Login</button>

    </div>
  )
}

export default HomePage