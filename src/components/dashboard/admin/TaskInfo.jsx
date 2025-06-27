import React from 'react'

function TaskInfo() {
  return (
   <div className='py-5 md:px-2 overflow-x-hidden'>
    <table className='text-white mt-10 w-full' style={{ borderCollapse: 'collapse' }}>
        <thead>
            <tr className='bg-[#ce6741]  ' >
                <th className='text-center px-2 py-3'>Employee name</th>
                <th className='text-center px-2 py-3'>New task</th>
                <th className='text-center px-2 py-3'>Active Task</th>
                <th className='text-center px-2 py-3'>Completed</th>
                <th className='text-center px-2 py-3'>Failed</th>
            </tr>
        </thead>
        <br />
        <tbody >
            {/* Table rows go here.Will be dynamic */}
            <tr className='font-bold  border-[#dadada]  border-[1px]'>
                <td className='text-center p-2'>Aqib</td>
                <td className='text-center p-2'>1</td>
                <td className='text-center text-[#ffff2d] p-2'>2</td>
                <td className='text-center p-2'>1</td>
                <td className='text-center text-[#d68696] p-2'>0</td>
            </tr>
            <br />
            
        </tbody>
    </table>
   </div>
  )
}

export default TaskInfo