import React, { useEffect } from 'react'
import Nav from '../../Nav'
import Form from './Form'
import TaskInfo from './TaskInfo'

function AdminDashboard() {

  useEffect(()=>{
  
    document.title="Admin Dashboard"
  },[])

  return (
    <div className='bg-black min-h-screen'>
    <Nav/>
    <Form/>
    <TaskInfo/>
   </div>
  )
}

export default AdminDashboard