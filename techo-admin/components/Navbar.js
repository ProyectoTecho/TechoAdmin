import React from 'react'
import LogoTecho from './LogoTecho'
import { UserIcon } from '@heroicons/react/outline'

const Navbar = () => {
    return (
        <header className='flex justify-between' >
            <LogoTecho styles={'group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'}/>
            <div className=' flex items-center m-5'>
                <UserIcon
                    className='group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-125 hover:z-50 mr-4'
                    height='60'
                    width='60'
                />
                <h2 className='whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>Nombre del usuario</h2>
                <button className='ml-3 rounded whitespace-nowrap group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-2.5' >Log Out</button>
            </div>
        </header>
    )
}

export default Navbar
