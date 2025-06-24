import React from 'react'

function TaskCount({count,info,bc="red",cl="white"}) {
  return (
    
        <div className='py-17 max-sm:py-10 flex flex-col items-center justify-center rounded-3xl' style={{ backgroundColor: bc,color:cl }} >
            <h3 className='text-4xl font-bold '>{count}</h3>
            <h4 className='text-lg  font-bold'>{info}</h4>
        </div>
    
  )
}

export default TaskCount