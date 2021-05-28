import React from 'react'
import LogoTecho from './LogoTecho'


const Navbar = () => {
    return (
        <header className='flex justify-between' >
            <LogoTecho/>
            <div className='pr-5'>
                <h2>Nombre del usuario</h2>
                <button className='ml-3'>Log Out</button>
            </div>

        </header>
    )
}

export default Navbar
