import React from 'react'
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