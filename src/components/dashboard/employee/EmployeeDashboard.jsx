import React from 'react'
import Nav from "../../Nav"
import TaskCount from './TaskCount'
import ActiveTask from './ActiveTask'
function EmployeeDashboard() {
  return (
    <section className='bg-[#191919] min-h-screen text-white'>
      <Nav />
      <div className='mt-10 max-md:px-1 py-5 max-lg:px-3  px-16 grid max-md:grid-cols-2 grid-cols-4 gap-4'>
        <TaskCount count={4} bc={"#5b6ed9"} info={"New Task"} />
        <TaskCount count={1} bc={"#83f28a"} info={"Completed Task"} />
        <TaskCount count={5} bc={"#e3dd39"} cl={"black"} info={"Accepted Task"} />
        <TaskCount count={0} bc={"#a010de"} info={"Failed Task"} />
      </div>

       <div className='mt-25 lg:px-8 flex flex-wrap max-md:flex-col gap-3 items-center justify-center px-1'>
        <ActiveTask/>
        <ActiveTask/>
        <ActiveTask/>

       </div>
    </section>
  )
}

export default EmployeeDashboard