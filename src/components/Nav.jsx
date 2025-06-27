import React from 'react'
import Button from './Button'
import { useContext } from 'react'
import { AppContext } from "../context/AppContext"

function Nav() {

    const { setUser } = useContext(AppContext)

    function clickHandler() {
        setUser({ role: "", info: "" })
        localStorage.clear();

    }

    return (
        <header>
            <nav className='w-full bg-black py-6 flex items-center justify-between text-white max-md:px-4 max-sm:px-1 md:px-15 '>
                <div>
                    <h2 className='text-2xl font-mono font-bold '>Hello</h2>
                    <h1 className=' text-3xl font-bold font-[sans] ' >Username {'\u{1f44b} '}</h1>
                </div>
                <div>
                    <Button onclick={clickHandler} text={"Log Out"} type={"Button"} varient={'outVar'} />
                </div>
            </nav>
        </header>
    )
}

export default Nav