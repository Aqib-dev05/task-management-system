import React from 'react'
import Button from '../../Button'

function Input({type="text",place="",labelName}){
    return(
        <div className='flex flex-col mt-3 text-white'>
        <label className='text-xl font-medium text-[#dadada] '>{labelName}</label>
        <input className=' border-white lg:w-[380px] border-[1px] focus:border-2 font-semibold mt-0.5 p-2 focus:outline-0 rounded-md ' type={type} required placeholder={place} />
        </div>
    )
}

function Form() {
  return (
    <section>
        <form className='bg-[#2b2b2b] md:px-10 lg:px-20 w-full py-10 flex flex-col md:flex-row items-center justify-between ' >
            <div className='max-md:w-[90%]  '>
         <Input type='text' place={"Make a UI design"} labelName={"Task Title"}  />
         <Input type='date'  labelName={"Due Date"}  />
         <Input type='text' place={"employee name"} labelName={"Assign to"}  />
            </div>
            <div className='flex flex-col max-md:w-[90%] max-md:mt-6 text-white'>
                <label className='text-xl font-medium text-[#dadada]'>Description</label>
                <textarea cols={40} rows={12} className='border-white border-[1px] focus:border-2  font-semibold mt-2 p-2 focus:outline-0 rounded-md ' ></textarea>
                <Button text={"Create Task"} classname=' mt-5 rounded-md ' varient={'inVar'}/>
            </div>
        </form>
    </section>
  )
}

export default Form