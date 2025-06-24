import React from 'react'
import Nav from '../../Nav'
import Form from './Form'
import TaskInfo from './TaskInfo'

function AdminDashboard() {


  return (
    <div className='bg-black min-h-screen'>
    <Nav/>
    <Form/>
    <TaskInfo/>
   </div>
  )
}

export default AdminDashboard