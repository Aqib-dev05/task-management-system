import React from 'react'
import Button from './Button'

function Nav() {
  return (
    <header>
        <nav className='w-full bg-black py-6 flex items-center justify-between text-white max-md:px-4 max-sm:px-1 md:px-15 '>
            <div>
                <h2 className='text-2xl font-mono font-bold '>Hello</h2>
                <h1 className=' text-3xl font-bold font-[sans] ' >Username {'\u{1f44b} '}</h1>
            </div>
            <div>
                <Button text={"Log Out"} type={"Button"} varient={'outVar'} />
            </div>
        </nav>
    </header>
  )
}

export default Nav