import React, { useEffect } from 'react'
import Login from './components/Login'
import AdminDashboard from "./components/dashboard/admin/AdminDashboard"
import Button from './components/Button'
import EmployeeDashboard from './components/dashboard/employee/EmployeeDashboard'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import { GetLocally } from './utils/LocalStore'
function App() {

  const { user } = useContext(AppContext);
      const role = JSON.parse(localStorage.getItem("role"));


      useEffect(()=>{
        if(!role){
          document.title="Login Page"
        }
        else if(role === "admin"){
          document.title="Admin Dashboard"
        }
        else if(role === "employee"){
          document.title="Employee Dashboard"
        }
        else{
          document.title="Login Page"
        }
      },[role])

  return (
    <>
      {!role ? (
        <Login />
      ) : role === "admin" ? (
        <AdminDashboard />
      ) : role === "employee" ? (
        <EmployeeDashboard />
      ) : (
        <Login />
      )}
    </>
  )
}

export default App