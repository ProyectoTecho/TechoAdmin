import React from 'react'
import LogoTecho from './LogoTecho'
import { UserIcon } from '@heroicons/react/outline'

const Navbar = () => {
    return (
        <header className='flex justify-between' >
            <LogoTecho />
            <div className='pr-5 flex items-center m-5'>
                <UserIcon
                    height='60'
                    width='auto'
                />
                <h2 className=' whitespace-nowrap'>Nombre del usuario</h2>
                <button className='ml-3 rounded whitespace-nowrap' >Log Out</button>
            </div>
        </header>
    )
}

export default Navbar
