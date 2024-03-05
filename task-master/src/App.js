import React, { useState } from 'react'
import {  Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Student from './components/Student'
import Teacher from './components/Teacher'
import Admin from './components/Admin'
import SuperAdmin from './components/SuperAdmin'
import LoginPage from './components/LoginPage'

const App = () => {
  const [user,setUser]=useState("");

  return (
    <>
  
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/loginpage' element={<LoginPage user={user} setUser={setUser}/>} />
    <Route path='/admin' element={<Admin user={user} />} />
    <Route path='/student' element={<Student user={user} />} />
    <Route path='/teacher' element={<Teacher user={user} />} />
    <Route path='/superadmin' element={<SuperAdmin user={user} />} />
  </Routes>
  </>
    
   
  )
}

export default App