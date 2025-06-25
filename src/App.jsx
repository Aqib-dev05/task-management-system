import React from 'react'
import Login from './components/Login'
import AdminDashboard from "./components/dashboard/admin/AdminDashboard"
import Button from './components/Button'
import EmployeeDashboard from './components/dashboard/employee/EmployeeDashboard'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
function App() {

  const { user } = useContext(AppContext);

  return (
    <>

      {!user || !user.role ? (
        <Login />
      ) : user.role === "admin" ? (
        <AdminDashboard />
      ) : user.role === "employee" ? (
        <EmployeeDashboard />
      ) : (
        <Login />
      )}

    </>
  )
}

export default App